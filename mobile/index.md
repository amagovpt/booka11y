---
title: Checklist de Acessibilidade para aplicações móveis
layout: post
categories: checklist apps
---

## Crie <em lang="en">designs</em> para ecrãs de dimensão reduzida

Na experiência com dispositivos móveis os ecrãs são, em regra, muito mais pequenos do que nos computadores de secretária ou mesmo nos portáteis. A leitura e a interação num ecrã de dimensão reduzida obriga a que a informação seja apresentada de forma mais concisa e, para o caso da interação, esta deva ser construída dando particular atenção às dimensões reduzidas  dos alvos de toque.

- Quantidade de conteúdo exibida de cada vez razoável
- Botões e controlos suficientemente grandes para serem percecionados pela visão e selecionáveis pelo toque
- Botões e controlos com espaço envolvente inativo suficiente para evitar a seleção por engano dos controlos vizinhos
- Campos de formulário posicionados abaixo dos seus rótulos

## Crie gestos simples e disponibilize opções acessíveis

Normalmente os dispositivos móveis são controlados por gestos, tais como passar um ou mais dedos em várias direções ou dar um ou mais toques com um ou mais dedos. No entanto, os gestos disponíveis por defeito nos dispositivos não funcionam para todas as pessoas. Gestos complexos, como sejam os gestos para desenhar formas, que obrigam a usar vários dedos ou a efetuar múltiplos toques, são difíceis, ou mesmo impossíveis, de compreender ou executar por alguns utilizadores. Por isso, é importante que os gestos sejam sempre acompanhados por opções alternativas que permitam o controlo via tecnologias de apoio ou que respondam aos diferentes métodos de controlo alternativos.

- Controlos de toque são ativados após deixar de exercer pressão (_up event_) e não após o toque inicial (_down event_)
- Funcionalidades ativadas através do movimento, inclinação, ou do sacudir físico do dispositivo podem ser desativadas
- Funcionalidades ativadas através do movimento físico do dispositivo podem ser operadas através de componentes de interface
- Gestos Multiponto (uso simultâneo de vários dedos) ou gestos baseados no desenho de uma trajetória estão também disponíveis com gestos que fazem uso do toque de um só ponto ou que não obrigam a desenhar uma trajetória

## Forneça indicações para gestos e ações

Os gestos nem sempre são intuitivos, especialmente quando fogem do padrão regular ou correspondem a padrões pouco utilizados. Algo semelhante acontece com as ações disponíveis num determinado momento - nem sempre é óbvio para todos os utilizadores que ações estão disponíveis e que decisão tomar.

Para que os utilizadores não façam involuntariamente coisas como abrir um menu que não queriam ou sair de um processo que desejavam continuar, é importante fornecer contexto e instruções de como prosseguir num dado ponto de um sítio Web ou de uma aplicação móvel.

- Indicações no ecra e texto acessível mostram quais são os gestos disponíveis e como se usam
- Indicações no ecrã e texto acessível mostram que esses elementos são ativavéis       
- Elementos ativáveis estão agrupados intuitivamente
- Estão disponíveis instruções claras, em texto, para interações complexas

## Permita o uso de múltiplos métodos de entrada e inserção de dados

Uma das caraterísticas mais distintivas dos dispositivos móveis é a existência de um ecrã sensível ao toque. No entanto, nem todos podem navegar ou inserir dados através de gestos ou toques precisos no ecrã. O conteúdo não deve impedir o uso de outros métodos de operar a interface ou de inserir dados que existem para além do toque no ecrã. É importante que os métodos de operação e inserção de dados disponíveis suportem dispositivos de entrada alternativos, como sejam os teclados externos, dispositivos apontadores, manipulos e outras opções acessíveis. A diversidade dos métodos de operação e inserção torna o conteúdo móvel mais acessível e utilizável a pessoas que têm dificuldade em usar ecrãs sensíveis ao toque.

- Teclado virtual definido para o tipo de entrada de dados
- Métodos de entrada de dados simples e previsíveis
- Suporte a teclados e outros dispositivos de entrada, alternativos ao ecrã sensível ao toque

## Ative a ampliação e o redimensionamento do tamanho do texto

O tamanho reduzido do ecrã dos dispositivos móveis e a preferência de algumas pessoas em aumentar o tamanho do conteúdo tornam vital que os programadores e designers garantam que o conteúdo funcione como esperado, mesmo quando ampliado ou redimensionado. Práticas de design responsivo permitem que o conteúdo ajuste o seu tamanho e posicionamento com base nas especificações do dispositivo ou software e nas configurações do utilizador. A existência de opções na página para efetuar configurações como o redimensionamento de texto podem ser úteis para aumentar a facilidade de uso.

