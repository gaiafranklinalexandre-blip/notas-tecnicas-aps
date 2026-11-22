/* Catálogo "Valores de referência".
   - vrIniciar(raiz): liga busca, filtros e a troca lista <-> ficha dentro de `raiz`.
   - Endereços: #valores (lista) e #valores/<id-da-ficha>.
   - Dentro do índice de Notas Técnicas o conteúdo é carregado sob demanda
     (ver o carregador no fim do arquivo); na página avulsa já vem embutido. */
window.vrIniciar = function (raiz) {
  var lista = raiz.querySelector('#vr-lista');
  var detalhe = raiz.querySelector('#vr-detalhe');
  var q = raiz.querySelector('#vr-q');
  var vazio = raiz.querySelector('#vr-vazio');
  var cards = Array.prototype.slice.call(raiz.querySelectorAll('.vr-card'));
  var grupos = Array.prototype.slice.call(raiz.querySelectorAll('.vr-grupo'));
  var chips = Array.prototype.slice.call(raiz.querySelectorAll('.vr-chip'));
  var artigos = Array.prototype.slice.call(raiz.querySelectorAll('.vr-art'));
  var cap = '';
  var rolagem = 0;
  var cartaoAnterior = null;

  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim(); }

  function filtrar() {
    var termos = norm(q.value).split(/\s+/).filter(Boolean);
    var visiveis = 0;
    cards.forEach(function (c) {
      var ok = (!cap || c.dataset.cap === cap) && termos.every(function (t) { return c.dataset.busca.indexOf(t) >= 0; });
      c.hidden = !ok;
      if (ok) visiveis++;
    });
    grupos.forEach(function (g) { g.hidden = !g.querySelector('.vr-card:not([hidden])'); });
    vazio.hidden = visiveis > 0;
  }

  function topo() {
    var y = raiz.getBoundingClientRect().top + window.scrollY - 12;
    window.scrollTo(0, Math.max(0, Math.min(y, window.scrollY)));
  }

  function rota() {
    var id = location.hash.indexOf('#valores/') === 0 ? decodeURIComponent(location.hash.slice(9)) : '';
    var art = id ? artigos.filter(function (a) { return a.id === id; })[0] : null;
    if (art) {
      if (!lista.hidden) rolagem = window.scrollY;
      var mudou = art.hidden || !lista.hidden;
      cartaoAnterior = cards.filter(function (c) { return c.hash === '#valores/' + art.id; })[0] || null;
      artigos.forEach(function (a) { a.hidden = a !== art; });
      lista.hidden = true; detalhe.hidden = false;
      topo();
      if (mudou) art.querySelector('h2').focus({ preventScroll: true });
    } else {
      var estavaNaFicha = lista.hidden;
      detalhe.hidden = true; lista.hidden = false;
      if (estavaNaFicha) {
        window.scrollTo(0, rolagem);
        if (cartaoAnterior && !cartaoAnterior.hidden) cartaoAnterior.focus({ preventScroll: true });
      }
    }
  }

  q.addEventListener('input', filtrar);
  chips.forEach(function (ch) {
    ch.addEventListener('click', function () {
      cap = ch.dataset.cap;
      chips.forEach(function (o) {
        o.classList.toggle('ativo', o === ch);
        o.setAttribute('aria-pressed', o === ch ? 'true' : 'false');
      });
      filtrar();
    });
  });
  return { rota: rota };
};

(function () {
  var painel = document.getElementById('tab-valores');
  if (!painel) return;
  var naPaginaAvulsa = !painel.dataset.src;
  var estado = null, carregando = null;
  function ehValores() { return location.hash === '#valores' || location.hash.indexOf('#valores/') === 0; }

  function carregar() {
    if (naPaginaAvulsa) { if (!estado) estado = window.vrIniciar(painel); return Promise.resolve(); }
    if (!carregando) {
      carregando = fetch(painel.dataset.src, { cache: 'no-cache' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (h) { painel.innerHTML = h; estado = window.vrIniciar(painel); })
        .catch(function () {
          carregando = null;
          painel.innerHTML = '<p class="vr-aviso" role="status">Não foi possível carregar os valores de referência. Tente novamente em instantes.</p>';
        });
    }
    return carregando;
  }

  function rota() {
    if (!naPaginaAvulsa && !ehValores()) return;
    if (window.apsNavegar && painel.classList.contains('oculto')) window.apsNavegar('valores');
    carregar().then(function () { if (estado) estado.rota(); });
  }

  if (!naPaginaAvulsa) {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.tab-btn[data-tab]');
      if (!b) return;
      if (b.dataset.tab === 'valores') {
        if (location.hash !== '#valores') location.hash = 'valores'; else rota();
      } else if (ehValores()) {
        history.replaceState(null, '', location.pathname + location.search);
      }
    });
  }
  window.addEventListener('hashchange', rota);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', rota); else rota();
})();
