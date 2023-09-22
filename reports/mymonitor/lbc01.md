---
title: lbc01.md | Homepage HTML MyMonitor.
created: 21/09/2023
updated: 21/09/2023
---
## Menu
<img width="1408" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/d20737ad-45cb-46df-ab27-303b60773cda">

Transformar em menu do tipo:

```html
<nav aria-label="menu principal do MyMonitor">
 <ul>
  <li><a href="/">MyMonitor</a></li>
  <li><button ...>Sair</button></li>
 </ul>
</nav>
```
Ou seja, a estrutura ficará algo como:

<nav aria-label="menu principal do MyMonitor">
 <ul>
  <li><a href="/">MyMonitor</a></li>
  <li><button>
    Sair
    <svg _ngcontent-mhy-c306="" xmlns="http://www.w3.org/2000/svg" width="25.2" height="24.8" viewBox="0 0 25.2 24.8">
      <path _ngcontent-mhy-c306="" fill="currentColor" d="M20.79,12l-.85.85L18.42,14.4a1,1,0,0,0-.13,1.46,1,1,0,0,0,1.45.13h0l.12-.14,2-2,2-2a1.11,1.11,0,0,0,0-1.58h0l-2-2-2-2a1,1,0,0,0-1.58,1.25l.14.14.79.79L20.79,10H17.86a1,1,0,0,0,0,2Z"></path>
      <circle _ngcontent-mhy-c306="" fill="currentColor" cx="13.86" cy="11.04" r="0.99"></circle>
      <circle _ngcontent-mhy-c306="" fill="currentColor" cx="9.86" cy="11.04" r="0.99"></circle><path _ngcontent-mhy-c306="" fill="currentColor" d="M14,16.54a6.49,6.49,0,0,1-9.93-5.49.86.86,0,0,0,0-.17,1,1,0,0,0,0-.17A6.49,6.49,0,0,1,14,5.21a1.11,1.11,0,1,0,1.18-1.87A8.7,8.7,0,0,0,1.9,10.71a1,1,0,0,0,0,.17.86.86,0,0,0,0,.17,8.71,8.71,0,0,0,13.32,7.37A1.11,1.11,0,1,0,14,16.54Z"></path>
    </svg>
  </button>
  </li>
 </ul>
</nav>

Desta forma, os leitores de ecrã irão percecionar o elemento como sendo uma estrutura de navegação:

<img width="812" alt="VO diz menu principal do MyMonitor, navegação" src="https://github.com/amagovpt/booka11y/assets/27677125/46263723-f489-4978-9f35-b8f6a1a36d76">

## Breadcrumb

<img width="297" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/9e8da728-a290-48b0-9b72-059ca041d726">

O Breadcrumb atual tem apresenta-se consoante iamgem anterior, com o seguinte código:

```html
<nav _ngcontent-mhy-c305="" fxlayout="row"
      ng-reflect-fx-layout="row"
      style="flex-direction: row; box-sizing: border-box; display: flex;">
<a _ngcontent-mhy-c305="" href="/">Ecossistema</a>
<span _ngcontent-mhy-c305="">&gt;</span>
 ```

Notas (elementos a corrigir):
- o último elemento não deve ter link.
- o elemento não tem estrutura - apresenta-se como um monte de links e sinais '>'.

