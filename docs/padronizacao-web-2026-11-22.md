# Padronização das interfaces web — 22/11/2026

Pedido: alinhar os sites internos e externos ao gov.br Design System, sem logo gov.br; preservar Modo Tático e todos os Totems. Publicação desta entrega autorizada pelo usuário. Novas publicações continuam sujeitas à autorização da respectiva tarefa.

## Referências e manutenção

Fonte comum: [regra 10](regras/10-padrao-govbr.md), [guia de aplicação](../02_PAGINAS_ONLINE/design_referencia/govbr/documentacao/guia-aplicacao.md) e [especialista govbr-ds](../.claude/agents/govbr-ds.md). A preferência também foi registrada no AGENTS global do usuário. Usar Core 3.7.0, Rawline, marca SUS e componentes/estados oficiais, além de cores. As referências de uso, código e acessibilidade foram consultadas no acervo oficial de 21/11; cores, tipografia e hash do CSS oficial foram conferidos em 22/11. Não houve nova coleta renderizada integral de toda a documentação.

## Inventário da entrega

| Interface | Tratamento |
|---|---|
| Hub SAPS — atendimentos-saps.onrender.com | Header, menu, cards, campo de busca, breadcrumb, footer e modal; foco inicial/retorno, Tab, Escape e fundo inerte |
| Notas Técnicas — notas-tecnicas-aps.onrender.com | Componentes nas fontes geradoras, BRSelect nos filtros, cabeçalho, cards e tabela em grade com todas as colunas |
| Leitor municipal e estadual | Preservação da leitura no Shadow DOM, foco ao entrar/voltar e tabelas com cabeçalhos/legendas e rolagem acessível |
| PAS Municipal | Filtros BRSelect, consulta, expansão/recolhimento de metas e grade preservada |
| Panorama APS avulso e incorporado | BRSelect, cards e modal, inclusive dentro do Shadow DOM; 31 indicadores preservados |
| Valores de referência avulso e incorporado | 46 fichas, estados dos filtros, foco da ficha/retorno e cabeçalhos de quatro tabelas; fonte editorial preservada |
| Credenciamentos | Filtros gerais BRSelect; simulador mantém seus componentes oficiais próprios; abas, URL, CSV e regras preservados |
| Represados e Represados por Estratégia | Aprimoramento dos filtros e tabelas; autenticação e restrição por IP preservadas |
| Wrapper Power BI — painel-credenciamentos.onrender.com | Moldura própria com SUS, header/footer, atalho, título do iframe e Rawline; conteúdo do Power BI permanece sob controle da plataforma |
| Valores CNES | Painel interno/local com BRSelect, grade e detalhe em modal; somente parcela 10/2026, apto S, projeção e acumulado separados |
| Protótipos e fontes auxiliares | Protótipo de Credenciamentos, demonstração avulsa do hub e modelo de referência atualizados; o modelo continua sendo um template com placeholders, não uma aplicação preenchida |
| Modo Tático e Totems interativos | Preservados; catálogo de downloads padronizado posteriormente por pedido explícito, sem regenerar os jogos |

O antigo wrapper Tableau local é legado substituído pelo Panorama APS; sua moldura também recebe o tema. Editorias HTML destinados a impressão/PDF, miniaturas e kits editoriais mantêm sua identidade própria e não são telas de consulta web. O hub antigo conserva o redirecionamento para o endereço atual.

## Verificações e limites

