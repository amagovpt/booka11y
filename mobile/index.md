# Checklist de Acessibilidade para aplicações móveis

## Design para ecrãs pequenos

A experiência móvel introduz ecrãs muito mais pequenos do que os dos computadores de secretária ou os dos computadores portáteis. Porque os utilizadores dos dispositivos móveis lêem e interagem com conteúdo num ecrã de espaço limitado, a informação precisa de ser apresentada cuidadosamente e toda a interatividade deve ter particular atenção às reduzidas dimensões dos alvos de toque.

- [ ] Quantidade de conteúdo exibida de cada vez razoável
- [ ] Botões e controlos suficientemente grandes para serem vistos e selecionados pelo toque
- [ ] Botões e controlos com espaço envolvente inativo suficiente para evitar a seleção por engano dos controlos vizinhos
- [ ] Campos de formulário posicionados abaixo dos seus rótulos

## Simplificar gestos e fornecer opções

Normalmente os dispositivos móveis são ocntrolados por gestos, tais como deslizes direcionais ou toques singulares efetuados com os dedos. No entanto, os gestos disponíveis por defeito não funcionam para todas as pessoas. Gestos complexos, como sejam os gestos para desenhar formas, que obrigam a usar vários dedos ou a efetuar múltiplos toques, são difíceis, ou mesmo impossíveis, de compreender ou executar por algumas pessoas. Por isso, é importante que os gestos móveis sejam acompanhados por opções mais tradicionais e não interfiram com a tecnologia de apoio ou com os métodos alternativos de controlo.

- [ ] Controlos de toque são ativados após deixar de exercer pressão (_up event_) e não após o toque inicial (_down event_)
- [ ] Funcionalidades ativadas através do movimento, inclinação, ou do sacudir físico do dispositivo podem ser desativadas
- [ ] Funcionalidades ativadas através do movimento físico do dispositivo podem ser operadas através de componentes de interface
- [ ] Multipoint or path-based gestures have single-pointer or non-path-based options
- [ ] Para gestos multiponto ou baseados num caminho, existem opções baseadas num só ponto e não baseadas num caminho

## Provide indicators for gestures and actions

Gestures aren’t always intuitive, especially when they different from app to app, just as it is not always obvious to everyone what actions are available to take at a given time.
Os gestos nem sempre são intuitivos, especialmente quando são diferentes de aplicação para aplicação, assim como também nem sempre é óbvio para todos os utilizadores quais são as ações que estão disponíveis.

So that users don’t unintentionally do things like open a menu they didn’t mean to or lose their place in a process, always strive to show context and instructions for how exactly to operate a mobile website or app.

- [ ] On-screen indicators and accessible text show how to use gestures
- [ ] On-screen indicators and accessible text show that elements are actionable
- [ ] Actionable elements are grouped intuitively
- [ ] Clear, text-based instructions are provided for complex interaction
