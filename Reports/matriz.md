---
title: Relatório Avaliação da Candidatura da Pessoas 2030
data: Dezembro 2024
owner: Proprietário do Pessoas2030
uri: https://pessoas2030.gov.pt/
selo: candidatura a selo prata
---

- {{ page.data }} / AMA. I.P. - Núcleo de Experiência e Usabilidade.
- {{ page.owner }}
- {{ page.uri }}
- {{ page.selo }}

índice:

{{ TOC }}

## Introdução

O {{ page.uri }} <span class="badge text-bg-danger">status: não passa</span> (variável 'passa/não passa' - ver nota *) os requisitos mínimos do Selo de Usabilidade e Acessibilidade.

Esta informação resulta da computação global da:

- Avaliação Automática <span class="badge text-bg-danger">status: NOK</span>
- Avaliação Manual <span class="badge text-bg-danger">status: NOK</span>
  - Conformidade:
    - Checklist 10 aspetos: 40,9% (9/22) <span class="badge text-bg-danger">status: NOK</span>
    - Checklist Conteúdo: 29,4% (5/17) <span class="badge text-bg-danger">status: NOK</span>
    - Checklist Transação: 75% (6/8) <span class="badge text-bg-success">status: OK</span> 

## Declaração de Acessibilidade <span class="badge text-bg-danger">status: NOK</span>

(...) escreve-se o(s) issue(s) classificados pela label "Declaração" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

## Avaliação automatica <span class="badge text-bg-danger">status: NOK</span>

(...) escreve-se o(s) issue(s) classificados pela label "Auto" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

## Avaliação manual

### Checklist 10 aspetos

Nível de conformidade:

- Checklist 10 aspetos: 40,9% (9/22) <span class="badge text-bg-danger">status: NOK</span>
  - Requisitos OK: 9 (existe 1 Melhoria a implementar)
  - Requisitos NOK: 13
  - Requisitos NA: 2
 
#### Requisito 1.1 - O menu de navegação deve estar estruturado como uma lista de opções. "status: Melhoria"

(...) escreve-se o(s) issue(s) classificados pelas labels "chk10" "R 1.1" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

#### Requisito 1.2 - É possível selecionar as opções e as subopções do menu quer com rato quer com teclado. "status: NOK"

(...) escreve-se o(s) issue(s) classificados pelas labels "chk10" "R 1.1" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

(...) os restantes requisitos da chk10.

### Checklist Conteúdo

Nível de conformidade:

- Checklist Conteúdo: 29,4% (5/12) <span class="badge text-bg-danger">status: NOK</span>
  - Requisitos OK: 5 (existe 1 Melhoria a implementar)
  - Requisitos NOK: 12
  - Requisitos NA: 0

#### Requisito 1.1 - O sítio Web apresenta um resumo breve do seu propósito, visível sem fazer scroll. "status: NOK"

(...) escreve-se o(s) issue(s) classificados pelas labels "conteudo" "R 1.1" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

#### Requisito 1.2 - Os termos mais complexos têm uma definição agregada. "status: Melhoria"

(...) escreve-se o(s) issue(s) classificados pelas labels "conteudo" "R 1.2" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

(...) os restantes requisitos da conteúdo.

### Checklist Transção

Nível de conformidade:

- Checklist Transação: 75,0% (6/8) <span class="badge text-bg-success">status: OK</span>
  - Requisitos OK: 6 (existe 1 Melhoria a implementar)
  - Requisitos NOK: 2
  - Requisitos NA: 5

#### Requisito 2.4 - Campos obrigatórios devem ser claramente indicados como tal. "status: NOK"

(...) escreve-se o(s) issue(s) classificados pela label "transação" "R 2.4" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

#### Requisito 3.1 - Em ações longas, o sistema deve indicar o que está a acontecer. "status: NA"

(...) escreve-se o(s) issue(s) classificados pela label "transação" "R 3.1" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

## Outras violações

(...) escreve-se o(s) issue(s) classificados pela label "outras violações" aqui. O status é-lhe dado pela label "OK", "NOK" e "NA". A computação destes dá o status deste capítulo.

## Notas (apenas para explicar algumas variáveis na construção do relatório) - isto não é para aparecer no relatório

(*) passa, se:

- Avaliação automática OK
  - Avaliação automática OK, se todos os seus issues estão OK ou NA
- Avaliação manual OK
  - Avaliação manual OK, se 10 aspetos OK, Melhoria ou NA, Conteúdo OK, Melhoria ou NA, Transação OK, Melhoria ou NA
    - 10 aspetos OK, se todos os 10 aspetos estão OK, Melhoria ou NA
      - Cada aspeto está OK, se todos os requisitos estão OK ou NA
        - Cada requisito está OK, se todos os issues estão OK ou NA
    - Conteúdo (...)
      - (...)
    - Transação (...)
      - (...)
     
(**) Labels:

- OK - status OK
- Melhoria - status OK, mas pode melhorar
- NOK - status Not OK
- N/A - status Não Aplicável
- chk10 - checklist 10 Aspetos críticos de acessibilidade funcional
- conteúdo - checklist Conteúdo
- transação - checklist Transação
- declaração acessibilidade - permite construir o capítulo "Declaração de acessibilidade e usabilidade"
- outras violações - permite construir o "capítulo "Outras violações"

