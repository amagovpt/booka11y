---
title: accordion
---

## Análise

Accordion General

<img width="1257" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/e32c17ca-8e93-4c9a-a849-d038370d7bf6">

## Bugs encontrados

4 aspetos em análise:

- Estado do accordeon: aberto/fechado; expandido/comprimido?
- Semântica do elemento: cabeçalho botão
- Marcação: hx > button
- Relação "Cabeçalho botão" com "painel de info": programática e implicita.

### Ágora (4 falhas)

<img width="616" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/02817e77-fbc2-4590-86f4-1acf6d52eeb6">


- X Estado: não informa o estado aberto/fechado? Apesar da variável estar contemplada no componente, ela não é usada no output final do componente.
- X Semântica: Informa botão mas não informa cabeçalho nem nível
- X Marcação cabeçalho: <button><h3></button> (bloco dentro de inline, não é natural)
- X Relação Cabeçalho e Descrição adicional: não há relação programática; há relação implícita - a descrição está a seguir ao cabeçalho.

### Lightning

<img width="642" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/873bc625-b10d-44d5-be0d-2c4ccea0b228">


- OK estado: Informa estado “expandido/comprimido” via aria-expanded true/false (i.e. info é passada às tecnologias de apoio de forma programática)
- OK Semântico: informa cabeçalho, nível de cabeçalho e botão.
- OK Marcação cabeçalho: <h2><button></h2> (inline dentro de bloco, é natural)
- OK Relação Cabeçalho e Descrição adicional: estabelece relação programática via <button aria-controls=“id_descricao”>; há relação implícita em que descrição está a seguir a cabeçalho.

## Comportamento esperado do componente

 ### Ágora

> An accordion is an expandable panel with an toggle header that expands or collapses the inner section of content.

### Lightening

- General purpose: Accordions are composed of a list of longer blocks of text, with a header button to toggle the visibility of each block.
- An accordion is implemented as an unordered list with a class of slds-accordion. Inside the list, each chunk of content is inside both a list item with class of slds-accordion__list-item and a section with a class of slds-accordion__section.
- The content itself is contained within a div with the class slds-accordion__content, an ID that corresponds to the aria-control on the button and the hidden attribute.
- Content visibility is toggled via a Button in the H3 heading. To make accordion content visible, the section is given the class slds-is-open, the button is changed from aria-expanded="false" to aria-expanded="true", and the hidden attribute is removed from the content div.
