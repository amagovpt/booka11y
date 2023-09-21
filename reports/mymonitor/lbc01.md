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

## Sobre a Declaração de Acessibilidade
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

## Correções de texto

<h2 _ngcontent-mhy-c351="" class="h5">Níveis de conformidade</h2>
<p _ngcontent-mhy-c351="">A <mark>D</mark>eclara<mark>ç</mark>ão de <mark>A</mark>cessibilidade <mark>tem 3 estados possíveis</mark> <strike>divide-se em niveis de conformidade</strike>:</p>
<ul _ngcontent-mhy-c351="">
   <li _ngcontent-mhy-c351="">Plenamente conforme</li>
   <li _ngcontent-mhy-c351="">Parcialmente conforme</li>
   <li _ngcontent-mhy-c351="">Não conforme</li>
</ul>

## Botão voltar ao topo, está sem texto alternativo

<img width="250" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/cbe06c74-6d2d-465b-b553-5b7435d3b837">

O que o botão deve fazer:
- Botão está sem texto alternativo.
- O nome acessível, ou parte dele, deve estar visível.
