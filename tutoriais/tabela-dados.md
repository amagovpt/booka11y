
# O Elemento `<table>` em HTML: Guia e Cuidados com Acessibilidade

O elemento `<table>` em HTML é utilizado para apresentar dados tabulares de forma estruturada, facilitando a organização e a compreensão das informações. Embora seja uma ferramenta poderosa para exibir dados, é essencial garantir que as tabelas sejam acessíveis a todos os utilizadores, incluindo os que utilizam tecnologias de apoio. Este artigo aborda a história do elemento `<table>`, o seu uso e as práticas recomendadas para assegurar a conformidade com as Diretrizes de Acessibilidade para Conteúdo Web (WCAG).

## A História do Elemento `<table>`

O elemento `<table>` foi introduzido em 1993 por _Dave Raggett_ num rascunho para HTML+, o qual evoluiu para HTML 3.0. A especificação oficial que incorporou o `<table>` foi publicada em janeiro de 1997 como parte do HTML 3.2 pelo _World Wide Web Consortium (W3C)_.

## Estrutura Básica de uma Tabela HTML

Uma tabela HTML básica é construída com os seguintes elementos:

- `<table>`: Define o início e o fim da tabela.
- `<tr>`: Define uma linha da tabela.
- `<th>`: Define uma célula de cabeçalho (_header_).
- `<td>`: Define uma célula de dados.

Exemplo de uma tabela simples:

```html
<table>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
    <th>Cidade</th>
  </tr>
  <tr>
    <td>João</td>
    <td>30</td>
    <td>Lisboa</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>25</td>
    <td>Porto</td>
  </tr>
</table>
```

## Cuidados com Acessibilidade (WCAG)

Para garantir que uma tabela HTML seja acessível, é necessário seguir várias práticas recomendadas conforme as Diretrizes de Acessibilidade para Conteúdo Web (WCAG). Aqui estão alguns cuidados essenciais:

1. **Uso de Cabeçalhos (`<th>`)**:
   - Utilize o elemento `<th>` para definir cabeçalhos de colunas e linhas. Os cabeçalhos ajudam os leitores de ecrã a identificar a estrutura da tabela e a relação entre os dados.
   - Use o atributo `scope` para especificar se o cabeçalho se aplica a uma linha (`row`), coluna (`col`), grupo de linhas (`rowgroup`) ou grupo de colunas (`colgroup`).

   ```html
   <th scope="col">Nome</th>
   ```

2. **O atributo `summary` e o elemento `caption`**:
   - Embora o atributo `summary` esteja obsoleto em HTML5, ele ainda pode ser útil para descrever a finalidade e a estrutura da tabela para utilizadores de leitores de ecrã. Tente, sempre que possível descrever a finalidade - os aspetos a sublinhar que devem ser retirados da leitura da tabela - no próprio texto que acompanha a tabela. Use o elemento `<caption>` para fornecer um título visível da tabela.

   ```html
   <table>
     <caption>Dados de clientes</caption>
     ...
   </table>
   ```

3. **Associação de Células de Dados e Cabeçalhos**:
   - Para tabelas complexas, use os atributos `headers` e `id` para associar células de dados (`<td>`) a cabeçalhos específicos (`<th>`).

   ```html
   <table>
     <tr>
       <th id="name">Nome</th>
       <th id="age">Idade</th>
       <th id="city">Cidade</th>
     </tr>
     <tr>
       <td headers="name">João</td>
       <td headers="age">30</td>
       <td headers="city">Lisboa</td>
     </tr>
   </table>
   ```

4. **Evitar o Uso de Tabelas para Layout**:
   - As tabelas devem ser usadas exclusivamente para dados tabulares. Usar tabelas para controlar o layout da página pode causar confusão para quem usa tecnologias de apoio. Um dos problemas típicos do uso das tabelas layout é a apresentação da informação, quando linearizada, ficar fora de ordem e tornar praticamente impossível a leitura da página. Sempre que possível, não use o elemento `<table>` para controlar o layout da página.

5. **Contraste de Cores e Tamanho de Fonte**:
   - Assegure-se de que há contraste suficiente (4,5 para 1) entre o texto e o fundo da tabela para que seja legível para pessoas com deficiências visuais. O tamanho da fonte deve ser adequado para facilitar a leitura - os requisitos do [Selo de Usabilidade e Acessibilidade](https://selo.usabilidade.gov.pt/requisitos/conteudo/#n21) recomendam um tamanho não inferior a 12pt.

6. **Teste com Tecnologias de Apoio**:
   - Utilize leitores de ecrã e outras tecnologias de apoio para testar a acessibilidade da tabela. Ferramentas como o NVDA (<em lang="en">NonVisual Desktop Access</em>) e o JAWS (<em lang="en">Job Access With Speech</em>) podem ajudar a identificar problemas de acessibilidade.
   - Também pode usar ferramentas de inspeção de práticas de acessibilidade como é o caso do ANDI (<em lang="en">Accessible Name and Description Inspector</em>) ([consultar a página do ANDI](https://www.ssa.gov/accessibility/andi/help/install.html))

## Conclusão

Garantir que as tabelas HTML sejam acessíveis é uma parte crucial do desenvolvimento web inclusivo. Seguir as diretrizes WCAG e adotar as melhores práticas mencionadas acima ajudará a criar uma experiência web mais acessível para todos os utilizadores. Ao prestar atenção aos detalhes de acessibilidade, você contribui para uma internet mais inclusiva e utilizável por todos.
