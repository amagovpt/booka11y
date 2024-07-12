---
title: Como criar tabelas de dados simples acessíveis
---

## Introdução

O elemento `<table>` foi criado originalmente para marcar conteúdos que se apresentam de forma tabular. 

Existem basicamente duas formas de usar o elemento `<table>`: como **tabela-layout** e como **tabela de dados**.

A primeira permite dispôr os diversos elementos que compõem uma página web. Ou seja, passa a ter uma função de permitir aos designers comporem a estrutura de layout das suas páginas web. Hoje em dia a utilização de tabelas-layout é utilizado, seguramente, em mais de 90% das páginas web disponíveis na Internet. Apesar da sua proliferação não deveria ser utilizado e antes substituído por posicionamento dos elementos através de folhas de estilo em cascata.

Na verdade o elemento `<table>`, originalmente, foi criado por Tim Berners-Lee para albergar apenas tabelas de dados. É deste último tipo de utilização do elemento `<table>` que tratamos aqui neste documento.

* * *

### Tabelas de dados

![É visível um conjunto de dados arrumados tabularmente](https://www.acessibilidade.gov.pt/wp-content/uploads/2020/04/4_tabela_dados_1.jpg)

Fig. 1 - Exemplo de uma tabela de dados (versão tabular dos dados).

O elemento `<table>` foi originalmente criado para formatar numa página web dados com representação tabular, como é o caso de dados estatísticos. Encontra-se abaixo um excerto da mesma tabela constante na figura 1 mas linearizada, ou seja tal e qual como ela se apresenta para leitura às tecnologias de apoio, nomeadamente aos leitores de ecrã para pessoas cegas.

Esta tabela corresponde ao censos 2001, no qual se incluiu também um levantamento das pessoas com alguma deficiência e onde se carateriza o tipo de deficiência associada. Será que pela leitura deste extracto nos consegue responder rapidamente à pergunta: **em Portugal continental quantos Homens existem com deficiência visual?**

(6.20) POPULAÇÃO RESIDENTE DEFICIENTE, SEGUNDO O TIPO DE DEFICIÊNCIA E SEXO, POR GRUPO ETÁRIO (PORTUGAL E CONTINENTE) -------------------------------------------------------------------------------- Zona Geográfica Total Auditiva Visual Motora Grupo Etário HM H HM H HM H T: Portugal 636059 334879 84172 43533 163569 77800 156246 88829 De 0 a 4 anos 5262 3032 443 262 827 468 954 541 N1:Continente 613762 323681 81620 42289 158427 75588 150925 85894 De 0 a 4 anos 5001 2894 416 248 788 448 911 515 De 5 a 9 anos 10970 6246 1332 782 3080 1551 1417 831 Fonte: INE, Recenseamento Geral da População e Habitação - 2001 (Resultados Definitivos) --fim

\[object Object\]

(6.20) POPULAÇÃO RESIDENTE DEFICIENTE, SEGUNDO O TIPO DE DEFICIÊNCIA E SEXO, POR GRUPO ETÁRIO (PORTUGAL E CONTINENTE) -------------------------------------------------------------------------------- Zona Geográfica Total Auditiva Visual Motora Grupo Etário HM H HM H HM H T: Portugal 636059 334879 84172 43533 163569 77800 156246 88829 De 0 a 4 anos 5262 3032 443 262 827 468 954 541 N1:Continente 613762 323681 81620 42289 158427 75588 150925 85894 De 0 a 4 anos 5001 2894 416 248 788 448 911 515 De 5 a 9 anos 10970 6246 1332 782 3080 1551 1417 831 Fonte: INE, Recenseamento Geral da População e Habitação - 2001 (Resultados Definitivos) --fim

Figura 2: Exemplo de uma tabela com marcação HTML incorrecta quando linearizada

É quase impossível conseguir decifrar o que quer que seja nesta tabela de dados. Parece quase mentira que o monte de dados resulta da tabela da figura 1.

Pode parecer estranho mas a única justificação para o caos que se constata na figura 2 reside unicamente no facto de a tabela não estar devidamente marcada de acordo com as diretrizes de acessibilidade para o conteúdo da web. Na verdade, a tabela tem como único elemento de marcação o identificador de células de dados `<td>` (Table Data) a servir de contentor para todos os dados que alberga.

Mas, como sabe, nem todas as células de uma tabela são dados. Existem, como é vulgar numa tabela de dados, algumas células que são cabeçalhos. Essa é uma das discriminações que é necessário fazer para a tornar acessível.

* * *

### Como tornar a tabela acessível?

### 1º passo: retirar todos os elementos de estilo que estão inseridos no código HTML

Vamos então desempenar a estrutura da tabela e ver-nos livres de cores, tipos de letra, tamanhos de letra, alinhamentos, separadores (`<span>`) desnecessários, se os houver, dimensionamentos absolutos (definidos em pixeis) das mais diversas células e inclusivamente do próprio elemento definidor da tabela. **É nosso objectivo separar claramente o estilo da estrutura da tabela**.

No final pretendemos que a estrutura fique no HTML e o estilo numa folha de estilo (CSS). Por exemplo, na versão original temos a linha que define a tabela escrita desta forma:

`<table cellSpacing="2px" border="1" width="750px">`

É visível, neste excerto de código, a definição do estilo do contorno (border) da tabela, assim como a definição da largura da tabela em píxeis. Vamos retirá-los por completo. Trataremos de os redefinir, mais tarde, já na folha de estilo.

Passaremos então a ter, simplesmente:

`<table>`

Retirados todos os elementos de estilo da tabela, cada linha da mesma ficará com este aspeto:

`<tr> <td>...</td> ... <td>...</td> </tr>`

Se fizermos esta limpeza para toda a tabela ficamos com algo deste género:

![Tabela de dados com estilo aplicado por defeito](https://www.acessibilidade.gov.pt/wp-content/uploads/2020/04/4_tabela_dados_2.jpg)

\[object Object\]

   
Figura 3: Aspeto visual de uma tabela desprovida de estilo e de marcação de cabeçalhos

### 2º passo: identificar os cabeçalhos

Em termos de estrutura, um dos primeiros passos passa pela identificação das células de cabeçalho o que implica a troca do elemento `<td>` por 

. Mostra-se na figura abaixo, a vermelho, as células candidatas a cabeçalho nesta tabela.

![Tabela de dados: identificação de cabeçalhos](https://www.acessibilidade.gov.pt/wp-content/uploads/2020/04/4_tabela_dados_3.jpg)

\[object Object\]

Figura 4: Células candidatas a cabeçalhos da tabela (encontram-se marcadas a vermelho)

Assim, o código de todas estas células terá o seguinte tratamento:

**Versão original:**

`<td colSpan="2" align="center"><b>Auditiva</b></td></code>`

`   **Versão acessível:**   `

`<code><th colSpan="2">Visual</th>`

Verifique que retirámos o alinhamento ao centro (`align="center"`) e o negrito (`<b>`). Curiosamente, o elemento cabeçalho (`<th>`) tem por defeito este mesmo estilo, ou seja centrado e negrito, pelo que, apesar do emagrecimento do código, não perdemos nada.

Com esta simples identificação de cabeçalhos, será já possível a muitas tecnologias de apoio[1](#nota1 "nota: testes com Excel demonstram melhorias no reconhecimento de uma tabela acessível") conseguirem fazer corresponder de forma correcta os dados existentes nas células de dados (`<td>`) aos respectivos cabeçalhos em coluna e em linha (`<th>`). Numa tabela simples, com uma única linha de cabeçalhos ficariamos por aqui.

Como neste caso estamos perante uma tabela complexa, com 2 linhas de cabeçalhos no topo da tabela e ainda uma coluna de cabeçalhos do lado esquerdo da tabela, temos de identificar explicitamente cada um destes cabeçalhos (dar-lhe um `id`) e associar a cada célula de dados os respectivos cabeçalhos que a contextualizam.

### 3º passo: Atribuir um identificador a cada uma das células cabeçalho

Assim, para atribuir uma identificação a cada cabeçalho (`id`) temos:

`Visual`

### 4º passo: Associar uma célula de dados aos respectivos cabeçalhos

Para fazer a associação a uma determinada célula de dados, temos que identificar quais os cabeçalhos que estão relacionados com uma determinada célula. Por exemplo, visualmente é possível verificar que **163569** é o número de (1) homens e mulheres com (3) deficiência visual existentes na (3) Zona Geográfica, (4) Portugal. Ou seja, temos 4 cabeçalhos associados a um só dado.

Para os associar, teremos que usar o atributo `headers` do elemento `<td>`.

`163569`

Ou seja, teremos a sequência: **Zona Geográfica, T. Portugal, Visual, HM = 163569**

Esta mesma linearização poderá ser obtida para toda uma tabela através da ferramenta on-line do W3C: Tablin. Ver em: [http://www.w3.org/WAI/Resources/Tablin/form](http://www.w3.org/WAI/Resources/Tablin/form).

### 5º passo: adicionar outros elementos de estrutura

#### Utilizar o atributo Summary para dotar a tabela de um sumário

A estrutura `<table>` tem um atributo (`summary`) especificamente para comportar um pequeno sumário. É útil em tabelas complexas, como esta, aproveitar este atributo para clarificar um pouco a forma como os dados se encontram arrumados na tabela.

Note que este atributo geralmente não é visível (pelo menos não localizámos ainda nenhum navegador[2](#nota2) web que o faça), mas é descodificável pelas tecnologias de apoio, como sejam os leitores de ecrã para pessoas cegas.

`<table summary="A tabela contém uma estratificação dos diversos tipos de deficiência por zona geográfica. Em coluna encontrará os tipos de deficiência: Auditiva, Visual e Motora, contendo a primeira coluna o Total. Cada uma das colunas está subdividida entre o total identificada com HM e o número total de homens identificada com H. Em linha temos as diferentes zonas geográficas e os grupos etários."</table>`

#### Marcação das abreviaturas utilizadas nos cabeçalhos

Vamos agora acrescentar ainda um outro elemento de acessibilidade: marcar todas as abreviaturas utilizadas nos cabeçalhos.

`<th id="h21"><abbr title="Homens/Mulheres">HM</abbr></th>   <th id="h22"><abbr title="Homens">H</abbr></th>`

#### Utilizar o elemento <caption> para colocar o título da tabela

Terminamos com algo que deveriamos marcar no início, ou seja, indicar qual é o título da tabela. Este elemento é colocado em `<caption>`.

`<table summary="A tabela contém 5 colunas assim referenciadas: Zona Geográfica, Total, Auditiva, Visual, Motora. Em linha estão dispostos os Grupos etários. As células são compostas pelo total da população deficiente estratificada de acordo com o título desta tabela.">   <caption>População residente deficiente, segundo o tipo de deficiência e sexo, por grupo etário (Portugal)</caption>   <tr> ...`

#### 6º passo: Acrescentar o estilo numa folha de estilo

Se juntarmos agora a parte das "pinturas", tipos de letra e alinhamentos, dimensionamento dos elementos, chegamos a uma tabela estruturada com um estilo exactamente igual ao original.

De notar que o código da tabela emagreceu cerca de 1/3 face ao original. Os estilos a incorporar na folha de estilo são:

`.tabela table {   cellspacing:3px;   width:75%;   font-family:Verdana, Arial, Helvetica, sans-serif; }`

De notar que a largura da tabela (`width`) foi definida em valores relativos (75%). Ou seja, a tabela tem a largura correspondente a 75% da largura do ecrã, independentemnte da dimensão do ecrã ou da resolução que estamos a usar.

`.tabela table caption {font-size:120%; text-align:right; }   .tabela table td {background-color: #33FFFF}   .tabela table th {background-color: #FF9900;}   .tabela td {text-align: right;}`

E eis o resultado final: igual ao inicial.

![Tabela de dados final: com estrutura e estilo separados](https://www.acessibilidade.gov.pt/wp-content/uploads/2020/04/4_tabela_dados_1-1.jpg)

Figura 5: Tabela final com a estrutura marcada.

Verifica-se que a tabela é exactamente igual, visualmente, à da figura 1. No entanto, do ponto de vista estrutural é radicalmente diferente.

\--

(1) Verifica-se que ao estruturar uma tabela de acordo com as diretrizes de acessibilidade é possível fazer copy / paste de uma tabela em HTML diretamente para Excel e este efectuar o reconhecimento da estrutura automaticamente, arrumando todos os dados no sítio certo. O mesmo sucede se transformarmos a tabela HTML em PDF e posteriormente a copiarmos para o Excel. **Nenhuma destas transformações harmoniosas acontece se a marcação da tabela não seguir as regras de acessibilidade!** \[[voltar ao texto (nota 1)](#nota1back)\]

(2) O Mozila Firefox permite navegar pela estrutura da tabela revelando nesta função elementos como o `caption` e o atributo `summary`.\[[voltar ao texto (nota 2)](#nota2back)\]