- No mínimo é possível aumentar o tamanho do texto em 200% sem a utilização de tecnologias de apoio 
- Quando ampliado o conteúdo apresenta-se sem perder informações ou funções
- Quando ampliado o conteúdo não obriga a efetuar varrimentos horizontais para ser lido
- A funcionalidade _pinch-to-zoom_ do Navegador Web não está bloqueado

## Certifique-se que a orientação e o layout não limitam o uso

Algumas experiências móveis são concebidas de origem para visualizações espcíficas em modo retrato ou paisagem, no entanto há pessoas que precisam ou preferem ter a opção de troca entre modos de visualização retrato/paisagem sempre ativo ou que usam sempre um dos modos. Para além disso, todos os utilizadores dizem que os sítios Web ou as aplicações móveis são mais fáceis de utilizar quando as suas páginas se apresentam com padrões esperados e se apresentam de forma consistente entre páginas e funções.

- A orientação do ecrã pode ser alterado entre modo retrato e modo paisagem
- O layout da página é consistente e previsível

## Faça com que a estrutura e a navegação estejam disponíveis para todos os utilizadores

Mesmo que a regra seja a de mostrar quantidades mais pequenas de conteúdo de uma só vez, a organização e a etiquetagem adequadas dos conteúdos em dispositivos móveis revelam-se tão importantes quanto na experiência em computador. Todas as páginas e conteúdos precisam de ser intuitivamente navegáveis através da visão ou através de qualquer tecnologia de apoio utilizada, como seja um leitor de ecrã. Construir páginas fáceis de pesquisar, com funcionalidades fáceis de compreender e assegurar que a experiência se encontra otimizada para qualquer pessoa independentemente da forma como o vão usar.

- As páginas têm títulos descritivos
- Os títulos encontram-se hierarquicamente aninhados, numa ordem de leitura apropriada e ao alcance das tecnologias de apoio
- Os menus, controlos e hiperligações funcionam quer através do toque no ecrã quer através do teclado
- Usando tecnologias de apoio ou não, os menus, controlos e hiperligações apresentam-se sempre claramente etiquetados

## Forneça alternativas em texto para os gráficos e a multimédia

Tal como num sítio Web, ou em qualquer outra plataforma digital, a disponibilização de alternativas em texto é crítico. Esta técnica permite que os utilizadores de tecnologias de apoio, ou todos aqueles que tenham conexões lentas à Internet, ou outros aceder à informação ou ao significado transmitido por uma imagem, um gráfico, ou outro conteúdo não texto. A única exeção vai para a imagens consideradas puramente decorativas, que não transmitem quaisquer informações, ou quando o conteúdo já se encontra em texto num local fácil de encontrar.

- Conteúdo gráfico tem um alternativo em texto acessível
- Vídeos contêm legendas sincronizadas e sem erros
- Vídeos contêm transcrições em texto e, se necessário, áudiodescrições
- Texto e não imagens de texto é usado sempre que possível

## Utilize a cor de modo efetivo

As cores são importantes elementos de personalização de marcas e interfaces. É importante esforçarmo-nos sempre por usar a cor de forma criativa, mas efetiva e que funcione para vários utilizadores. Na verdade, existem apenas duas importantes considerações de acessibilidade a ter em conta: usar um contraste suficiente e evitar a cor como única pista visual para transmitir informações importantes. Embora o uso adequado de cores seja igualmente importante em dispositivos desktop e laptop, nos dispositivos móveis o uso da cor torna-se ainda mais crítico, pela sua utilização nos mais variados ambientes, com diferentes condições de luminosidade, onde se torna mais difícil ler o ecrã. Assim, bons contrastes e a não utilização da cor por si só como forma de transmitir informação, não são críticos apenas para as pessoas com daltonismo ou com baixa visão, mas para quase todos.

- O texto normal apresenta-se com um rácio de contraste de, no mínimo, 4.5 para 1
- O texto grande apresenta-se com um rácio de contraste de, no mínimo, 3 para 1
- As componentes de interface e as componentes gráficas apresentam-se com um rácio de contraste de, no mínimo, 3 para 1
- Informação ou significado (por exemplo um erro) não é veiculado apenas pela cor

## Referências

Bureau of Internet Accessibility. (2021). [The definitive mobile accessibility checklist: Open your mobile website and apps to a wider audience](https://www.boia.org/definitive-mobile-accessibility-checklist). Estados Unidos da América: [BOIA](https://www.boia.org).