- Hub: 16 cartões e seus destinos/descrições, busca, categorias, favoritos, menu móvel, teclado, foco, modal, recusa de Analytics e oito larguras de 320–1920 px. Evidência: `validacoes/govbr-landing-2026-11-22.json`.
- Consultas: catálogo 5.571/27, paginação, filtros oficiais, notas reais SC/DF, PAS Schroeder com 85 metas, Panorama com 31 indicadores e 46 fichas; sete larguras, sem erros JavaScript nem Analytics após recusa. Evidência: `validacoes/govbr-fluxos-consultas-2026-11-22.json`.
- Leitor: 136 tabelas reais de Salvador, Schroeder, Rio de Janeiro e DF, em seis larguras; células e mesclagens comparadas ao HTML recebido, números íntegros, quebra de texto e rolagem por teclado. Evidência: `validacoes/tabelas-notas-2026-11-22.json`.
- Credenciamentos: dez larguras × quatro abas, contraste, dicas e teclado; teste do simulador ajustado para contar apenas seus dois selects, pois os filtros gerais agora também usam BRSelect. Simulador reexecutado com mouse, teclado, limpeza, URL e datas. Valores CNES: formulário, busca integral nos 5.571 municípios, modal/Escape e sete larguras; evidência no repositório próprio, `tests/govbr-20261122-local.json`.
- Preservação: 166 arquivos de Totems/destinos comparados por SHA-256; somente os dois arquivos do catálogo de downloads foram alterados após pedido explícito. Os outros 164 e os trechos CSS/HTML/JS do Modo Tático foram preservados. Conteúdo editorial, dados do Panorama e configuração integral do catálogo comparados ao estado anterior. Evidência: `validacoes/govbr-preservacao-2026-11-22.json`.
- Publicador atômico: 19 testes offline; cria uma árvore/commit por repositório, preserva caminhos não listados, rejeita concorrência e bloqueia bancos, credenciais e artefatos das exceções. A autorização do catálogo libera somente seus dois arquivos. O planejamento não lê tokens.

Esses testes não certificam WCAG. Leitor de tela, zoom real e todos os estados de contraste continuam sem auditoria manual integral. O acesso ao dashboard completo de Represados depende da autorização por IP; a resposta 403 de produção foi preservada, sem contornar o controle. Os relatórios automáticos distinguem o estado restrito de uma consulta autenticada. A ferramenta de navegador integrada falhou na inicialização (`sandboxPolicy`); as verificações foram executadas com Edge/Playwright já instalado.

## Publicação e continuidade

Manifesto público explícito: `02_PAGINAS_ONLINE/validacao/manifesto_padronizacao_20261122.json`. Planejamento e execução pelo `publicar_padronizacao.py`, com registro separado dos commits e da conferência SHA-256 no Render. Credenciamentos segue commit/push de arquivos selecionados em seu próprio Git. Não publicar bancos, planilhas, caches, auditorias financeiras ou APIs privadas; não executar sincronização de dados nesta revisão.

O sincronizador comum agora atualiza somente o CSS da landing: não injeta o tema legado no novo Credenciamentos. Para publicar o portal sem mexer nos Totems, o publicador próprio exige `--sem-totems`; `--totem-source` fica reservado a um pedido que inclua explicitamente Totems. A demonstração avulsa é reproduzida da fonte local e incorpora seus recursos, sem Analytics e sem publicação.

Depois de publicar, registrar commits e recursos servidos em `validacoes/govbr-publicacao-2026-11-22.json` e `validacoes/govbr-render-2026-11-22.json`. GitHub atualizado sozinho não comprova deploy.

## Correções após conferência visual do usuário

- Notas: o seletor legado `.header-logo` colidia com o nome oficial do Core. Renomeado no CSS legado e organizada a anatomia `header-menu`/`header-info`; marca sobre branco e título junto ao botão de menu.
- Panorama: rótulos de selects agora são irmãos dos controles, com apenas um rótulo visível no aprimoramento; grid responsivo e dimensões iguais. O Core cria `.input-group` durante a inicialização: os seletores de alinhamento alcançam esse contêiner, nas versões avulsa e incorporada.
- Hub: removidas as margens antigas do botão dentro de `card-footer`; ações ficam contidas e alinhadas ao conteúdo dos 16 cards.
- Compartilhamento: janela nativa centralizada, superfície branca, anatomia de Modal, foco inicial no fechamento, ciclo de Tab, Escape, restauração do foco e da rolagem. Links de canais no corpo; dois botões no rodapé, Fechar e Copiar link, com o primário à direita. A cópia foi testada com clipboard simulado, sem disparar mensagens.
- Ações da nota: grupo próprio junto ao título, Compartilhar secundário e Baixar Word primário à direita; em telas estreitas o grupo ocupa sua própria linha. Esta ênfase é decisão do produto, aplicada segundo a orientação oficial de hierarquia de botões.
- Credenciamentos: `favicon.png` copiado da fonte das Notas, com referências nos três frontends do domínio e no protótipo; identidade SUS, sem logo gov.br.

