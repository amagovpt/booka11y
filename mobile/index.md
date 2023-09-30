# Checklist de Acessibilidade para aplicações móveis

## Design para ecrãs pequenos

A experiência móvel introduz ecrãs muito mais pequenos do que os dos computadores de secretária ou os dos computadores portáteis. Porque os utilizadores dos dispositivos móveis lêem e interagem com conteúdo num ecrã de espaço limitado, a informação precisa de ser apresentada cuidadosamente e toda a interatividade deve ter particular atenção às reduzidas dimensões dos alvos de toque.

- [ ] Quantidade de conteúdo exibida de cada vez razoável
- [ ] Botões e controlos suficientemente grandes para serem vistos e selecionados pelo toque
- [ ] Botões e controlos com espaço envolvente inativo suficiente para evitar a seleção por engano dos controlos vizinhos
- [ ] Campos de formulário posicionados abaixo dos seus rótulos

## Simplificar gestos e fornecer opções

Gestures, such as directional swipes or singular taps, are how mobile devices are typically controlled; however, default gestures do not work for everyone. Complex gestures, like drawing shapes, using multiple fingers, or tapping numerous times are difficult or impossible for some people to understand or perform. Therefore, it’s important that mobile gestures are accompanied by more-traditional options and do not interfere with assistive technology or alternate control methods.

- [ ] Touch controls activate upon release (up event), not initial touch (down event)
- [ ] Functionality triggered by shaking, tilting, or moving the device can be disabled
- [ ] Functionality triggered by device motion can be operated by more typical interface components
- [ ] Multipoint or path-based gestures have single-pointer or non-path-based options
