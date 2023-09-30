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

## Disponibilize instruções e contexto para gestos e ações

Os gestos nem sempre são intuitivos, especialmente quando são diferentes de aplicação para aplicação, assim como nem sempre é óbvio para todos os utilizadores quais são as ações que estão disponíveis num determinado momento.

Para que os utilizadores não façam involuntariamente coisas como abrir um menu que não queriam ou perder o seu lugar num processo, é sempre importante disponibilizar contexto e instruções de como prosseguir num sítio Web ou aplicação móvel.

- Indicadores no ecra e texto acessível mostram quais são os gestos disponíveis e como se usam
- Indicadores no ecrã e texto acessível mostram que esses elementos são ativavéis       
- Elementos ativáveis estão agrupados intuitivamente
- Existem instruções claras, em texto, para interações complexas

## Allow multiple methods for input and data entry

One of the most distinctive features of smartphones and mobile devices is touchscreen capability; however, not everyone can make equal use of navigating and providing input by precise touch gestures. Content must also not be built in a way that prevents other operational or input methods, beyond touch. Supporting alternative input devices, like external keyboards, pointers, and other accessible options makes your mobile content more usable to people who have difficulty using touchscreens.

- Virtual keyboard is set to the required type of data entry
- Methods for data entry are simple and predictable
- Keyboards and other input devices are supported for touchscreen content
