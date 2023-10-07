# Checklist de Acessibilidade para aplicações móveis

## Design para ecrãs pequenos

A experiência móvel introduz ecrãs muito mais pequenos do que os dos computadores de secretária ou os dos computadores portáteis. Porque os utilizadores dos dispositivos móveis lêem e interagem com conteúdo num ecrã de espaço limitado, a informação precisa de ser apresentada cuidadosamente e toda a interatividade deve ter particular atenção às reduzidas dimensões dos alvos de toque.

- Quantidade de conteúdo exibida de cada vez razoável
- Botões e controlos suficientemente grandes para serem vistos e selecionados pelo toque
- Botões e controlos com espaço envolvente inativo suficiente para evitar a seleção por engano dos controlos vizinhos
- Campos de formulário posicionados abaixo dos seus rótulos

## Simplificar gestos e fornecer opções

Normalmente os dispositivos móveis são ocntrolados por gestos, tais como deslizes direcionais ou toques singulares efetuados com os dedos. No entanto, os gestos disponíveis por defeito não funcionam para todas as pessoas. Gestos complexos, como sejam os gestos para desenhar formas, que obrigam a usar vários dedos ou a efetuar múltiplos toques, são difíceis, ou mesmo impossíveis, de compreender ou executar por algumas pessoas. Por isso, é importante que os gestos móveis sejam acompanhados por opções mais tradicionais e não interfiram com a tecnologia de apoio ou com os métodos alternativos de controlo.

- Controlos de toque são ativados após deixar de exercer pressão (_up event_) e não após o toque inicial (_down event_)
- Funcionalidades ativadas através do movimento, inclinação, ou do sacudir físico do dispositivo podem ser desativadas
- Funcionalidades ativadas através do movimento físico do dispositivo podem ser operadas através de componentes de interface
- Multipoint or path-based gestures have single-pointer or non-path-based options
- Para gestos multiponto ou baseados num caminho, existem opções baseadas num só ponto e não baseadas num caminho

## Disponibilizar instruções e contexto para gestos e ações

Os gestos nem sempre são intuitivos, especialmente quando são diferentes de aplicação para aplicação, assim como nem sempre é óbvio para todos os utilizadores quais são as ações que estão disponíveis num determinado momento.

Para que os utilizadores não façam involuntariamente coisas como abrir um menu que não queriam ou perder o seu lugar num processo, é sempre importante disponibilizar contexto e instruções de como prosseguir num sítio Web ou aplicação móvel.

- Indicadores no ecra e texto acessível mostram quais são os gestos disponíveis e como se usam
- Indicadores no ecrã e texto acessível mostram que esses elementos são ativavéis       
- Elementos ativáveis estão agrupados intuitivamente
- Existem instruções claras, em texto, para interações complexas

## Variedade de métodos de operação e inserção de dados

Uma das caraterísticas mais distintivas dos dispositivos móveis é a existência de um ecrã sensível ao toque. No entanto, nem todos podem navegar ou inserir dados através de gestos ou toques precisos no ecrã. O conteúdo não deve impedir o uso de outros métodos de operar a interface ou de inserir dados que existem para além do toque no ecrã. É importante que os métodos de operação e inserção disponíveis suportem dispositivos de entrada alternativos, como sejam os teclados externos, dispositivos apontadores, manipulos e outras opções acessíveis. A diversidade dos métodos de operação e inserção torna o conteúdo móvel mais acessível e utilizável a pessoas que têm dificuldade em usar ecrãs sensíveis ao toque.

- Teclado virtual definido para o tipo de entrada de dados
- Métodos de entrada de dados simples e previsíveis
- Suporte a teclados e outros dispositivos de entrada, alternativos ao ecrã sensível ao toque

## Ampliação e alteração de tamanho do texto

O tamanho reduzido do ecrã dos dispositivos móveis e a preferência de algumas pessoas em aumentar o tamanho do conteúdo tornam vital que os programadores e designers garantam que o conteúdo funcione como esperado, mesmo quando ampliado ou redimensionado. Práticas de design responsivo permitem que o conteúdo ajuste o seu tamanho e posicionamento com base nas especificações do dispositivo ou software e nas configurações do utilizador. A existência de opções na página para efetuar configurações como o redimensionamento de texto podem ser úteis para aumentar a facilidade de uso.

- No mínimo é possível aumentar o tamanho do texto em 200% sem a utilização de tecnologias de apoio 
- Quando ampliado o conteúdo apresenta-se sem perder informações ou funções
- Quando ampliado o conteúdo não obriga a efetuar varrimentos horizontais para ser lido
- A funcionalidade _pinch-to-zoom_ do Navegador Web não está bloqueado

## Orientação e layout não limitam utilização

Algumas experiências móveis são concebidas de origem para visualizações espcíficas em modo retrato ou paisagem, no entanto há pessoas que precisam ou preferem ter a opção de troca entre modos de visualização retrato/paisagem sempre ativo ou que usam sempre um dos modos. Para além disso, todos os utilizadores dizem que os sítios Web ou as aplicações móveis são mais fáceis de utilizar quando as suas páginas se apresentam com padrões esperados e se apresentam de forma consistente entre páginas e funções.

- A orientação do ecrã pode ser alterado entre modo retrato e modo paisagem
- O layout da página é consistente e previsível

## Make structure and navigation available to all users

Even though less content may be shown at one time, proper organization and labelling of mobile content is equally important as it is in the desktop experience. All content and pages need to be intuitively navigable visually and with any assistive technology that might be used, like a screen reader. Make pages easy to find, make controls easy to understand, and make sure the experience is optimized for everyone, no matter how they consume the material.

- Pages have descriptive titles
- Headings are properly-nested, in an appropriate reading order, and available to assistive technology
- Menus, controls, and links work with touch and keyboard
- Menus, controls, and links are clearly labelled, with and without assistive technology
