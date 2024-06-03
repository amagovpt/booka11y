---
title: Ágora - Table with sort columns
layout: post
categories: report mymonitor
---

Ágora ref: [Table with sort columns](https://prd-agora.northeurope.cloudapp.azure.com/iframe.html?id=components-organisms-table--table-general-story&viewMode=story)

## Análise ao componente


Pretende-se:

- (A) uma tabela estruturada de acordo com as regras gramaticais do HTML5 com: <caption>, <th> e <td>;
- (B) cada coluna permite 3 formas de ordenar: original, crescente e decrescente

## Síntese da análise

*Nota prévia*

- NOKE corresponde a melhoria
- NOK corresponde a algo que não está bem
- OK significa que está correto

A análise à estrutura anatómica (resposta a A) da tabela permite concluir que:

- (OK) tem <caption> OK
- (OK) tem <th> células cabeçalho para cada coluna OK
- (OK) tem <td> células dados OK
  
A análise às funcionalidades de ordenação (B) permite concluir que:

- (NOKE) visualmente existe um indicador de qual é o estado da ordem aplicado no momento. Esta inferência não é explicita na leitura dos ícones. Melhoraria se complementássemos o ícone com um tooltip adicional (algo como title=”ordem original, pressione para alterar”);
- numa abordagem “não visual” (p.e. com leitor de ecrã):
  - (NOK) o Estado não é informado (NOK);
  - (NOK) a ação não é conhecida (NOK) - o que acontece se pressionar no botão?;

## Solução

Encontrar uma forma de informar o Estado/Ação do Botão.

Para atingir uma solução “não visual” uma das formas poderá passar por colocar no texto alternativo do ícone a informação sugerida abaixo.

## Detalhe da Análise 

### 1º Estado do botão - por defeito

<img width="883" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/8b13e69c-6247-41f1-b59c-3aea205eb95c">

Qual é o Estado? “Coluna ordenada pela ordem original”; Qual é a Ação? “pressione para alterar a ordem da coluna”

### 2º Estado do botão

<img width="1033" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/f070498e-ae3a-443e-9341-ef83c9fa80fe">

Qual é o Estado? “Coluna ordenada pela ordem decrescente”: Qual é a Acção? “pressione para alterar a ordem”

### 3º Estado do botão

<img width="946" alt="imagem" src="https://github.com/amagovpt/booka11y/assets/27677125/ae55bcaa-9bf4-4df3-bf25-113a75a23628">

Qual é o Estado? “Coluna ordenada pela ordem crescente” Qual é a ação? “pressione para alterar a ordem”


