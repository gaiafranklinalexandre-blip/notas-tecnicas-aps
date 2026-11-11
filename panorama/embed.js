/* Gerado por Panorama/gerar_panorama_html.py — não editar à mão. */
(function () {
  var CSS = "\n:host{--blue:#1351b4;--navy:#071d41;--muted:#66758b;--line:#e2e8f0;--light:#f3f7ff;--shadow:0 3px 7px #071d4105,0 12px 28px #1351b414;--green:#16856a}\n*{box-sizing:border-box}\n.pan{margin:0;color:#263448;font:15px/1.55 'Segoe UI',Arial,sans-serif}\nbutton,input,select{font:inherit}\nbutton{cursor:pointer}\na{color:var(--blue)}\nbutton:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #d69e28;outline-offset:3px}\n\n.header{background:linear-gradient(115deg,#fff 45%,#f1f6ff);box-shadow:0 2px 4px #071d4108,0 8px 25px #1351b41a}\n.institution{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:15px 32px;border-bottom:1px solid #e9eff8;background:#ffffffb3}\n.logo-sus{display:block;width:76px;height:auto;max-height:40px;object-fit:contain;flex-shrink:0}\n.institution-text{display:flex;align-items:center;gap:15px;color:#40536d;font-size:15px}\n.institution-text strong{font-weight:600;color:var(--blue);font-size:16px}\n.institution-text>span:last-child{color:#53647d;font-size:14px}\n.separator{height:19px;border-left:1px solid #d8e1ec}\n.brand{display:flex;align-items:center;gap:18px;padding:24px 32px;border-bottom:1px solid #dce7fa;flex-wrap:wrap}\n.brand-name{font-size:24px;font-weight:650;letter-spacing:-.5px;color:#263448}\n.brand-caption{font-size:14px;color:var(--muted);margin-top:5px}\n\n/* Menu lateral \u2014 mesmo padr\u00e3o visual do \u00edndice de Notas T\u00e9cnicas\n   (painel_cabecalho.html/painel_visual.css), implementado aqui de forma\n   independente pra n\u00e3o acoplar os dois pipelines de gera\u00e7\u00e3o. Sem isso, ao\n   navegar pro Panorama o usu\u00e1rio perdia a barra lateral e n\u00e3o tinha como\n   voltar pras Notas T\u00e9cnicas. */\n#menu-toggle{border:0;border-radius:50%;width:42px;height:42px;display:grid;place-items:center;flex-shrink:0;color:var(--blue);background:linear-gradient(145deg,#f5f9ff,#dce9ff);box-shadow:0 3px 9px #1351b414}\n#menu-toggle svg{width:21px;height:21px;stroke:currentColor;stroke-width:1.7;fill:none;stroke-linecap:round;stroke-linejoin:round}\n#menu-fundo{display:none}\n.app-layout{display:grid;grid-template-columns:250px minmax(0,1fr);min-height:70vh}\n.sidebar{padding:32px 16px;background:linear-gradient(100deg,#fff 70%,#f4f7fe);border-right:1px solid #d8e3f5;box-shadow:5px 0 19px #1351b410;display:flex;flex-direction:column}\n.sidebar .nav-titulo{font-size:12px;letter-spacing:.12em;color:#7a8ba3;font-weight:650;margin:0 16px 14px}\n.sidebar .nav-titulo.planejamento{margin-top:42px}\n.sidebar nav{display:flex;flex-direction:column;gap:6px}\n.sidebar .nav-item{display:flex;align-items:center;text-align:left;width:100%;gap:12px;padding:15px;border-radius:8px;color:#53647d;font-size:15px;font-weight:550;line-height:1.55;text-decoration:none;position:relative;box-sizing:border-box}\n.sidebar .nav-item svg{width:21px;height:21px;stroke:currentColor;stroke-width:1.7;fill:none;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}\n.sidebar a.nav-item:hover{background:#edf3ff}\n.sidebar .nav-item.ativo{color:var(--blue);font-weight:700;background:linear-gradient(105deg,#dce9ff,#eff5ff);box-shadow:0 3px 9px #1351b417;cursor:default}\n.sidebar .nav-item.ativo:before{content:'';position:absolute;left:-16px;top:10px;bottom:10px;width:3px;background:var(--blue)}\n.sidebar-footer{margin-top:auto;padding:25px 15px 0;font-size:12px;color:#8190a6}\n.sidebar-footer strong{display:block;color:var(--navy);font-size:15px}\n@media(max-width:800px){\n  .app-layout{display:block}\n  .sidebar{position:fixed;left:-260px;top:0;bottom:0;width:240px;z-index:30;overflow:auto;box-shadow:10px 0 50px #071d4122;transition:left .2s}\n  body.menu-aberto .sidebar{left:0}\n  #menu-fundo:not([hidden]){display:block;position:fixed;inset:0;background:#071d4166;z-index:20}\n}\n.brand-badge{margin-left:auto;border:1px solid #d9e5f9;border-radius:30px;padding:6px 13px;color:var(--blue);font-size:11px;font-weight:650;white-space:nowrap;background:linear-gradient(125deg,#fff,#edf4ff);box-shadow:0 3px 10px #1351b40b}\n\n.main{max-width:1240px;margin:0 auto;padding:24px 34px 50px}\n.breadcrumb{display:flex;gap:9px;align-items:center;font-size:11.5px;color:#8290a2;margin-bottom:22px}\n.breadcrumb span:last-child{color:var(--blue);font-weight:600}\n.headline{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:24px;flex-wrap:wrap}\n.eyebrow{text-transform:uppercase;font-size:10.5px;letter-spacing:.12em;font-weight:700;color:#7689a6;margin-bottom:6px}\nh1{font-size:25px;line-height:1.25;letter-spacing:-.5px;color:var(--navy);margin:0 0 8px;font-weight:650}\n.description{color:var(--muted);font-size:13px;margin:0}\n.period{background:linear-gradient(115deg,#fff,#f2f7ff);box-shadow:0 3px 10px #1351b410;color:#546882;border:1px solid var(--line);border-radius:30px;padding:8px 15px;font-size:12.5px;white-space:nowrap;display:flex;align-items:center;gap:8px}\n.dot{height:7px;width:7px;border-radius:50%;background:var(--green);display:inline-block;animation:pulso-ao-vivo 2.2s ease-in-out infinite}\n@keyframes pulso-ao-vivo{0%,100%{opacity:1;box-shadow:0 0 0 0 #16856a4d}50%{opacity:.55;box-shadow:0 0 0 4px #16856a00}}\n@media(prefers-reduced-motion:reduce){.dot{animation:none}}\n\n.filters{background:linear-gradient(115deg,#f5f8ff,#e7f0ff);border:1px solid #c4d8f8;border-radius:12px;box-shadow:inset 0 1px #fff,0 5px 9px #1351b407,0 14px 28px #1351b412;padding:20px;display:flex;flex-wrap:wrap;gap:14px;align-items:flex-end}\n.field{display:flex;flex-direction:column;gap:7px;font-size:11px;font-weight:650;color:#4b5f7a;min-width:165px}\n.input-wrap{position:relative}\n.input-wrap svg{position:absolute;left:12px;top:12px;width:16px;height:16px;color:#8595ac;pointer-events:none}\n.input-wrap input{padding-left:38px}\n.autocomplete-lista{position:absolute;z-index:40;top:calc(100% + 6px);left:0;right:0;max-height:260px;overflow:auto;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 20px 50px #071d4130;padding:6px}\n.autocomplete-lista[hidden]{display:none}\n.autocomplete-item{padding:9px 12px;border-radius:7px;font-size:13px;color:#263448;cursor:pointer}\n.autocomplete-item:hover,.autocomplete-item.ativo{background:var(--light)}\n.autocomplete-item b{color:var(--blue)}\n.autocomplete-vazio{padding:9px 12px;font-size:12.5px;color:var(--muted)}\ninput,select{width:100%;min-width:0;height:42px;border:1px solid #ccd7e5;border-radius:7px;color:#3b4e69;background:#fff;padding:0 12px;font-size:13px;box-shadow:inset 0 1px 3px #071d4108,0 1px 2px #ffffff80}\ninput::placeholder{color:#91a0b5}\ninput:hover,select:hover{border-color:#829cc0}\n.primary{height:42px;padding:0 20px;border:0;border-radius:30px;background:linear-gradient(120deg,#2670e8,#1351b4 65%,#0c3c8a);color:#fff;font-size:12.5px;font-weight:650;box-shadow:0 4px 8px #1351b42b,0 8px 18px #1351b420,inset 0 1px #ffffff35;transition:box-shadow .18s,transform .18s}\n.primary:hover{background:linear-gradient(120deg,#1e61cc,#0c326f);box-shadow:0 6px 13px #1351b438,0 11px 22px #1351b425;transform:translateY(-1px)}\n.row-action{height:42px;padding:0 18px;border:1px solid #c6d8f5;border-radius:30px;background:linear-gradient(130deg,#fff,#f4f8ff);box-shadow:0 2px 5px #1351b40c;color:var(--blue);font-size:12.5px;font-weight:650;display:inline-flex;align-items:center;gap:7px}\n.row-action:hover{background:#edf4ff}\n#painel-mais-filtros{margin-top:12px}\n#painel-mais-filtros[hidden]{display:none}\n\n.stats{display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:9px;margin-top:26px}\n/* Mosaico em ret\u00e2ngulo \u00fanico: 1 grid s\u00f3, com n\u00ba fixo de colunas (igual ao\n   da linha mais cheia \u2014 10), pra as 4 linhas (10/10/10/1 cards) ficarem com\n   colunas alinhadas. As vagas que sobram (linha do RET) viram\n   \".stat-filler\" (ocupam o espa\u00e7o mas ficam invis\u00edveis). Todos os cards t\u00eam\n   o mesmo tamanho (largura e altura) \u2014 nada de hierarquia de tamanho. */\n.mosaico-linhas{display:grid;grid-template-columns:repeat(10,1fr);gap:12px;margin-top:22px}\n.stat-filler{visibility:hidden}\n.stat{position:relative;min-width:0;cursor:pointer;background:linear-gradient(125deg,#fff 50%,#f0f5ff);border:1px solid #dce6f7;border-radius:10px;box-shadow:var(--shadow);padding:18px 10px;overflow:visible;transition:box-shadow .18s,transform .18s,opacity .18s;-webkit-tap-highlight-color:transparent}\n.stat:focus-visible{outline:3px solid #d69e28;outline-offset:3px}\n.stat:before{content:'';position:absolute;top:0;left:10px;right:10px;height:2px;background:linear-gradient(90deg,#1351b4,#79a7f1,transparent);opacity:.65}\n@media(hover:hover){.stat:hover{transform:translateY(-2px);box-shadow:0 5px 10px #071d4108,0 18px 35px #1351b420;z-index:10}}\n.stat.tem-dado{background:linear-gradient(125deg,#fff 45%,#eef9f1);border-color:#bfe3cb}\n.stat.tem-dado:before{background:linear-gradient(90deg,#16856a,#6fcf9b,transparent)}\n.stat.zerado{background:#f2f3f5;border-color:#e3e5e9;opacity:.6}\n.stat.zerado:before{background:#c7cbd1;opacity:1}\n.stat.zerado .stat-number{color:#8a94a0}\n.stat-label{font-size:13.5px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.stat-number{font-size:25px;letter-spacing:-.4px;font-weight:650;color:var(--navy);line-height:1.2;margin-top:3px}\n.stat-tooltip{display:none;position:absolute;z-index:30;top:100%;left:50%;transform:translateX(calc(-50% + var(--desloc-tooltip,0px)));margin-top:8px;width:300px;max-width:min(82vw,340px);background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 20px 50px #071d4130;padding:16px;text-align:left;font-size:12.5px;line-height:1.55;color:#263448}\n/* Tooltip s\u00f3 em dispositivo com hover real (mouse) ou via foco de teclado \u2014\n   em touch o hover \"gruda\" ap\u00f3s o toque e brigava com o clique que abre o\n   modal; no celular/tablet o detalhe fica s\u00f3 no modal. */\n@media(hover:hover){.stat:hover .stat-tooltip{display:block}}\n.stat:focus-visible .stat-tooltip{display:block}\n.stat-tooltip .desc{color:var(--muted);margin-bottom:9px}\n.stat-tooltip .titulo{font-weight:700;color:var(--navy);margin:9px 0 3px;font-size:11px;text-transform:uppercase;letter-spacing:.03em}\n.stat-tooltip .linha{display:flex;justify-content:space-between;gap:10px;padding:2px 0}\n.stat-tooltip .linha b{white-space:nowrap;color:#263448}\n.stat-tooltip .total{font-weight:700;margin-top:9px;padding-top:9px;border-top:1px solid var(--line);display:flex;justify-content:space-between;color:var(--navy)}\n.stat-tooltip .dica-clique{margin-top:10px;padding-top:9px;border-top:1px solid var(--line);color:var(--blue);font-weight:650;font-size:11.5px;text-align:center}\n\n/* Rodap\u00e9 padr\u00e3o das nossas p\u00e1ginas: texto centralizado, cinza, sem fundo */\n.rodape-padrao{background:#071d41;border:0;padding:16px 32px;font-size:12px;font-weight:500;color:#fff;margin-top:0}\n/* Modo embutido (aba \"Panorama APS\" do \u00edndice de Notas T\u00e9cnicas): s\u00f3 o painel, sem a moldura da p\u00e1gina. */\n\n.modal-overlay{position:fixed;inset:0;z-index:100;background:#071d4199;display:flex;align-items:center;justify-content:center;padding:24px}\n.modal-overlay[hidden]{display:none}\n.modal-caixa{background:#fff;border-radius:14px;box-shadow:0 30px 70px #071d4140;width:100%;max-width:560px;max-height:85vh;overflow:auto}\n.modal-caixa .titulo{position:sticky;top:0;background:linear-gradient(120deg,#2670e8,#1351b4 65%,#0c3c8a);color:#fff;font-weight:650;font-size:14.5px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;gap:10px}\n.modal-caixa .titulo .fechar{cursor:pointer;background:#ffffff26;border:0;color:#fff;width:34px;height:34px;border-radius:50%;font-size:18px;line-height:1;flex:none}\n.modal-caixa .desc{color:var(--muted);padding:14px 18px 0;font-size:12.5px;line-height:1.5}\n.modal-caixa .corpo{padding:14px 18px 18px;overflow-x:auto}\n.tabela-detalhe{width:100%;border-collapse:collapse;font-size:12.5px;white-space:nowrap}\n.tabela-detalhe th{text-align:left;color:var(--muted);font-weight:650;font-size:11px;text-transform:uppercase;letter-spacing:.02em;padding:6px 10px;border-bottom:1px solid var(--line)}\n.tabela-detalhe th:not(:first-child),.tabela-detalhe td:not(:first-child){text-align:right}\n.tabela-detalhe td{padding:7px 10px;color:#263448;border-bottom:1px solid #f0f3f8}\n.tabela-detalhe td:first-child{color:var(--muted);white-space:normal}\n.tabela-detalhe tr.grupo td{font-weight:700;color:var(--navy);font-size:11px;text-transform:uppercase;letter-spacing:.03em;padding:12px 10px 4px;border-bottom:0}\n.tabela-detalhe tr.linha-total td{font-weight:700;color:var(--navy);border-top:1.5px solid var(--line);border-bottom:1.5px solid var(--line)}\n\n.aviso{padding:12px 17px;background:linear-gradient(100deg,#e7effe,#f2f6ff);box-shadow:0 3px 9px #1351b409;color:#48668f;border-radius:8px;font-size:12px;margin:18px 0 0;border-left:3px solid #77a2e3}\n\n.grade-detalhe{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:16px}\n.card-detalhe{background:#fff;border:1px solid #dbe5f4;border-radius:12px;box-shadow:var(--shadow);overflow:hidden}\n.card-detalhe .titulo{background:linear-gradient(120deg,#2670e8,#1351b4 65%,#0c3c8a);color:#fff;font-weight:650;font-size:13.5px;padding:12px 16px}\n.card-detalhe .corpo .linha{display:flex;justify-content:space-between;padding:8px 16px;font-size:12.5px}\n.card-detalhe .corpo .linha:nth-child(odd){background:#f7faff}\n.card-detalhe .corpo .linha span:first-child{color:var(--muted)}\n.card-detalhe .corpo .linha span:last-child{font-weight:650;color:#263448}\n.card-detalhe .corpo .linha-link{padding:12px 16px 6px}\n.card-detalhe .corpo .linha-link .row-action{width:100%;justify-content:center;font-size:12px;height:38px}\n\n\n/* Tablet: 10 colunas n\u00e3o cabem (cards de ~60px); 5 colunas mant\u00eam as linhas\n   tem\u00e1ticas leg\u00edveis em 2 metades. Os fillers saem pra n\u00e3o abrir buracos. */\n@media(max-width:1100px){\n  .main{padding:22px 24px 40px}\n  .mosaico-linhas{grid-template-columns:repeat(5,1fr)}\n  .stat-filler{display:none}\n}\n@media(max-width:800px){\n  .institution{padding:0 20px;height:auto;flex-wrap:wrap;gap:8px;padding-top:8px;padding-bottom:8px}\n  .institution-text{font-size:12px;gap:10px}\n  .brand{padding:16px 20px}\n  .brand-badge{display:none}\n  .main{padding:18px 16px 40px}\n  .headline{align-items:flex-start}\n  h1{font-size:21px}\n  .filters{padding:14px}\n  .field{min-width:0;flex:1 1 150px}\n  .stats{grid-template-columns:repeat(2,minmax(0,1fr))}\n  .grade-detalhe{grid-template-columns:1fr}\n  .mosaico-linhas{grid-template-columns:repeat(3,1fr)}\n  .stat-filler{display:none}\n  /* 16px evita o zoom autom\u00e1tico do iOS ao focar campo de busca/select */\n  input,select{font-size:16px}\n}\n@media(max-width:520px){\n  .logo-sus{width:58px;max-height:32px}\n  .institution-text>span,.institution-text>.separator{display:none}\n  .brand-name{font-size:19px}\n  .brand-caption{font-size:11.5px}\n  .headline{display:block}\n  .period{display:inline-flex;margin-top:12px}\n  .filters{flex-direction:column;align-items:stretch}\n  /* flex-basis 150px (do breakpoint de 800px) viraria ALTURA na dire\u00e7\u00e3o\n     coluna \u2014 zera pra cada campo ocupar s\u00f3 a altura natural */\n  .field{min-width:0;flex:0 0 auto}\n  .primary,.row-action{width:100%;justify-content:center}\n  .stats{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n  .mosaico-linhas{grid-template-columns:repeat(2,1fr);gap:9px}\n  .stat{padding:13px 14px}\n  .stat-number{font-size:19px}\n  .modal-overlay{padding:10px}\n  .modal-caixa{max-width:100%;max-height:92vh}\n}\n\n:host{display:block}\n.main{max-width:1240px;padding:0 0 32px}\n";
  var HTML = "<div class=\"pan\"><main class=\"main\">\n\n  <div class=\"headline\">\n    <div>\n      <div class=\"eyebrow\">FINANCIAMENTO DA APS</div>\n      <h1>Panorama do Financiamento da Aten\u00e7\u00e3o Prim\u00e1ria \u00e0 Sa\u00fade</h1>\n      <p class=\"description\">Indicadores nacionais de cofinanciamento, com filtros por territ\u00f3rio.</p>\n    </div>\n    <div class=\"period\"><span class=\"dot\"></span> Parcela <strong id=\"txt-parcela\">\u2014</strong> \u00b7 Fonte: eGestor APS</div>\n  </div>\n\n  <div class=\"filters\">\n    <label class=\"field\">Unidade federativa\n      <select id=\"f-uf\"><option value=\"\">Todos os estados</option></select>\n    </label>\n    <label class=\"field\" style=\"min-width:240px\">Munic\u00edpio\n      <div class=\"input-wrap autocomplete\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"10\" cy=\"10\" r=\"6\"/><path d=\"m15 15 6 6\"/></svg>\n        <input id=\"f-municipio\" placeholder=\"Busque pelo nome do munic\u00edpio\" autocomplete=\"off\">\n        <div class=\"autocomplete-lista\" id=\"lista-municipios\" hidden></div>\n      </div>\n    </label>\n    <button type=\"button\" class=\"row-action\" id=\"btn-mais-filtros\">+ Mais filtros</button>\n    <button type=\"button\" class=\"row-action\" id=\"btn-limpar-filtros\">Limpar sele\u00e7\u00f5es</button>\n  </div>\n\n  <div class=\"filters\" id=\"painel-mais-filtros\" hidden>\n    <label class=\"field\">Regi\u00e3o<select id=\"f-regiao\"><option value=\"\">Todas</option></select></label>\n    <label class=\"field\">Macrorregi\u00e3o<select id=\"f-macro\"><option value=\"\">Todas</option></select></label>\n    <label class=\"field\">Regi\u00e3o de Sa\u00fade<select id=\"f-regiao-saude\"><option value=\"\">Todas</option></select></label>\n    <label class=\"field\">Porte<select id=\"f-porte\"><option value=\"\">Todos</option></select></label>\n    <label class=\"field\">Capital?<select id=\"f-capital\"><option value=\"\">Tudo</option></select></label>\n    <label class=\"field\">Amaz\u00f4nia Legal<select id=\"f-amazonia\"><option value=\"\">Tudo</option></select></label>\n    <label class=\"field\">Pop. quilombola<select id=\"f-quilombola\"><option value=\"\">Tudo</option></select></label>\n    <label class=\"field\">Fronteira<select id=\"f-fronteira\"><option value=\"\">Tudo</option></select></label>\n    <label class=\"field\">Zona bioclim\u00e1tica<select id=\"f-zb\"><option value=\"\">Todas</option></select></label>\n  </div>\n\n  <div class=\"mosaico-linhas\" id=\"mosaico\"></div>\n\n  <div class=\"grade-detalhe\" id=\"perfil-municipio\" style=\"margin-top:20px\"></div>\n</main><div class=\"modal-overlay\" id=\"modal-overlay\" hidden>\n  <div class=\"modal-caixa\" id=\"modal-caixa\"></div>\n</div></div>";
  function montar(host, urlDados) {
    if (host.__apsPanorama) return;
    host.__apsPanorama = true;
    var raiz = host.attachShadow({ mode: 'open' });
    raiz.innerHTML = '<style>' + CSS + '</style>' + HTML;
    (function (raiz, urlDados) {
const ESTADO = { dados: null, campos: null, idx: {}, linhasAtuais: [] };

// Cada card do painel é descrito aqui uma vez (número do mosaico + tooltip +
// card de detalhe), em vez de ter uma função escrita à mão por estratégia —
// evita repetir a mesma lógica de renderização 31 vezes. "campo" é o nome do
// campo no JSON (ver CAMPOS em gerar_panorama_dados.py); "tipo" é "n" para
// quantidade ou "r" para valor em reais. "especial" cobre os poucos casos que
// não são soma direta de 1 campo (eSB = soma de 4 campos; PSE = contagem de
// municípios, não soma de valor).
const CARDS = [
  {
    chave: "esf", rotulo: "eSF", valorCampo: "esf_pagas",
    desc: "As eSF são o eixo central da Estratégia Saúde da Família, responsáveis por organizar a APS com equipe composta por médico, enfermeiro, técnico/auxiliar de enfermagem e agentes comunitários de saúde. Promovem o cuidado integral no território, fortalecendo vínculos e a equidade no SUS.",
    tooltip: [
      ["titulo", "Equipes cofinanciadas"], ["Total de equipes pagas", "esf_pagas", "n"],
      ["titulo", "Cofinanciamento"], ["Equidade", "esf_equidade", "r"], ["Vínculo", "esf_vinculo", "r"], ["Qualidade", "esf_qualidade", "r"], ["Implantação", "esf_implantacao", "r"],
      ["titulo", "Equipes incompletas"], ["25%", "esf_incompletas_25", "n"], ["50%", "esf_incompletas_50", "n"], ["75%", "esf_incompletas_75", "n"],
      ["titulo", "Equipes não custeadas*"], ["eSF", "esf_nao_pagas", "n"],
      ["total", "Valor total", "esf_valor_total", "r"],
    ],
    detalhe: [
      ["Teto", "esf_teto", "n"], ["Credenciadas", "esf_credenciadas", "n"], ["Homologadas", "esf_homologadas", "n"], ["Pagas", "esf_pagas", "n"],
      ["Completas", "esf_completas", "n"], ["Incompletas 75%", "esf_incompletas_75", "n"], ["Incompletas 50%", "esf_incompletas_50", "n"], ["Incompletas 25%", "esf_incompletas_25", "n"],
      ["Não custeadas", "esf_nao_pagas", "n"],
      ["Componente Equidade", "esf_equidade", "r"], ["Componente Vínculo", "esf_vinculo", "r"], ["Componente Qualidade", "esf_qualidade", "r"], ["Componente Implantação", "esf_implantacao", "r"], ["Valor Total", "esf_valor_total", "r"],
    ],
  },
  {
    chave: "eap", rotulo: "eAP", valorCampo: "eap_pagas",
    desc: "As eAP, compostas por médico e enfermeiro, representam uma configuração reduzida em relação às eSF, sendo uma alternativa em contextos onde há dificuldades para implementar equipes completas da Estratégia Saúde da Família.",
    tooltip: [
      ["titulo", "Equipes cofinanciadas"], ["eAP homologadas", "eap_homologadas", "n"], ["eAP cofinanciadas", "eap_pagas", "n"],
      ["titulo", "Por carga horária"], ["20h completas", "eap_completas_20", "n"], ["20h incompletas", "eap_incompletas_20", "n"],
      ["30h completas", "eap_completas_30", "n"], ["30h incompletas", "eap_incompletas_30", "n"],
      ["titulo", "Cofinanciamento"], ["Equidade", "eap_equidade", "r"], ["Vínculo", "eap_vinculo", "r"], ["Qualidade", "eap_qualidade", "r"], ["Implantação", "eap_implantacao", "r"],
      ["titulo", "Equipes não custeadas"], ["eAP", "eap_nao_pago", "n"],
      ["total", "Valor total", "eap_valor_total", "r"],
    ],
    detalhe: [
      ["Teto", "eap_teto", "n"], ["Credenciadas", "eap_credenciadas", "n"], ["Homologadas", "eap_homologadas", "n"], ["Pagas", "eap_pagas", "n"],
      ["Completas 20h", "eap_completas_20", "n"], ["Incompletas 20h", "eap_incompletas_20", "n"], ["Completas 30h", "eap_completas_30", "n"], ["Incompletas 30h", "eap_incompletas_30", "n"],
      ["Não custeadas", "eap_nao_pago", "n"],
      ["Componente Equidade", "eap_equidade", "r"], ["Componente Vínculo", "eap_vinculo", "r"], ["Componente Qualidade", "eap_qualidade", "r"], ["Componente Implantação", "eap_implantacao", "r"], ["Valor Total", "eap_valor_total", "r"],
    ],
  },
  {
    chave: "emulti", rotulo: "eMulti", valorCampo: "emulti_pagas_total",
    desc: "Compostas por trabalhadoras e trabalhadores de diferentes profissões, as eMulti atuam de forma integrada às demais equipes da APS, com corresponsabilização pelo cuidado da população e do território, articulação intersetorial e com a Rede de Atenção à Saúde (RAS).",
    tooltip: [
      ["titulo", "Equipes cofinanciadas"], ["Estratégica", "emulti_pagas_estrategica", "n"], ["Complementar", "emulti_pagas_complementar", "n"],
      ["Ampliada", "emulti_pagas_ampliada", "n"], ["Intermunicipal", "emulti_pagas_intermunicipal", "n"], ["Total de equipes", "emulti_pagas_total", "n"],
      ["titulo", "Atend. Remoto"], ["Qtd.", "emulti_atend_remoto_qtd", "n"], ["Custeio do TDIC", "emulti_custeio_tdic", "r"],
      ["titulo", "Cofinanciamento"], ["Custeio equipes", "emulti_custeio", "r"], ["Qualidade", "emulti_qualidade", "r"], ["Implantação", "emulti_implantacao", "r"],
      ["total", "Valor total", "emulti_valor_total", "r"],
    ],
    detalhe: [
      ["Teto Ampliada", "emulti_teto_ampliada", "n"], ["Teto Complementar", "emulti_teto_complementar", "n"], ["Teto Estratégica", "emulti_teto_estrategica", "n"],
      ["Credenciadas", "emulti_credenciadas", "n"], ["Homologadas", "emulti_homologadas", "n"],
      ["Pagas — Ampliada", "emulti_pagas_ampliada", "n"], ["Pagas — Complementar", "emulti_pagas_complementar", "n"], ["Pagas — Estratégica", "emulti_pagas_estrategica", "n"], ["Pagas — Intermunicipal", "emulti_pagas_intermunicipal", "n"],
      ["Total Pagas", "emulti_pagas_total", "n"], ["Não paga", "emulti_nao_paga", "n"],
      ["Atend. Remoto — Qtd.", "emulti_atend_remoto_qtd", "n"], ["Atend. Remoto — Custeio TDIC", "emulti_custeio_tdic", "r"],
      ["Custeio", "emulti_custeio", "r"], ["Componente Qualidade", "emulti_qualidade", "r"], ["Componente Implantação", "emulti_implantacao", "r"], ["Valor Total", "emulti_valor_total", "r"],
    ],
  },
  {
    chave: "esb", rotulo: "eSB", especial: "esb_total",
    desc: "As eSB atuam no cuidado à saúde bucal na APS, compostas por cirurgião-dentista e auxiliar ou técnico em saúde bucal. Integram-se às eSF nas UBS, garantindo acolhimento e atendimento à demanda espontânea ou programada, com vínculo à população do território.",
    tooltip: [
      ["titulo", "40 horas semanais"], ["Modalidade I", "esb_pagas_mod1", "n"], ["Quilombola/Assentada I", "esb_pagas_mod1_quilombola", "n"],
      ["Modalidade II", "esb_pagas_mod2", "n"], ["Quilombola/Assentada II", "esb_pagas_mod2_quilombola", "n"],
      ["titulo", "CH diferenciada"], ["20h semanais", "esb_pagas_chdif_20", "n"], ["30h semanais", "esb_pagas_chdif_30", "n"],
      ["total", "Total geral de equipes eSB", "esb_total_geral", "n"],
      ["titulo", "Cofinanciamento — eSB 40h"], ["Custeio", "esb_valor_custeio_40h", "r"], ["Qualidade", "esb_qualidade_40h", "r"],
      ["titulo", "Cofinanciamento — eSB CH Diferenciada"], ["Custeio", "esb_valor_custeio_chdif", "r"], ["Qualidade", "esb_qualidade_chdif", "r"],
    ],
    detalhe: [
      ["titulo", "40 horas semanais"],
      ["Teto", "esb_teto_40h", "n"], ["Credenciada", "esb_credenciada_40h", "n"], ["Homologada", "esb_homologada_40h", "n"],
      ["Modalidade I", "esb_pagas_mod1", "n"], ["Quilombola/Assentada I", "esb_pagas_mod1_quilombola", "n"],
      ["Modalidade II", "esb_pagas_mod2", "n"], ["Quilombola/Assentada II", "esb_pagas_mod2_quilombola", "n"],
      ["Não Paga", "esb_nao_paga_40h", "n"],
      ["titulo", "CH Diferenciada"],
      ["Teto", "esb_teto_chdif", "n"], ["Credenciada", "esb_credenciada_chdif", "n"], ["Homologada", "esb_homologada_chdif", "n"],
      ["20h semanais", "esb_pagas_chdif_20", "n"], ["30h semanais", "esb_pagas_chdif_30", "n"],
      ["Não Paga", "esb_nao_paga_chdif", "n"],
      ["Total Geral de Equipes eSB", "esb_total_geral", "n"],
      ["titulo", "Cofinanciamento"],
      ["titulo", "eSB 40h"],
      ["Implantação", "esb_implantacao_40h", "r"], ["Custeio", "esb_valor_custeio_40h", "r"], ["Qualidade", "esb_qualidade_40h", "r"],
      ["titulo", "eSB CH Diferenciada"],
      ["Implantação", "esb_implantacao_chdif", "r"], ["Custeio", "esb_valor_custeio_chdif", "r"], ["Qualidade", "esb_qualidade_chdif", "r"],
      ["Valor Total", "esb_valor_total", "r"],
    ],
  },
  {
    chave: "acs", rotulo: "ACS", valorCampo: "acs_total_pago",
    desc: "Os ACS desempenham papel central na Estratégia Saúde da Família, fortalecendo a integração entre os serviços da APS e a comunidade. São a base do vínculo entre o SUS e a população, atuando em visitas domiciliares, orientação sobre práticas saudáveis, acompanhamento de famílias, identificação precoce de situações de risco e ações de promoção da saúde, prevenção de doenças e vigilância à saúde.",
    tooltip: [
      ["titulo", "ACS cofinanciados"], ["Direto (95% e 5%)", "acs_pago_direto", "n"], ["Indireto", "acs_pago_indireto", "n"],
      ["titulo", "Total direto/indireto"], ["Equipes", "acs_total_pago", "n"],
      ["titulo", "Cofinanciamento"], ["ACS direto", "acs_valor_direto", "r"], ["ACS indireto", "acs_valor_indireto", "r"],
      ["total", "Valor total", "acs_valor_total", "r"],
    ],
    detalhe: [
      ["Teto Direto", "acs_teto_direto", "n"], ["Credenciado Direto", "acs_credenciado_direto", "n"], ["Pago Direto", "acs_pago_direto", "n"], ["Valor Direto", "acs_valor_direto", "r"],
      ["Limite Indireto", "acs_limite_indireto", "n"], ["Pago Indireto", "acs_pago_indireto", "n"], ["Valor Indireto", "acs_valor_indireto", "r"], ["Total Pago (Direto + Indireto)", "acs_total_pago", "n"], ["Valor Total", "acs_valor_total", "r"],
    ],
  },
  {
    chave: "padi", rotulo: "Padi", valorCampo: "padi_pago",
    desc: "O Programa de Atenção Domiciliar à Pessoa Idosa (Padi) é voltado a pessoas idosas com 60 anos ou mais e restrição ao domicílio, coordenado pelas eMulti em atuação integrada às eSF, oferecendo plano de cuidado adequado às necessidades da pessoa idosa, da família e dos cuidadores.",
    tooltip: [
      ["eMulti credenciada com Padi", "padi_credenciado", "n"], ["Padi pago", "padi_pago", "n"], ["Padi não custeado", "padi_nao_custeado", "n"],
      ["Implantação", "padi_implantacao", "r"], ["Custeio", "padi_custeio", "r"],
      ["total", "Valor total", "padi_valor_total", "r"],
    ],
    detalhe: [
      ["Credenciado", "padi_credenciado", "n"], ["Pago", "padi_pago", "n"], ["Não Custeado", "padi_nao_custeado", "n"],
      ["Custeio", "padi_custeio", "r"], ["Implantação", "padi_implantacao", "r"], ["Valor Total", "padi_valor_total", "r"],
    ],
  },
  {
    chave: "esfr", rotulo: "eSFR", valorCampo: "esfr_pago",
    desc: "As eSFR são equipes específicas para o cuidado em territórios ribeirinhos, costeiros e marítimos, com componentes adicionais como unidade de apoio, meios de transporte terrestre, embarcações de pequeno porte e profissionais extras.",
    tooltip: [
      ["titulo", "Equipes cofinanciadas"], ["Credenciadas", "esfr_credenciado", "n"], ["Homologadas", "esfr_homologado", "n"], ["Pagas", "esfr_pago", "n"], ["Não custeadas", "esfr_nao_custeada", "n"],
      ["titulo", "Componentes extras"], ["Aux. de enfermagem", "esfr_aux_enfermagem", "n"], ["Aux. de saúde bucal", "esfr_aux_sb", "n"], ["Microscopista", "esfr_microscopista", "n"],
      ["Prof. nível superior", "esfr_prof_superior", "n"], ["Unidade de apoio", "esfr_unidade_apoio", "n"], ["Embarcação", "esfr_embarcacao", "n"],
      ["titulo", "Cofinanciamento"], ["Implantação", "esfr_implantacao", "r"], ["Custeio", "esfr_custeio", "r"], ["Componente Extra", "esfr_custeio_extra", "r"], ["Qualidade", "esfr_qualidade", "r"], ["Vínculo", "esfr_vinculo", "r"],
      ["total", "Valor total", "esfr_total", "r"],
    ],
    detalhe: [
      ["Credenciado", "esfr_credenciado", "n"], ["Homologado", "esfr_homologado", "n"], ["Pago", "esfr_pago", "n"], ["Não Custeada", "esfr_nao_custeada", "n"],
      ["Aux. Enfermagem", "esfr_aux_enfermagem", "n"], ["Aux. Saúde Bucal", "esfr_aux_sb", "n"], ["Microscopista", "esfr_microscopista", "n"],
      ["Prof. Nível Superior", "esfr_prof_superior", "n"], ["Unidade de Apoio", "esfr_unidade_apoio", "n"], ["Embarcação", "esfr_embarcacao", "n"],
      ["Custeio", "esfr_custeio", "r"], ["Custeio Componente Extra", "esfr_custeio_extra", "r"], ["Qualidade", "esfr_qualidade", "r"], ["Vínculo", "esfr_vinculo", "r"], ["Implantação", "esfr_implantacao", "r"], ["Valor Total", "esfr_total", "r"],
    ],
  },
  {
    chave: "ecr", rotulo: "eCR", valorCampo: "ecr_total",
    desc: "As equipes de Consultório na Rua (eCR) garantem cuidado integral à população em situação de rua, atuando de forma itinerante com equipes multiprofissionais — médico, enfermeiro, psicólogo, assistente social, entre outros.",
    tooltip: [
      ["titulo", "Modalidade I"], ["Quantidade", "ecr_mod1", "n"], ["Custeio", "ecr_custeio_mod1", "r"], ["Qualidade", "ecr_qualidade_mod1", "r"],
      ["titulo", "Modalidade II"], ["Quantidade", "ecr_mod2", "n"], ["Custeio", "ecr_custeio_mod2", "r"], ["Qualidade", "ecr_qualidade_mod2", "r"],
      ["titulo", "Modalidade III"], ["Quantidade", "ecr_mod3", "n"], ["Custeio", "ecr_custeio_mod3", "r"], ["Qualidade", "ecr_qualidade_mod3", "r"],
      ["titulo", "Total eCR"], ["Total", "ecr_total", "n"],
      ["titulo", "Cofinanciamento"], ["Custeio", "ecr_custeio", "r"], ["Qualidade", "ecr_qualidade", "r"], ["Implantação", "ecr_implantacao", "r"],
      ["total", "Valor total", "ecr_valor", "r"],
    ],
    detalhe: [
      ["Credenciadas", "ecr_credenciadas", "n"], ["Com portaria de homologação", "ecr_homologacao", "n"],
      ["Modalidade I Pagas", "ecr_mod1", "n"], ["Modalidade I Custeio", "ecr_custeio_mod1", "r"], ["Modalidade I Qualidade", "ecr_qualidade_mod1", "r"],
      ["Modalidade II Pagas", "ecr_mod2", "n"], ["Modalidade II Custeio", "ecr_custeio_mod2", "r"], ["Modalidade II Qualidade", "ecr_qualidade_mod2", "r"],
      ["Modalidade III Pagas", "ecr_mod3", "n"], ["Modalidade III Custeio", "ecr_custeio_mod3", "r"], ["Modalidade III Qualidade", "ecr_qualidade_mod3", "r"],
      ["Total eCR", "ecr_total", "n"], ["Não Pago", "ecr_nao_pago", "n"],
      ["Custeio", "ecr_custeio", "r"], ["Qualidade", "ecr_qualidade", "r"], ["Implantação", "ecr_implantacao", "r"], ["Valor Total", "ecr_valor", "r"],
    ],
  },
  {
    chave: "eapp", rotulo: "eAPP", valorCampo: "eapp_total_pago",
    desc: "As eAPP garantem cuidado integral às pessoas privadas de liberdade nas unidades prisionais — atendimentos clínicos, acompanhamento de condições crônicas e ações preventivas — assegurando equidade e universalidade do SUS.",
    tooltip: [
      ["titulo", "eAPP Municipal"], ["Equipes pagas", "eapp_mun_paga", "n"], ["Custeio", "eapp_mun_custeio", "r"], ["Qualidade", "eapp_mun_qualidade", "r"], ["Implantação", "eapp_mun_implantacao", "r"],
      ["titulo", "eAPP Estadual"], ["Equipes pagas", "eapp_est_paga", "n"], ["Custeio", "eapp_est_custeio", "r"], ["Qualidade", "eapp_est_qualidade", "r"], ["Implantação", "eapp_est_implantacao", "r"],
      ["titulo", "Total geral"], ["eAPP 6h", "eapp_prisional_6h", "n"], ["eAPP 20h", "eapp_prisional_20h", "n"], ["eAPP 30h", "eapp_prisional_30h", "n"], ["Total equipes", "eapp_total_pago", "n"],
      ["total", "Valor total", "eapp_valor_total", "r"],
    ],
    detalhe: [
      ["Municipal — Credenciada", "eapp_mun_credenciada", "n"], ["Municipal — Paga", "eapp_mun_paga", "n"], ["Municipal — Total", "eapp_total_mun", "n"],
      ["Estadual — Credenciada", "eapp_est_credenciada", "n"], ["Estadual — Paga", "eapp_est_paga", "n"], ["Estadual — Total", "eapp_total_est", "n"],
      ["eAPP 6h", "eapp_prisional_6h", "n"], ["eAPP 20h", "eapp_prisional_20h", "n"], ["eAPP 30h", "eapp_prisional_30h", "n"],
      ["Total de equipes pagas", "eapp_total_pago", "n"], ["Valor Total", "eapp_valor_total", "r"],
    ],
  },
  {
    chave: "pmm", rotulo: "PMM", valorCampo: "pmm_total_vagas",
    desc: "O Programa Mais Médicos (PMM) amplia o acesso à saúde em regiões com escassez de profissionais médicos, especialmente em áreas remotas, vulneráveis e de difícil provimento, fortalecendo a APS com cuidado mais próximo e contínuo.",
    tooltip: [
      ["Vagas — cofinanciamento federal", "pmm_federal", "n"], ["Vagas — coparticipação", "pmm_coparticipacao", "n"],
      ["total", "Total de vagas ativas", "pmm_total_vagas", "n"],
    ],
    detalhe: [
      ["Vagas — cofinanciamento federal", "pmm_federal", "n"], ["Vagas — coparticipação", "pmm_coparticipacao", "n"], ["Total de Vagas Ativas", "pmm_total_vagas", "n"],
    ],
  },
  {
    chave: "pac", rotulo: "PAC", valorCampo: "pac_total_saps_qnt",
    desc: "O Novo PAC na Saúde representa um salto na expansão da assistência à população pelo Sistema Único de Saúde - SUS e possibilitará a universalidade de serviços essenciais na rede pública, além da retomada do investimento em políticas públicas, especialmente em obras de infraestrutura econômica, social e urbana a partir da nova versão do programa.",
    tooltip: [
      ["titulo", "SAPS"], ["UBS 24", "pac_ubs_2024_qnt", "n"], ["UBS 25", "pac_ubs_2025_qnt", "n"], ["Combo 25", "pac_combo_2025_qnt", "n"],
      ["UOM 24", "pac_uom_2024_qnt", "n"], ["UOM 25", "pac_uom_2025_qnt", "n"], ["UOM Repescagem", "pac_uom_repescagem_qnt", "n"],
      ["UOM 2ª Repescagem", "pac_uom_repescagem2_qnt", "n"], ["UOM Rio Doce", "pac_uom_riodoce_qnt", "n"],
      ["titulo", "SEIDIGI"], ["Kit Telessaúde 25", "pac_kit_tele_2025_qnt", "n"],
      ["total", "Total SAPS + SEIDIGI", "pac_total_saps_valor", "r"],
    ],
    detalhe: [
      ["titulo", "SAPS"],
      ["UBS 24 — Qtd.", "pac_ubs_2024_qnt", "n"], ["UBS 24 — Valor", "pac_ubs_2024_valor", "r"],
      ["UBS 25 — Qtd.", "pac_ubs_2025_qnt", "n"], ["UBS 25 — Valor", "pac_ubs_2025_valor", "r"],
      ["Combo 25 — Qtd.", "pac_combo_2025_qnt", "n"], ["Combo 25 — Valor", "pac_combo_2025_valor", "r"],
      ["UOM 24 — Qtd.", "pac_uom_2024_qnt", "n"], ["UOM 24 — Valor", "pac_uom_2024_valor", "r"],
      ["UOM 25 — Qtd.", "pac_uom_2025_qnt", "n"], ["UOM 25 — Valor", "pac_uom_2025_valor", "r"],
      ["UOM Repescagem — Qtd.", "pac_uom_repescagem_qnt", "n"], ["UOM Repescagem — Valor", "pac_uom_repescagem_valor", "r"],
      ["UOM 2ª Repescagem — Qtd.", "pac_uom_repescagem2_qnt", "n"], ["UOM 2ª Repescagem — Valor", "pac_uom_repescagem2_valor", "r"],
      ["UOM Rio Doce — Qtd.", "pac_uom_riodoce_qnt", "n"], ["UOM Rio Doce — Valor", "pac_uom_riodoce_valor", "r"],
      ["subtotal", "Total SAPS", [
        "pac_ubs_2024_qnt", "pac_ubs_2025_qnt", "pac_combo_2025_qnt",
        "pac_uom_2024_qnt", "pac_uom_2025_qnt", "pac_uom_repescagem_qnt", "pac_uom_repescagem2_qnt", "pac_uom_riodoce_qnt",
      ], [
        "pac_ubs_2024_valor", "pac_ubs_2025_valor", "pac_combo_2025_valor",
        "pac_uom_2024_valor", "pac_uom_2025_valor", "pac_uom_repescagem_valor", "pac_uom_repescagem2_valor", "pac_uom_riodoce_valor",
      ], "n", "r"],
      ["titulo", "SEIDIGI"],
      ["Kit Telessaúde 25 — Qtd.", "pac_kit_tele_2025_qnt", "n"], ["Kit Telessaúde 25 — Valor", "pac_kit_tele_2025_valor", "r"],
      ["titulo", "Total"],
      ["Total SAPS+SEIDIGI — Qtd.", "pac_total_saps_qnt", "n"], ["Total SAPS+SEIDIGI — Valor", "pac_total_saps_valor", "r"],
    ],
  },
  {
    chave: "quilombola", rotulo: "Quilombola", valorCampo: "quilombola_equipes_credenciadas",
    desc: "Incentivo financeiro de custeio, vinculado às equipes de Saúde da Família, destinado aos municípios com comunidades quilombolas, fortalecendo ações e serviços de saúde com equidade e ampliação do acesso.",
    tooltip: [
      ["Equipes credenciadas", "quilombola_equipes_credenciadas", "n"],
      ["titulo", "Unidades de apoio"], ["Credenciadas", "quilombola_apoio_credenciado", "n"], ["Pagas", "quilombola_apoio_pago", "n"], ["Valor pago", "quilombola_apoio_valor", "r"],
      ["titulo", "Embarcações"], ["Credenciadas", "quilombola_embarcacao_credenciado", "n"], ["Pagas", "quilombola_embarcacao_pago", "n"], ["Valor pago", "quilombola_embarcacao_valor", "r"],
      ["titulo", "Transporte terrestre"], ["Credenciados", "quilombola_transporte_credenciado", "n"], ["Pagos", "quilombola_transporte_pago", "n"], ["Valor pago", "quilombola_transporte_valor", "r"],
      ["titulo", "Profissionais de nível superior"], ["Credenciados", "quilombola_prof_superior_credenciado", "n"], ["Pagos", "quilombola_prof_superior_pago", "n"], ["Valor pago", "quilombola_prof_superior_valor", "r"],
      ["titulo", "Técnicos de enfermagem"], ["Credenciados", "quilombola_tec_enfermagem_credenciado", "n"], ["Pagos", "quilombola_tec_enfermagem_pago", "n"], ["Valor pago", "quilombola_tec_enfermagem_valor", "r"],
      ["total", "Valor total pago", "quilombola_valor_pago", "r"],
    ],
    colunasTabela: ["Componente", "Credenciados", "Não custeados", "Pagos", "Valor pago (R$)"],
    detalhe: [
      ["Equipes credenciadas", "quilombola_equipes_credenciadas", "n"],
      ["linha", "Apoio", ["quilombola_apoio_credenciado", "n"], ["quilombola_apoio_nao_custeado", "n"], ["quilombola_apoio_pago", "n"], ["quilombola_apoio_valor", "r"]],
      ["linha", "Embarcação", ["quilombola_embarcacao_credenciado", "n"], ["quilombola_embarcacao_nao_custeado", "n"], ["quilombola_embarcacao_pago", "n"], ["quilombola_embarcacao_valor", "r"]],
      ["linha", "Transporte", ["quilombola_transporte_credenciado", "n"], ["quilombola_transporte_nao_custeado", "n"], ["quilombola_transporte_pago", "n"], ["quilombola_transporte_valor", "r"]],
      ["linha", "Prof. superior", ["quilombola_prof_superior_credenciado", "n"], ["quilombola_prof_superior_nao_custeado", "n"], ["quilombola_prof_superior_pago", "n"], ["quilombola_prof_superior_valor", "r"]],
      ["linha", "Téc. enfermagem", ["quilombola_tec_enfermagem_credenciado", "n"], ["quilombola_tec_enfermagem_nao_custeado", "n"], ["quilombola_tec_enfermagem_pago", "n"], ["quilombola_tec_enfermagem_valor", "r"]],
      ["linha", "Total",
        [["quilombola_apoio_credenciado", "quilombola_embarcacao_credenciado", "quilombola_transporte_credenciado", "quilombola_prof_superior_credenciado", "quilombola_tec_enfermagem_credenciado"], "n"],
        [["quilombola_apoio_nao_custeado", "quilombola_embarcacao_nao_custeado", "quilombola_transporte_nao_custeado", "quilombola_prof_superior_nao_custeado", "quilombola_tec_enfermagem_nao_custeado"], "n"],
        ["quilombola_componentes_pagos", "n"],
        ["quilombola_valor_pago", "r"],
      ],
    ],
  },
  {
    chave: "iaf", rotulo: "IAF", valorCampo: "iaf_pagos",
    desc: "O Incentivo para Ações de Atividade Física (IAF) apoia práticas corporais e atividades físicas na APS — caminhadas, alongamento, dança, exercícios funcionais — e a capacitação de profissionais para conduzi-las.",
    tooltip: [
      ["Estabelecimentos cofinanciados", "iaf_pagos", "n"], ["total", "Valor do cofinanciamento", "iaf_valor", "r"],
    ],
    detalhe: [
      ["Credenciados", "iaf_credenciados", "n"], ["Pagos", "iaf_pagos", "n"], ["Valor", "iaf_valor", "r"],
    ],
  },
  {
    chave: "resid", rotulo: "RESID", valorCampo: "resid_total_pagos",
    desc: "O incentivo financeiro federal para residentes em saúde destina-se aos municípios que já contam com profissionais residentes vinculados às equipes da APS, apoiando a integração entre formação em serviço e cuidado no território.",
    tooltip: [
      ["titulo", "Residentes cofinanciados"], ["Medicina", "resid_medico_pago", "n"], ["Enfermagem", "resid_enfermeiro_pago", "n"], ["Odontologia", "resid_dentista_pago", "n"],
      ["titulo", "Total de residentes"], ["Total", "resid_total_pagos", "n"],
      ["titulo", "Cofinanciamento"], ["Medicina", "resid_valor_medico", "r"], ["Enfermagem", "resid_valor_enfermeiro", "r"], ["Odontologia", "resid_valor_dentista", "r"],
      ["total", "Valor total", "resid_valor", "r"],
    ],
    detalhe: [
      ["Médico — Homologado", "resid_medico_homologado", "n"], ["Médico — Pago", "resid_medico_pago", "n"], ["Médico — Valor", "resid_valor_medico", "r"],
      ["Enfermeiro — Homologado", "resid_enfermeiro_homologado", "n"], ["Enfermeiro — Pago", "resid_enfermeiro_pago", "n"], ["Enfermeiro — Valor", "resid_valor_enfermeiro", "r"],
      ["Cirurgião-Dentista — Homologado", "resid_dentista_homologado", "n"], ["Cirurgião-Dentista — Pago", "resid_dentista_pago", "n"], ["Cirurgião-Dentista — Valor", "resid_valor_dentista", "r"],
      ["Total Residentes Pagos", "resid_total_pagos", "n"], ["Valor Total", "resid_valor", "r"],
    ],
  },
  {
    chave: "ubsf", rotulo: "UBSF", valorCampo: "ubsf_pago",
    desc: "As UBSF atendem populações em áreas de acesso fluvial na Amazônia Legal e no Pantanal Sul-Mato-Grossense, com equipes de médicos, enfermeiros, técnicos de enfermagem e dentistas, podendo incluir outros profissionais.",
    tooltip: [
      ["Total de UBSF pagas", "ubsf_pago", "n"],
      ["titulo", "Componentes extras"], ["Aux. enfermagem", "ubsf_aux_enfermagem_extra", "n"], ["Aux. saúde bucal", "ubsf_aux_sb_extra", "n"],
      ["Prof. nível superior", "ubsf_prof_superior_extra", "n"], ["Unidade de apoio", "ubsf_unidade_apoio_extra", "n"], ["Embarcação", "ubsf_embarcacao_extra", "n"],
      ["titulo", "Cofinanciamento"], ["Custeio UBSF", "ubsf_custeio", "r"], ["Componente Extra", "ubsf_custeio_extra", "r"],
      ["titulo", "Não custeada*"], ["UBSF", "ubsf_suspenso", "n"],
      ["total", "Valor total", "ubsf_total", "r"],
    ],
    detalhe: [
      ["Credenciado", "ubsf_credenciado", "n"], ["Com portaria de homologação", "ubsf_homologacao", "n"], ["Pago", "ubsf_pago", "n"], ["Não Custeada", "ubsf_suspenso", "n"],
      ["Aux. Enfermagem Extra", "ubsf_aux_enfermagem_extra", "n"], ["Aux. SB Extra", "ubsf_aux_sb_extra", "n"], ["Prof. Nível Superior Extra", "ubsf_prof_superior_extra", "n"],
      ["Unidade de Apoio Extra", "ubsf_unidade_apoio_extra", "n"], ["Embarcação Extra", "ubsf_embarcacao_extra", "n"],
      ["Custeio", "ubsf_custeio", "r"], ["Custeio Componente Extra", "ubsf_custeio_extra", "r"], ["Valor Total", "ubsf_total", "r"],
    ],
  },
  {
    chave: "uom", rotulo: "UOM", valorCampo: "uom_paga",
    desc: "As Unidades Odontológicas Móveis (UOM) fornecem atendimento odontológico a populações rurais, quilombolas, assentadas e em áreas isoladas ou de difícil acesso, com cadeira odontológica, esterilização e diagnóstico.",
    tooltip: [
      ["Homologado", "uom_homologacao", "n"], ["Pago", "uom_paga", "n"], ["Custeio", "uom_custeio", "r"], ["Implantação", "uom_implantacao", "r"],
      ["total", "Valor total", "uom_total_pgto", "r"],
    ],
    detalhe: [
      ["Credenciada", "uom_credenciada", "n"], ["Com portaria de homologação", "uom_homologacao", "n"], ["Paga", "uom_paga", "n"],
      ["Custeio", "uom_custeio", "r"], ["Implantação", "uom_implantacao", "r"], ["Valor Total", "uom_total_pgto", "r"],
    ],
  },
  {
    chave: "lrpd", rotulo: "LRPD", valorCampo: "lrpd_qnt_pago",
    desc: "Os Laboratórios Regionais de Prótese Dentária (LRPD) oferecem acesso a próteses dentárias pelo SUS — reabilitação protética, fonética, mastigatória e estética — articulados com equipes de APS e CEO.",
    tooltip: [
      ["Quantidade cofinanciada", "lrpd_qnt_pago", "n"], ["Municipal", "lrpd_municipal", "r"], ["Estadual", "lrpd_estadual", "r"],
      ["total", "Valor total", "lrpd_valor", "r"],
    ],
    detalhe: [
      ["Quantidade Paga", "lrpd_qnt_pago", "n"], ["Cofinanciamento Municipal", "lrpd_municipal", "r"], ["Cofinanciamento Estadual", "lrpd_estadual", "r"], ["Valor Total", "lrpd_valor", "r"],
    ],
  },
  {
    chave: "ceo", rotulo: "CEO", valorCampo: "ceo_qnt_total",
    desc: "Os Centros de Especialidades Odontológicas (CEO) ofertam cuidado ambulatorial e especializado em saúde bucal, qualificando a Rede de Atenção à Saúde Bucal e preservando o vínculo com a Atenção Primária.",
    tooltip: [
      ["titulo", "CEO cofinanciados"], ["Total", "ceo_qnt_total", "n"],
      ["titulo", "Estadual"], ["Qtd.", "ceo_estadual_qnt", "n"], ["Tipo 1", "ceo_tipo1_estadual", "n"], ["Tipo 2", "ceo_tipo2_estadual", "n"], ["Tipo 3", "ceo_tipo3_estadual", "n"], ["RCPD", "ceo_rcpd_estadual", "n"],
      ["titulo", "Municipal"], ["Qtd.", "ceo_municipal_qnt", "n"], ["Tipo 1", "ceo_tipo1_municipal", "n"], ["Tipo 2", "ceo_tipo2_municipal", "n"], ["Tipo 3", "ceo_tipo3_municipal", "n"], ["RCPD", "ceo_rcpd_municipal", "n"],
      ["titulo", "Distrital"], ["Qtd.", "ceo_distrital_qnt", "n"], ["Tipo 1", "ceo_tipo1_distrital", "n"], ["Tipo 2", "ceo_tipo2_distrital", "n"], ["Tipo 3", "ceo_tipo3_distrital", "n"], ["RCPD", "ceo_rcpd_distrital", "n"],
      ["total", "Valor total", "ceo_soma_pagamento", "r"],
    ],
    detalhe: [
      ["Municipal — Qtd.", "ceo_municipal_qnt", "n"], ["Municipal — Valor", "ceo_municipal_valor", "r"],
      ["Municipal — Tipo 1", "ceo_tipo1_municipal", "n"], ["Municipal — Tipo 2", "ceo_tipo2_municipal", "n"], ["Municipal — Tipo 3", "ceo_tipo3_municipal", "n"], ["Municipal — RCPD", "ceo_rcpd_municipal", "n"],
      ["Estadual — Qtd.", "ceo_estadual_qnt", "n"], ["Estadual — Valor", "ceo_estadual_valor", "r"],
      ["Estadual — Tipo 1", "ceo_tipo1_estadual", "n"], ["Estadual — Tipo 2", "ceo_tipo2_estadual", "n"], ["Estadual — Tipo 3", "ceo_tipo3_estadual", "n"], ["Estadual — RCPD", "ceo_rcpd_estadual", "n"],
      ["Distrital — Qtd.", "ceo_distrital_qnt", "n"], ["Distrital — Valor", "ceo_distrital_valor", "r"],
      ["Distrital — Tipo 1", "ceo_tipo1_distrital", "n"], ["Distrital — Tipo 2", "ceo_tipo2_distrital", "n"], ["Distrital — Tipo 3", "ceo_tipo3_distrital", "n"], ["Distrital — RCPD", "ceo_rcpd_distrital", "n"],
      ["Total — Qtd.", "ceo_qnt_total", "n"], ["Valor Total", "ceo_soma_pagamento", "r"],
    ],
  },
  {
    chave: "sesb", rotulo: "SESB", valorCampo: "sesb_total_pago",
    desc: "O Serviço de Especialidades em Saúde Bucal (Sesb) atende municípios com até 20 mil habitantes, cobertura de saúde bucal acima de 75% e sem CEO habilitado — cirurgiões-dentistas e auxiliares com 30h semanais.",
    tooltip: [
      ["Total cofinanciado", "sesb_total_pago", "n"], ["Custeio", "sesb_custeio", "r"], ["Desempenho", "sesb_desempenho", "r"],
      ["total", "Valor total", "sesb_total", "r"],
    ],
    detalhe: [
      ["Total Cofinanciado", "sesb_total_pago", "n"], ["Custeio", "sesb_custeio", "r"], ["Desempenho", "sesb_desempenho", "r"], ["Valor Total", "sesb_total", "r"],
    ],
  },
  {
    chave: "obras", rotulo: "OBRAS", valorCampo: "obras_total",
    desc: "Panorama de obras da APS (SISMOB) — construções, ampliações e reformas de unidades de saúde, incluindo Requalifica UBS, Emendas, Programas e Novo PAC Saúde, para identificar locais que precisam de apoio técnico.",
    tooltip: [
      ["titulo", "Tipo de obra"], ["Construção", "obras_construcao", "n"], ["Ampliação", "obras_ampliacao", "n"], ["Reforma", "obras_reforma", "n"],
      ["titulo", "Em execução ou funcionamento"], ["Obra concluída", "obras_concluida", "n"], ["Em execução e conclusão", "obras_execucao_conclusao", "n"], ["Em funcionamento", "obras_funcionamento", "n"],
      ["titulo", "Em andamento — precisam de atenção"], ["Em ação preparatória", "obras_acao_preparatoria", "n"], ["Em início de execução", "obras_inicio_execucao", "n"],
      ["Ação preparatória paralisada", "obras_acao_prep_paralisada", "n"], ["Em readequação", "obras_readequacao", "n"], ["Readequada", "obras_readequada", "n"],
      ["total", "Total de obras", "obras_total", "n"],
    ],
    detalhe: [
      ["Total de Obras", "obras_total", "n"], ["Construção", "obras_construcao", "n"], ["Ampliação", "obras_ampliacao", "n"], ["Reforma", "obras_reforma", "n"],
      ["Obra Concluída", "obras_concluida", "n"], ["Em Execução e Conclusão", "obras_execucao_conclusao", "n"], ["Em Funcionamento", "obras_funcionamento", "n"],
      ["Em Ação Preparatória", "obras_acao_preparatoria", "n"], ["Em Início de Execução", "obras_inicio_execucao", "n"],
      ["Ação Preparatória Paralisada", "obras_acao_prep_paralisada", "n"], ["Em Readequação", "obras_readequacao", "n"], ["Readequada", "obras_readequada", "n"],
      ["Obra Paralisada", "obras_paralisada", "n"],
    ],
  },
  {
    chave: "pnaisa", rotulo: "PNAISARI", valorCampo: "pnaisari_pago",
    desc: "O PNAISARI garante o direito à saúde de adolescentes em cumprimento de medidas socioeducativas, articulando a APS com a rede socioassistencial, educativa e de justiça, com foco em saúde mental e sexual/reprodutiva.",
    tooltip: [
      ["Estabelecimentos cofinanciados", "pnaisari_pago", "n"], ["total", "Valor do cofinanciamento", "pnaisari_valor", "r"],
    ],
    detalhe: [
      ["Estabelecimentos Pagos", "pnaisari_pago", "n"], ["Valor", "pnaisari_valor", "r"],
    ],
  },
  {
    chave: "pnan", rotulo: "PNAN", valorCampo: "pnan_qnt",
    desc: "Incentivo financeiro destinado ao custeio de ações e serviços de alimentação e nutrição na APS — vigilância alimentar e nutricional, promoção da alimentação saudável e prevenção/assistência às múltiplas formas de má nutrição.",
    tooltip: [
      ["Municípios contemplados", "pnan_qnt", "n"], ["Repasse 2024", "pnan_2024", "r"], ["total", "Repasse 2025", "pnan_2025", "r"],
    ],
    detalhe: [
      ["Municípios Contemplados", "pnan_qnt", "n"], ["Repasse 2024", "pnan_2024", "r"], ["Repasse 2025", "pnan_2025", "r"], ["Repasse 2026", "pnan_2026", "r"],
    ],
  },
  {
    chave: "pas", rotulo: "PAS", valorCampo: "pas_pagos",
    desc: "O Programa Academia da Saúde (PAS) é um espaço público estruturado, com equipamentos e profissionais capacitados, que oferece atividade física, práticas integrativas e complementares e educação em saúde.",
    tooltip: [
      ["Estabelecimentos credenciados", "pas_credenciados", "n"], ["Estabelecimentos pagos", "pas_pagos", "n"], ["Em trâmite de descredenciamento", "pas_descredenciamento", "n"],
      ["total", "Valor do cofinanciamento", "pas_valor", "r"],
    ],
    detalhe: [
      ["Credenciados", "pas_credenciados", "n"], ["Pagos", "pas_pagos", "n"], ["Em trâmite de descredenciamento", "pas_descredenciamento", "n"], ["Valor", "pas_valor", "r"],
    ],
  },
  {
    chave: "pse", rotulo: "PSE", especial: "pse_total",
    desc: "O Programa Saúde na Escola (PSE) articula as políticas de Saúde e Educação no território, valorizando o espaço escolar como lugar de promoção da saúde e cidadania.",
    tooltip: [
      ["Repasse adesão", "pse_valor_prt_7568", "r"], ["total", "Repasse cumprimento de metas", "pse_valor_prt_1122", "r"],
    ],
    detalhe: [
      ["Repasse adesão (Portaria 7.568/2025)", "pse_valor_prt_7568", "r"], ["Repasse cumprimento de metas (Portaria 1.122/2026)", "pse_valor_prt_1122", "r"],
    ],
  },
  {
    chave: "alyne", rotulo: "ALYNE", valorCampo: "alyne_contemplado",
    desc: "A Rede Alyne qualifica a atenção à saúde materna e infantil de gestantes, puérperas e recém-nascidos, reforçando o compromisso com a redução da mortalidade materna por meio de pré-natal, aleitamento, leitos canguru e urgência/emergência.",
    tooltip: [
      ["Municípios contemplados", "alyne_contemplado", "n"],
      ["Portaria 5.530/2024", "alyne_prt_5530", "r"], ["Portaria 7.321/2025", "alyne_prt_7321", "r"], ["total", "Portaria 7.625/2025", "alyne_prt_7625", "r"],
    ],
    detalhe: [
      ["Municípios Contemplados", "alyne_contemplado", "n"], ["Portaria 5.530/2024", "alyne_prt_5530", "r"], ["Portaria 7.321/2025", "alyne_prt_7321", "r"], ["Portaria 7.625/2025", "alyne_prt_7625", "r"],
    ],
  },
  {
    chave: "blh", rotulo: "BLH", valorCampo: "blh_contemplados",
    desc: "Os Bancos de Leite Humano (BLH) coletam, processam e distribuem leite humano para bebês prematuros ou de baixo peso, além de apoio e orientação sobre aleitamento materno — o Brasil tem a maior rede do mundo.",
    tooltip: [
      ["Municípios contemplados", "blh_contemplados", "n"],
      ["Portaria 5.659/2024 — estabelecimentos", "blh_prt_5659_qnt", "n"], ["Portaria 7.648/2025 — estabelecimentos", "blh_prt_7648_qnt", "n"],
      ["total", "Portaria 11.175/2026 — estabelecimentos", "blh_prt_11175_qnt", "n"],
    ],
    detalhe: [
      ["Municípios Contemplados", "blh_contemplados", "n"],
      ["Portaria 5.659/2024 — Estabelecimentos", "blh_prt_5659_qnt", "n"], ["Portaria 5.659/2024 — Repasse", "blh_prt_5659_valor", "r"],
      ["Portaria 7.648/2025 — Estabelecimentos", "blh_prt_7648_qnt", "n"], ["Portaria 7.648/2025 — Repasse", "blh_prt_7648_valor", "r"],
      ["Portaria 11.175/2026 — Estabelecimentos", "blh_prt_11175_qnt", "n"], ["Portaria 11.175/2026 — Repasse", "blh_prt_11175_valor", "r"],
    ],
  },
  {
    chave: "esus", rotulo: "e-SUS", valorCampo: "esus_pec",
    desc: "O e-SUS APS reestrutura as informações da Atenção Primária em nível nacional, apoiando municípios e serviços na gestão da informação e na qualificação do cuidado — Prontuário Eletrônico do Cidadão (PEC), CDS ou prontuário próprio.",
    tooltip: [
      ["Uso do PEC e-SUS APS", "esus_pec", "n"], ["Envio via CDS", "esus_cds", "n"],
      ["Uso de prontuário próprio", "esus_proprio", "n"], ["total", "Sem informação", "esus_sem_info", "n"],
    ],
    detalhe: [
      ["PEC e-SUS APS", "esus_pec", "n"], ["Envio via CDS", "esus_cds", "n"], ["Prontuário próprio", "esus_proprio", "n"], ["Sem informação", "esus_sem_info", "n"],
    ],
  },
  {
    chave: "micro", rotulo: "MICRO", valorCampo: "micro_pago",
    desc: "O incentivo para o microscopista na APS estimula ações de controle da malária junto aos ACS e/ou eSF, nos municípios que concentram 80% dos casos de malária na Amazônia Legal, segundo o Sistema de Informações Epidemiológicas de Malária.",
    tooltip: [
      ["Total cofinanciado", "micro_pago", "n"], ["total", "Valor do cofinanciamento", "micro_valor", "r"],
    ],
    detalhe: [
      ["Credenciado", "micro_credenciado", "n"], ["Pago", "micro_pago", "n"], ["Valor", "micro_valor", "r"],
    ],
  },
  {
    chave: "fust", rotulo: "FUST", valorCampo: "fust_adesao",
    desc: "O UBS Conectadas (Fust) apoia a expansão da conectividade nas Unidades Básicas de Saúde por meio de benefício fiscal para atendimento por fibra óptica.",
    tooltip: [
      ["Municípios com adesão", "fust_adesao", "n"], ["UBS com empresa interessada", "fust_empresa_vencedora", "n"], ["UBS ainda sem empresa interessada", "fust_sem_vencedora", "n"],
      ["total", "Valor de referência do benefício", "fust_valor", "r"],
    ],
    detalhe: [
      ["Municípios com Adesão", "fust_adesao", "n"], ["UBS com Empresa Interessada (fibra óptica)", "fust_empresa_vencedora", "n"],
      ["UBS ainda sem Empresa Interessada", "fust_sem_vencedora", "n"], ["Valor de Referência do Benefício", "fust_valor", "r"],
    ],
  },
  {
    chave: "fiis", rotulo: "FIIS", valorCampo: "fiis_n_proposta",
    desc: "O Fundo de Investimento em Infraestrutura Social (FIIS) amplia, moderniza e qualifica a infraestrutura do SUS — obras, ampliações, reformas e equipamentos — com apoio técnico-financeiro de instituições como o BNDES.",
    tooltip: [
      ["Propostas habilitadas", "fiis_n_proposta", "n"], ["total", "Valor das propostas", "fiis_valor", "r"],
    ],
    detalhe: [
      ["Número de Propostas Habilitadas", "fiis_n_proposta", "n"], ["Valor das Propostas", "fiis_valor", "r"],
    ],
  },
  {
    chave: "retomada", rotulo: "RET", valorCampo: "retomada_total",
    desc: "O Pacto Nacional pela Retomada de Obras e Serviços de Engenharia prevê repactuação (retomar obras paralisadas) e reativação (regularizar obras em funcionamento sem registro no SISMOB).",
    tooltip: [
      ["Não manifestou interesse", "retomada_nao_manifestou", "n"], ["Não tem interesse", "retomada_sem_interesse", "n"], ["Manifestou interesse", "retomada_sim_interesse", "n"],
      ["total", "Total obras aptas", "retomada_total", "n"],
    ],
    detalhe: [
      ["Não Manifestou Interesse", "retomada_nao_manifestou", "n"], ["Não Tem Interesse", "retomada_sem_interesse", "n"], ["Manifestou Interesse", "retomada_sim_interesse", "n"], ["Total de Obras Aptas", "retomada_total", "n"],
    ],
  },
];

function normalizar(s) {
  return (s || "").toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function fmtN(v) { return Math.round(v).toLocaleString("pt-BR"); }
function fmtR(v) { return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); }

function campoIdx(nome) { return ESTADO.idx[nome]; }
function valor(linha, nome) { return linha[campoIdx(nome)] || 0; }

async function iniciar() {
  const resp = await fetch(urlDados);
  const json = await resp.json();
  ESTADO.dados = json.municipios;
  ESTADO.campos = json.campos;
  json.campos.forEach((nome, i) => { ESTADO.idx[nome] = i; });

  raiz.getElementById("txt-parcela").textContent = json.metadata.parcela || "—";

  popularFiltrosDinamicos();
  recalcular();

  raiz.getElementById("btn-mais-filtros").addEventListener("click", () => {
    const painel = raiz.getElementById("painel-mais-filtros");
    painel.hidden = !painel.hidden;
  });
  raiz.getElementById("btn-limpar-filtros").addEventListener("click", limparFiltros);
  raiz.getElementById("f-uf").addEventListener("change", recalcular);
  [
    "f-regiao", "f-macro", "f-regiao-saude", "f-porte",
    "f-capital", "f-amazonia", "f-quilombola", "f-fronteira", "f-zb",
  ].forEach((id) => raiz.getElementById(id).addEventListener("change", recalcular));

  const campoMunicipio = raiz.getElementById("f-municipio");
  campoMunicipio.addEventListener("input", () => { montarSugestoesMunicipio(); recalcular(); });
  campoMunicipio.addEventListener("focus", () => { if (campoMunicipio.value) montarSugestoesMunicipio(); });
  // O item da lista não é focável, então ao clicar nele o navegador tira o
  // foco do campo de texto (blur) e, sem foco válido pra onde ir, devolve
  // pro campo logo em seguida — disparando o listener de "focus" acima de
  // novo, que reabre a lista e desfaz o esconderSugestoesMunicipio() abaixo.
  // preventDefault no mousedown bloqueia essa troca de foco e corta o ciclo.
  raiz.getElementById("lista-municipios").addEventListener("mousedown", (e) => e.preventDefault());
  raiz.getElementById("lista-municipios").addEventListener("click", (e) => {
    const item = e.target.closest(".autocomplete-item");
    if (!item) return;
    // Trava a UF junto com o nome — existem vários municípios com o mesmo
    // nome em UFs diferentes no Brasil; sem isso o filtro podia bater em
    // mais de uma cidade ao mesmo tempo e o card de Perfil/botão de Nota
    // Técnica nunca aparecia (dependem de exatamente 1 resultado).
    campoMunicipio.value = item.dataset.municipio;
    raiz.getElementById("f-uf").value = item.dataset.uf;
    esconderSugestoesMunicipio();
    recalcular();
  });
  document.addEventListener("click", (e) => {
    if (!e.composedPath().some((n) => n.classList && n.classList.contains("autocomplete"))) esconderSugestoesMunicipio();
  });

  // Dica rápida dos cards do mosaico: no desktop abre no hover (CSS) e
  // reposiciona pra não vazar da tela nos cards perto da borda. Clicar no
  // card (mouse ou toque) abre o detalhamento completo em modal — assim
  // não precisa de uma grade de detalhe fixa ocupando espaço na página.
  raiz.getElementById("mosaico").addEventListener("mouseover", (e) => {
    const card = e.target.closest(".stat");
    if (card) ajustarPosicaoTooltip(card);
  });
  raiz.getElementById("mosaico").addEventListener("click", (e) => {
    const cardEl = e.target.closest(".stat");
    if (!cardEl) return;
    const card = CARDS.find((c) => c.chave === cardEl.dataset.chave);
    if (card) abrirModalCard(card, ESTADO.linhasAtuais || []);
  });
  // Teclado: Enter/Espaço no card abre o mesmo modal; foco reposiciona tooltip
  raiz.getElementById("mosaico").addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const cardEl = e.target.closest(".stat");
    if (!cardEl) return;
    e.preventDefault();
    const card = CARDS.find((c) => c.chave === cardEl.dataset.chave);
    if (card) abrirModalCard(card, ESTADO.linhasAtuais || []);
  });
  raiz.getElementById("mosaico").addEventListener("focusin", (e) => {
    const card = e.target.closest(".stat");
    if (card) ajustarPosicaoTooltip(card);
  });
  raiz.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay" || e.target.closest(".fechar")) fecharModal();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharModal(); });
}

function ajustarPosicaoTooltip(card) {
  const tip = card.querySelector(".stat-tooltip");
  if (!tip) return;
  card.style.setProperty("--desloc-tooltip", "0px");
  const margem = 12;
  const rect = tip.getBoundingClientRect();
  let deslocamento = 0;
  if (rect.left < margem) deslocamento = margem - rect.left;
  else if (rect.right > window.innerWidth - margem) deslocamento = (window.innerWidth - margem) - rect.right;
  if (deslocamento !== 0) card.style.setProperty("--desloc-tooltip", `${deslocamento}px`);
}

function valoresUnicos(campo) {
  const i = campoIdx(campo);
  const vistos = new Set();
  ESTADO.dados.forEach((l) => { if (l[i]) vistos.add(l[i]); });
  return Array.from(vistos).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function popularSelect(id, campo) {
  const select = raiz.getElementById(id);
  valoresUnicos(campo).forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v; opt.textContent = v;
    select.appendChild(opt);
  });
}

function popularFiltrosDinamicos() {
  popularSelect("f-uf", "uf");
  popularSelect("f-regiao", "regiao");
  popularSelect("f-macro", "macro");
  popularSelect("f-regiao-saude", "regiao_saude");
  popularSelect("f-porte", "porte");
  popularSelect("f-capital", "capital");
  popularSelect("f-amazonia", "amazonia_legal");
  popularSelect("f-quilombola", "quilombola");
  popularSelect("f-fronteira", "fronteira");
  popularSelect("f-zb", "zb");
}

function esconderSugestoesMunicipio() {
  raiz.getElementById("lista-municipios").hidden = true;
}

function montarSugestoesMunicipio() {
  const uf = raiz.getElementById("f-uf").value;
  const texto = raiz.getElementById("f-municipio").value.trim();
  const textoNorm = normalizar(texto);
  const iUf = campoIdx("uf"), iMun = campoIdx("municipio");
  const lista = raiz.getElementById("lista-municipios");

  if (!texto) { esconderSugestoesMunicipio(); return; }

  const resultados = ESTADO.dados
    .filter((l) => (!uf || l[iUf] === uf) && normalizar(l[iMun]).includes(textoNorm))
    .slice(0, 8);

  if (!resultados.length) {
    lista.innerHTML = `<div class="autocomplete-vazio">Nenhum município encontrado</div>`;
  } else {
    lista.innerHTML = resultados.map((l) => {
      const nome = l[iMun], ufMun = l[iUf];
      const idx = normalizar(nome).indexOf(textoNorm);
      const destaque = idx < 0 ? nome
        : `${nome.slice(0, idx)}<b>${nome.slice(idx, idx + texto.length)}</b>${nome.slice(idx + texto.length)}`;
      return `<div class="autocomplete-item" data-municipio="${nome.replace(/"/g, "&quot;")}" data-uf="${ufMun}">${destaque} <span style="color:var(--muted)">· ${ufMun}</span></div>`;
    }).join("");
  }
  lista.hidden = false;
}

function limparFiltros() {
  ["f-uf", "f-regiao", "f-macro", "f-regiao-saude", "f-porte", "f-capital",
    "f-amazonia", "f-quilombola", "f-fronteira", "f-zb"].forEach((id) => { raiz.getElementById(id).value = ""; });
  raiz.getElementById("f-municipio").value = "";
  esconderSugestoesMunicipio();
  recalcular();
}

function linhasFiltradas() {
  const filtros = {
    uf: raiz.getElementById("f-uf").value,
    regiao: raiz.getElementById("f-regiao").value,
    macro: raiz.getElementById("f-macro").value,
    regiao_saude: raiz.getElementById("f-regiao-saude").value,
    porte: raiz.getElementById("f-porte").value,
    capital: raiz.getElementById("f-capital").value,
    amazonia_legal: raiz.getElementById("f-amazonia").value,
    quilombola: raiz.getElementById("f-quilombola").value,
    fronteira: raiz.getElementById("f-fronteira").value,
    zb: raiz.getElementById("f-zb").value,
  };
  const municipioTexto = normalizar(raiz.getElementById("f-municipio").value.trim());

  return ESTADO.dados.filter((l) => {
    for (const campo in filtros) {
      if (filtros[campo] && l[campoIdx(campo)] !== filtros[campo]) return false;
    }
    if (municipioTexto && !normalizar(l[campoIdx("municipio")]).includes(municipioTexto)) return false;
    return true;
  });
}

function somar(linhas, campo) {
  const i = campoIdx(campo);
  let total = 0;
  for (const l of linhas) total += l[i] || 0;
  return total;
}

function valorEspecial(chaveEspecial, linhas) {
  if (chaveEspecial === "esb_total") {
    return somar(linhas, "esb_pagas_mod1") + somar(linhas, "esb_pagas_mod2")
      + somar(linhas, "esb_pagas_chdif_20") + somar(linhas, "esb_pagas_chdif_30");
  }
  if (chaveEspecial === "pse_total") return linhas.length;
  return 0;
}

function valorCard(card, linhas) {
  return card.especial ? valorEspecial(card.especial, linhas) : somar(linhas, card.valorCampo);
}

function fmt(tipo, v) { return tipo === "r" ? fmtR(v) : fmtN(v); }

// Tooltip do hover fica só com a descrição + o total principal — o
// detalhamento completo (card.detalhe) só aparece no modal, ao clicar.
function totalPrincipalCard(card, linhas) {
  const itemTotal = card.tooltip.find((item) => item[0] === "total");
  if (itemTotal) {
    const [, label, campo, tipo] = itemTotal;
    return { label, valorTexto: fmt(tipo, somar(linhas, campo)) };
  }
  return { label: card.rotulo, valorTexto: fmtN(valorCard(card, linhas)) };
}

function montarTooltip(card, linhas) {
  const { label, valorTexto } = totalPrincipalCard(card, linhas);
  return `<div class="desc">${card.desc}</div>
    <div class="total"><span>${label}</span><b>${valorTexto}</b></div>
    <div class="dica-clique">Clique no card para ver todos os detalhes</div>`;
}

// Mosaico em 4 linhas (10/10/10/1), sem caixas/grupos por tema — todos os
// cards do mesmo tamanho; a divisão em linhas é só ordem de exibição.
const LINHAS_MOSAICO = [
  ["esf", "acs", "esb", "emulti", "padi", "esfr", "ecr", "eapp", "pmm", "pac"],
  ["eap", "quilombola", "iaf", "resid", "ubsf", "uom", "lrpd", "ceo", "sesb", "obras"],
  ["pnaisa", "pnan", "pas", "pse", "alyne", "blh", "esus", "micro", "fust", "fiis"],
  ["retomada"],
];

function montarCardMosaico(card, linhas) {
  const total = valorCard(card, linhas);
  const div = document.createElement("div");
  div.className = "stat " + (total > 0 ? "tem-dado" : "zerado");
  div.dataset.chave = card.chave;
  // Card clicável também pelo teclado (Enter/Espaço abre o modal de detalhes)
  div.setAttribute("role", "button");
  div.setAttribute("tabindex", "0");
  div.setAttribute("aria-haspopup", "dialog");
  div.setAttribute("aria-label", `${card.rotulo}: ${fmtN(total)}. Abrir detalhamento`);
  div.innerHTML = `<div class="stat-label">${card.rotulo}</div><div class="stat-number">${fmtN(total)}</div>
    <div class="stat-tooltip">${montarTooltip(card, linhas)}</div>`;
  return div;
}

const COLUNAS_MOSAICO = Math.max(...LINHAS_MOSAICO.map((l) => l.length));

function montarMosaico(linhas) {
  const container = raiz.getElementById("mosaico");
  container.innerHTML = "";
  LINHAS_MOSAICO.forEach((chaves) => {
    chaves.forEach((chave) => {
      const card = CARDS.find((c) => c.chave === chave);
      if (card) container.appendChild(montarCardMosaico(card, linhas));
    });
    // Preenche o resto da linha com vagas invisíveis, pra linha de baixo
    // começar numa coluna nova e as colunas ficarem alinhadas entre as 3
    // linhas (retângulo), já que todas dividem o mesmo grid de 11 colunas.
    for (let i = chaves.length; i < COLUNAS_MOSAICO; i++) {
      const filler = document.createElement("div");
      filler.className = "stat-filler";
      container.appendChild(filler);
    }
  });
}

function linhaDetalhe(label, valorTexto, impar) {
  return `<div class="linha${impar ? " impar" : ""}"><span>${label}</span><span>${valorTexto}</span></div>`;
}

function montarCardPerfil(linhas, municipioUnico) {
  const vazio = "*";
  if (!municipioUnico) {
    return `<div class="card-detalhe"><div class="titulo">Perfil do Município</div><div class="corpo">
      ${linhaDetalhe("% de cobertura da APS", vazio)}
      ${linhaDetalhe("População", vazio)}
      ${linhaDetalhe("IED", vazio)}
      ${linhaDetalhe("IVS", vazio)}
      ${linhaDetalhe("Pop. indígena em contexto rural", vazio)}
      ${linhaDetalhe("Pop. indígena em contexto urbano", vazio)}
      ${linhaDetalhe("População quilombola", vazio)}
      ${linhaDetalhe("Qtd. de UBS (Censo Nacional)", vazio)}
    </div></div>`;
  }
  const l = municipioUnico;
  const nomeMunicipio = l[campoIdx("municipio")], ufMunicipio = l[campoIdx("uf")];
  const linkNota = "?busca=" + encodeURIComponent(nomeMunicipio) + "&uf=" + encodeURIComponent(ufMunicipio);
  return `<div class="card-detalhe"><div class="titulo">Perfil do Município — ${nomeMunicipio}/${ufMunicipio}</div><div class="corpo">
    ${linhaDetalhe("% de cobertura da APS", (valor(l,"cobertura_real") * 100).toLocaleString("pt-BR",{maximumFractionDigits:1}) + "%")}
    ${linhaDetalhe("População", fmtN(valor(l,"populacao")))}
    ${linhaDetalhe("IED", l[campoIdx("ied")] || vazio)}
    ${linhaDetalhe("IVS", l[campoIdx("ivs")] || vazio)}
    ${linhaDetalhe("Pop. indígena em contexto rural", fmtN(valor(l,"indigena_rural")))}
    ${linhaDetalhe("Pop. indígena em contexto urbano", fmtN(valor(l,"indigena_urbano")))}
    ${linhaDetalhe("População quilombola", fmtN(valor(l,"pop_quilombola")))}
    ${linhaDetalhe("Qtd. de UBS (Censo Nacional)", fmtN(valor(l,"ubs_censo")))}
    <div class="linha-link"><a class="row-action" href="${linkNota}" target="_blank" rel="noopener">Ver Nota Técnica deste município ↗</a></div>
  </div></div>`;
}

// Agrupa card.detalhe em linhas de tabela: quando dois itens seguidos são
// "Nome — Qtd." + "Nome — Valor" (mesmo "Nome"), viram 1 linha com 2 colunas
// de valor; o resto vira linha simples (1 coluna de valor, 2ª coluna vazia).
function somarVarios(linhas, campos) {
  return campos.reduce((acc, campo) => acc + somar(linhas, campo), 0);
}

function agruparDetalheParaTabela(detalhe) {
  const linhas = [];
  for (let i = 0; i < detalhe.length; i++) {
    const item = detalhe[i];
    if (item[0] === "titulo") { linhas.push({ tipo: "titulo", texto: item[1] }); continue; }
    if (item[0] === "subtotal") {
      const [, nome, camposQtd, camposValor, tipoQtd, tipoValor] = item;
      linhas.push({ tipo: "subtotal", nome, camposQtd, camposValor, tipoQtd, tipoValor });
      continue;
    }
    // Linha com N colunas de valor (ex: Quilombola — Componente | Credenciados
    // | Não custeados | Pagos | Valor pago), pra cards que não cabem no
    // padrão genérico de 1 ou 2 valores por linha.
    if (item[0] === "linha") {
      const [, nome, ...celulas] = item;
      linhas.push({ tipo: "linha-n", nome, celulas });
      continue;
    }
    const [label, campo, tipo] = item;
    const matchQtd = label.match(/^(.*) — Qtd\.$/);
    const proximo = detalhe[i + 1];
    if (matchQtd && proximo && proximo[0] !== "titulo") {
      const [labelValor, campoValor, tipoValor] = proximo;
      const matchValor = labelValor.match(/^(.*) — Valor$/);
      if (matchValor && matchValor[1] === matchQtd[1]) {
        linhas.push({ tipo: "par", nome: matchQtd[1], campoQtd: campo, tipoQtd: tipo, campoValor, tipoValor });
        i += 1;
        continue;
      }
    }
    linhas.push({ tipo: "simples", nome: label, campo, tipoValor: tipo });
  }
  return linhas;
}

// Qualquer linha cujo nome contenha "total" (eSF: "Valor Total", PMM: "Total
// de Vagas Ativas", PAC: "Total SAPS" etc.) ganha o mesmo destaque em
// negrito — padroniza o visual sem precisar marcar cada card à mão.
function ehLinhaTotal(nome) {
  return /total/i.test(nome);
}

function montarTabelaDetalhe(card, linhas) {
  const colunas = card.colunasTabela || ["Categoria", "Qtd.", "Valor"];
  const itens = agruparDetalheParaTabela(card.detalhe);
  const corpo = itens.map((item) => {
    if (item.tipo === "titulo") return `<tr class="grupo"><td colspan="${colunas.length}">${item.texto}</td></tr>`;
    // Linhas com Qtd. + Valor juntos (categoria-mãe, ex: Municipal/Estadual/
    // Distrital no CEO) ficam em negrito, como as de total — destacam a
    // categoria principal das sub-linhas de detalhe (Tipo 1/2/3/RCPD) abaixo.
    const classe = (ehLinhaTotal(item.nome) || item.tipo === "par" || item.tipo === "subtotal") ? ' class="linha-total"' : "";
    if (item.tipo === "par") {
      return `<tr${classe}><td>${item.nome}</td><td>${fmt(item.tipoQtd, somar(linhas, item.campoQtd))}</td><td>${fmt(item.tipoValor, somar(linhas, item.campoValor))}</td></tr>`;
    }
    if (item.tipo === "subtotal") {
      return `<tr${classe}><td>${item.nome}</td><td>${fmt(item.tipoQtd, somarVarios(linhas, item.camposQtd))}</td><td>${fmt(item.tipoValor, somarVarios(linhas, item.camposValor))}</td></tr>`;
    }
    if (item.tipo === "linha-n") {
      // Cada célula é [campo, tipo] (1 valor) ou [[campo1,campo2,...], tipo]
      // (soma de vários campos — usado na linha "Total" de uma tabela).
      const tds = item.celulas.map(([campo, tipo]) => {
        const total = Array.isArray(campo) ? somarVarios(linhas, campo) : somar(linhas, campo);
        return `<td>${fmt(tipo, total)}</td>`;
      }).join("");
      return `<tr${classe}><td>${item.nome}</td>${tds}</tr>`;
    }
    return `<tr${classe}><td>${item.nome}</td><td colspan="${colunas.length - 1}">${fmt(item.tipoValor, somar(linhas, item.campo))}</td></tr>`;
  }).join("");
  const thead = colunas.map((c) => `<th>${c}</th>`).join("");
  return `<table class="tabela-detalhe"><thead><tr>${thead}</tr></thead><tbody>${corpo}</tbody></table>`;
}

let focoAntesDoModal = null;

function abrirModalCard(card, linhas) {
  focoAntesDoModal = raiz.activeElement;
  const caixa = raiz.getElementById("modal-caixa");
  caixa.setAttribute("role", "dialog");
  caixa.setAttribute("aria-modal", "true");
  caixa.setAttribute("aria-label", `Detalhamento ${card.rotulo}`);
  caixa.innerHTML = `
    <div class="titulo"><span>${card.rotulo}</span><button type="button" class="fechar" aria-label="Fechar">&times;</button></div>
    <div class="desc">${card.desc}</div>
    <div class="corpo">${montarTabelaDetalhe(card, linhas)}</div>`;
  raiz.getElementById("modal-overlay").hidden = false;
  caixa.querySelector(".fechar").focus();
}

function fecharModal() {
  const overlay = raiz.getElementById("modal-overlay");
  if (overlay.hidden) return;
  overlay.hidden = true;
  // Devolve o foco pro card que abriu o modal (navegação por teclado)
  if (focoAntesDoModal && raiz.contains(focoAntesDoModal)) focoAntesDoModal.focus();
  focoAntesDoModal = null;
}

function montarPerfilMunicipio(linhas) {
  const container = raiz.getElementById("perfil-municipio");
  const municipioUnico = linhas.length === 1 ? linhas[0] : null;
  // Fica logo abaixo dos filtros (antes do mosaico de 31 cards) pra ficar
  // visível sem precisar rolar a página — era o motivo de o botão "Ver
  // Nota Técnica" parecer "sumido" quando estava no fim da grade.
  if (!municipioUnico) { container.innerHTML = ""; return; }
  container.innerHTML = montarCardPerfil(linhas, municipioUnico);
}

function recalcular() {
  const linhas = linhasFiltradas();
  ESTADO.linhasAtuais = linhas;
  montarPerfilMunicipio(linhas);
  montarMosaico(linhas);
  if (!raiz.getElementById("modal-overlay").hidden) fecharModal();
}

      iniciar().catch(function () {
        raiz.getElementById('mosaico').innerHTML = '<p class="aviso">Não foi possível carregar os dados do Panorama. Tente novamente em instantes.</p>';
      });
    })(raiz, urlDados);
  }
  window.apsPanoramaMontar = montar;
  var h = document.getElementById('panorama-host');
  if (h) montar(h, h.getAttribute('data-dados') || 'panorama/dados/panorama_dados.json');
})();