Aconselha-se a utilizar uma estrutura semelante à [estrutura do Breadcrumb do Ágora](https://prd-agora.northeurope.cloudapp.azure.com/?path=/docs/components-atoms-breadcrumb--docs).
<img width="501" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/3a8c5a15-0e66-478f-8683-d3eb47b05387">

O Breadcrumb do Ágora tem:

- marcação landmark nav
- título para landmark nav (i.e. 'você está aqui')
- lista ordenada de links
- marcação da página atual na estrutura

Será algo como:

```html
<nav ... aria-label="você está aqui">
  <ol>
   <li><a ...>acessibilidade.gov</a></li>
   <li><a ...>MyMonitor</a></li>
   <li><a ... aria-current="page">Gerar Declaração de Acessibilidade</a></li>
  </ol>
</nav>
```

## Nome do sítio Web

<img width="416" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/7389c1c4-260e-468f-acab-6dd5df4e6ffd">

O cabeçalho `<h1>` está corretamente marcado. Contudo aconselha-se a corrigir o texto para:

```html
<p>Sumário da Declaração de Acessibilidade</p>
```

<img width="155" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/bc933e3b-5a1c-4cdf-9e3e-1a0f4cd95de9">

O nome do sítio Web está marcado como:

```html
<p>Portal da Justiça</p>
```

Aconselha-se a indicar um rótulo para contextualizar este campo. Poderá ficar escondido visualmente e visível para leitores de ecrã. Poderá ser contrastado com um ícone antes do nome. Poderá ter os dois.

```html
<p><i class="icon-website"><strong class="sr-only">Sítio Web: </strong></i>Portal da Justiça</p>
```

## Avaliação mais recente

O código atual:

```html
<p _ngcontent-mhy-c351="" class="m-0"><strong _ngcontent-mhy-c351="">Avaliação mais recente</strong></p>
<p _ngcontent-mhy-c351=""> 14 de setembro de 2023 </p>
```

Deve passar a:

```html
<p><strong>Avaliação mais recente</strong> 14 de setembro de 2023</p>
```

O estilo pode ser o que está no Mockup.

## Sumário da Declaração de Acessibilidade
<img width="1417" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/5702e1a0-274b-48f5-8a91-a9e07aad2faa">

A versão linear atual desta componente mostra a estrutura não tem nexo (ver imagem seguinte).
<img width="634" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/7f9006d8-bb40-4e9e-bd62-5b765f5cd654">

Aconselha-se uma estrutura do tipo lista com 4 itens.

```html
<ul aria-label="dados atualmente inscritos na Declaração de Acessibilidade">
  <li><strong>Amostra:</strong> <span>1 página</span></li>
  <li>Avaliação automática:
   <ul aria-label="avaliação automática">
     <li><strong>Pontuação:</strong> 10 pontos <span>escala MyMonitor</span></li>
     <li><a href="consultar_aa.html">Consultar avaliação automática</a></li>
   </ul>
  </li>
  <li>Avaliação manual:
   <ul aria-label="avaliação manual">
     <li><strong>Satisfaz:</strong> <span>25%</span> dos requisitos da <em lang="en">checklist</em> 10 aspetos críticos de acessibilidade funcional</li>
     <li><a href="consultar_am.html">Consultar avaliação manual</a></li>
   </ul>
  </li>
  <li><strong>Estado da Declaração de Acessibilidade</strong> Não conforme</li>
</ul>
```

Ou seja, estruturalmente apresenta-se assim:

<ul aria-label="dados atualmente inscritos na Declaração de Acessibilidade">
  <li><strong>Amostra:</strong> <span>1 página</span></li>
  <li>Avaliação automática:
   <ul aria-label="avaliação automática">
     <li><strong>Pontuação:</strong> 10 pontos <span>escala MyMonitor</span></li>
     <li><a href="consultar_aa.html">Consultar avaliação automática</a></li>
   </ul>
  </li>
  <li>Avaliação manual:
   <ul aria-label="avaliação manual">
     <li><strong>Satisfaz:</strong> <span>25%</span> dos requisitos da <em lang="en">checklist</em> 10 aspetos críticos de acessibilidade funcional</li>
     <li><a href="consultar_am.html">Consultar avaliação manual</a></li>
   </ul>
  </li>
  <li><strong>Estado da Declaração de Acessibilidade</strong> Não conforme</li>
</ul>

## Correções de texto - Sobre a Declaração de Acessibilidade
<img width="1378" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/e309d510-f038-45ea-a5be-3fe520e705f3">

Corrigir o texto para:

<h2>Sobre a Declaração de Acessibilidade</h2>
<p>Como posso declarar que o meu sítio Web satisfaz os requisitos de acessibilidade? Através da Declaração de Acessibilidade. Desde setembro de 2020, todos os sítios Web da Administraçãoo Pública estão obrigados a publicar uma Declaração de Acessibilidade.</p>
<p>Para mais informações, consulte a página:</p>
<ul>
 <li><a href="3passos.html">3 passos para publicar a Declaração de Acessibilidade</a>.</li>
</ul>

```html
<h2>Sobre a Declaração de Acessibilidade</h2>
<p>Como posso declarar que o meu sítio Web satisfaz os requisitos de acessibilidade? Através da Declaração de Acessibilidade. Desde setembro de 2020, todos os sítios Web da Administraçãoo Pública estão obrigados a publicar uma Declaração de Acessibilidade.</p>
<p>Para mais informações, consulte a página:</p>
<ul>
 <li><a href="3passos.html">3 passos para publicar a Declaração de Acessibilidade</a>.</li>
</ul>
```

## Correções de texto - Níveis de conformidade

<h2 _ngcontent-mhy-c351="" class="h5">Níveis de conformidade</h2>
<p _ngcontent-mhy-c351="">A <mark>D</mark>eclara<mark>ç</mark>ão de <mark>A</mark>cessibilidade <mark>tem 3 estados possíveis</mark> <strike>divide-se em niveis de conformidade</strike>:</p>
<ul _ngcontent-mhy-c351="">
   <li _ngcontent-mhy-c351="">Plenamente conforme</li>
   <li _ngcontent-mhy-c351="">Parcialmente conforme</li>
   <li _ngcontent-mhy-c351="">Não conforme</li>
</ul>

Nota: Há que efetuar revisão dos textos.

## Botão voltar ao topo, está sem texto alternativo

<img width="250" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/cbe06c74-6d2d-465b-b553-5b7435d3b837">
Fig. - evidência do 1º aspeto

<img width="516" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/5fe7ea7a-6ac4-4730-b7eb-f1a8e920a6d5">
Fig. - evidência do 2º aspeto

<img width="806" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/42c37ee0-e1a5-4096-9830-1d2bba8b7cb4">
Fig. - evidência do 3º e 4º aspeto

<img width="310" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/882f33c1-1c89-4273-8a70-e1189c77a095">
Fig. - evidência em como o 4º aspeto é visto no Chrome. Parece ser um problema do Safari, não ver o title do SVG. Por isso o VO não o lê.

Há 3 aspetos estranhos no atual botão:
- 1º, o VO não fornece o nome acessível;
- 2º, o ANDI diz que existe um nome acessível;
- 3º, há um nome acessível no elemento `<title>` do SVG que é 'monitor_icons_tools_back-to-top' (!?)
- 4º, o elemento `<title>` parece que não é processado pelo browser - surge escrito a cinzento.
- 5º, o svg nao tem role="img"; adicionei, mas o title continua a não ser lido pelo VO nem forma o nome acessível no `<button>`. 

O que o botão deve fazer:
- Botão está sem texto alternativo.
- O nome acessível, ou parte dele, deve estar visível.

## Páginas <em lang="en">Responsive</em>

Precisamos de páginas responsive.

<img width="105" alt="Printscreen da página num iPhone 11" src="https://github.com/amagovpt/booka11y/assets/27677125/8842d42f-bc06-433c-af04-a510f747db72">
Fig. Página num iPhone 11.

## Landmarks de 1º nível

Precisamos de uma página com as landmarks de 1º nível devidamente marcadas.

Algo como:

```html
<body>
  <header>(...)</header>
  <main>(...)</main>
  <footer>(...)</footer>
</body>
```

Atualmente (1º nível)

<img width="425" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/ae8bae53-acee-4c46-a170-491ad26f3547">

Tentando descer mais um pouco, temos:

<img width="425" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/8c0f4060-1e18-454d-ba28-2040ebfc4fdd">

Nota:
- O uso de <br> para efeitos de estilo é causa de despedimento da equipa de acessibilidade 
- O botão go to top parece estar perdido. Ou pertence ao footer, ou pertence ao main?
- Nada de script no body  . É script. É style, a referência vai para o head da página. Problemas de carregamento da página? Sim, é provável. Estudar os métodos de carregamento de script ‘async’ e ‘defer’.

Tentando entrar em maior profundidade na página:

<img width="282" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/081cdc6a-6cbe-49f3-95f3-c01e23ab8a93">

Notas:
- Há muitas peças que não estão dentro nem de header, nem de main, nem de footer.
- Os atributos angular _ngcontent-mhy-c308 são desconhecidos na gramática HTML. Diz o standard HTML que ter prefixo data_, ou seja data_ngcontent ... Que todos desrespeitem a gramática de HTML, nós não o vamos poder fazer. 

## Saltar para o conteúdo principal da página

<img width="297" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/eb891ed3-0488-469a-ac6c-ea343272bc92">

Com o atual set, não foi possível perceber com leitor de ecrã se o link está correto ou não. Ao acionar o link com leitor de ecrã, o salto não é efetuado.

## 2 menus iguais

<img width="425" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/210b7623-61e0-4222-b0bd-f77bc1bd6e46">

Nota:
- Não se consegue fazer 1 só rodapé em vez de 2?


