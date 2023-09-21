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

Notas:
- o último elemento não deve ter link.
- o elemento não tem estrutura - apresenta-se como um monte de links e sinais '>'.

```html
<nav _ngcontent-mhy-c305="" fxlayout="row"
      ng-reflect-fx-layout="row"
      style="flex-direction: row; box-sizing: border-box; display: flex;">
<a _ngcontent-mhy-c305="" href="/">Ecossistema</a>
<span _ngcontent-mhy-c305="">&gt;</span>
 ```
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




