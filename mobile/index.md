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

The smaller screen size of mobile devices and some people’s preference to increase the size of content make it vital for developers and designers to ensure content works as expected, even when magnified or resized. Responsive design practices enable content to adjust its size and positioning based on device or software specifications and user settings. On-page options for settings like text resizing can be helpful for increasing user-friendliness.

- Text can be resized at least 200% without using assistive technology
- Content is presented without loss of information or function when magnified
- Content does not require scrolling in two directions when magnified
- Browser’s pinch-to-zoom is not blocked