Referências consultadas: [Modal — uso, anatomia, botões e acessibilidade](https://www.gov.br/ds/components/modal), [Button — ênfase, posicionamento e teclado](https://www.gov.br/ds/components/button). A SPA oficial não expôs texto na nova consulta; lidas as páginas e exemplos do acervo oficial de 21/11/2026. O modal recomenda até dois botões e o alinhamento das ações à direita; canais adicionais foram mantidos como links no conteúdo. Não se atribui à documentação a decisão específica de dar prioridade ao download Word.

Evidências adicionais: `validacoes/govbr-alinhamentos-2026-11-22.json` e `validacoes/govbr-compartilhamento-2026-11-22.json`, com capturas de 390/1440 px. Os testes medem posição, altura e contenção dos controles, não apenas ausência de transbordamento. Repetir no site público e registrar os arquivos com sufixo `-publicado`. Preservar os registros da primeira publicação com sufixo `-inicial`.

Hospedagem confirmada pelo usuário: manter os destinos existentes, Render para os frontends e Hostinger para notas/APIs. A skill Sites foi usada apenas para boas práticas; nenhum Site, hospedagem ou migração foi criado. As 18 imagens preexistentes permanecem intactas no Git; o serviço pode entregar bytes reencodificados. A aprovação SHA-256 dos recursos de interface não inclui essas imagens. PNGs amostrados mantiveram os pixels após decodificação; não foi feita uma auditoria de recompressão de todos os JPEGs.

## Publicação conferida

Atualização final publicada e verificada em 22/11/2026. Commits: LandingPage `d556b0f`, notas-tecnicas-aps `05faafe`, Page_credenciamento `fa85599`, Credenciamentos `a4e1fba`. Vinte recursos de interface/dados estáticos conferidos por SHA-256 no Render; favicon comparado ao das Notas em três páginas (pixels e dimensões iguais, com reencodificação de entrega em parte das respostas). Testes públicos de alinhamento e compartilhamento aprovados. Registro: `validacoes/govbr-encerramento-2026-11-22.json`.

Complemento dos cards: favorito posicionado dentro do cabeçalho, no canto superior direito, sem as margens negativas herdadas do Core. Teste de contenção acrescentado para os favoritos dos 16 cards. LandingPage `9d6ff74`; evidência específica `validacoes/govbr-publicacao-cards-2026-11-22.json`.

## Estrutura comum, contador, rodapé e catálogo de Eventos

Após a comparação do usuário, o hub e as Notas passaram a compartilhar `estrutura-portal.css`, com escopo explícito no corpo da página. Usam o mesmo grid Core `container-lg`, dimensões de marca, título/subtítulo, botão do menu, coluna lateral, tipografia e área central. Os conteúdos e títulos próprios de cada produto permanecem. O rodapé agrupa identidade e preferências com espaço de 32 px no desktop e grupos em linhas separadas no celular; a opção de cookies preserva seu funcionamento. Referências: Header, Menu, Breadcrumb e Footer do acervo oficial 3.7.0. Os assets recebem versão por hash, inclusive o Panorama incorporado.

O contador foi ajustado, no estado inicial e após filtrar, para “5571 de 5571 Notas técnicas”, conforme pedido. Sem alteração no catálogo, links ou regras.

A página `eventos/totems/index.html` e seu `totems.css` receberam o padrão por pedido explícito, com marca SUS, cabeçalho/rodapé comuns, breadcrumb, cards, botões e acesso por teclado. Essa autorização abrange somente o catálogo; os jogos COMBO/EQUIDADE, fontes, downloads e manifesto continuam preservados. Os nomes dos downloads e seus destinos foram mantidos. A regra 10 e o guia da área registram essa distinção.

Testes: `govbr-estrutura-portal-2026-11-22.json` compara as medidas dos dois produtos em sete larguras, contador e preferências; `govbr-catalogo-totems-2026-11-22.json` verifica o catálogo em sete larguras, foco, atalhos, destinos e nomes dos downloads. As cópias com sufixo `-publicado` registram a execução no Render.

## Miniaturas após cada publicação

Escolha do usuário: atualização **a cada nova publicação do hub**. Workflow em `.github/workflows/atualizar-miniaturas.yml` do LandingPage, acionado por push em main e manualmente, sem agenda diária. Os próprios arquivos gerados são excluídos do gatilho. Captura pública sem autenticação, cinco testes de preservação/publicação, commit atômico e controle de concorrência; resultados no resumo do job. Cliente atualiza a imagem por hash, consulta o manifesto novamente quando visível e preserva/restaura o fallback. O teste do cliente usa a estrutura real dos cards (`.thumb img`) e verifica tanto a substituição quanto a restauração da imagem original.

A primeira execução por push terminou com sucesso (run 45051765529). A revisão visual identificou duas capturas que retornaram indisponibilidade/carregamento (Mais Médicos e Panorama legado), retiradas do manifesto; foram acrescentadas verificações e casos de teste. Uma execução posterior recuperou Panorama e SIAPS com conteúdo válido. O navegador público confirmou 13 imagens automáticas, com Mais Médicos indisponível, AgSUS autenticado e Totems mantendo as imagens anteriores. Essa quantidade depende da disponibilidade dos destinos em cada execução. A automação não corrige nem altera os painéis de destino. Registro completo em `03_LANDING_PAGE/validacao/publicacao_miniaturas_20261122.json`, na raiz APS 360; manutenção em `03_LANDING_PAGE/Panorama_APS/miniaturas/README.md`. Evidência do cliente no Render: `validacoes/miniaturas-navegador-2026-11-22.json`.

## Encerramento da estrutura comum e automação

Publicação de código: LandingPage `10adf87`, notas-tecnicas-aps `ade93d3`, Page_credenciamento `fa85599`, Credenciamentos `a4e1fba`. O workflow final por push concluiu com sucesso: [execução 45055491294](https://github.com/gaiafranklinalexandre-blip/LandingPage/actions/runs/45055491294). Os cinco testes de captura, cliente/fallback e publicação passaram localmente e no runner. O navegador no Render confirmou a aplicação das miniaturas e seus fallbacks; 20 recursos de interface/dados estáticos coincidem com as fontes. Os testes públicos de estrutura/rodapé e do catálogo abrangem sete larguras, de 320 a 1920 px. Documentação e regras conferidas: 10 entradas AGENTS, 10 regras, 42 arquivos e 103 referências. Registro final: `validacoes/govbr-encerramento-2026-11-22.json`.

## Correção dos indicadores e do campo Município

Após nova captura do usuário, identificada uma transformação antiga em `indice/componentes_govbr.py`: a expressão que tentava mover a secretaria para fora da marca atravessava o cabeçalho já correto até encontrar o `strong` do primeiro indicador. Isso deslocava o rótulo do indicador para fora do card e criava um terceiro item no grid. Removida essa transformação redundante; a secretaria já tem posição própria em `painel_cabecalho.html`. Os dois indicadores voltam a conter valor e rótulo, lado a lado, sem alteração dos quantitativos.

O campo Município agora usa a anatomia de Input com ícone do Core (`br-input`, `input-group`, `input-icon`), em baixa densidade, com rótulo permanente e ícone decorativo. Retirado o ícone SVG antigo de fundo. Margens dos campos UF/Município alinhadas, altura de 48 px, raio de 4 px e foco tracejado restaurado com seletor local que supera o `outline:none` legado. A busca permanece textual, com os mesmos IDs, eventos e filtragem.

Referências: [Card](https://www.gov.br/ds/components/card), [Input](https://www.gov.br/ds/components/input) e Grid do acervo oficial Core 3.7.0. A nova consulta HTTP às duas páginas confirmou suas rotas; a SPA não ofereceu texto legível, por isso a anatomia e o código foram lidos no acervo oficial local de 21/11.

Verificação específica: `02_PAGINAS_ONLINE/validacao/conferir_indicadores_filtros_notas_20261122.cjs`, com contenção dos textos nos cards, alinhamento, ícone único, dimensões dos campos, sete larguras (320–1920 px), busca/limpeza por teclado e foco. Evidências locais e públicas em `validacoes/govbr-indicadores-filtros-notas-2026-11-22*.json`. A configuração completa (5.571 municípios/27 UFs) e todos os scripts foram comparados ao artefato anterior e preservados.
