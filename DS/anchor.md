---
title: anchor
---

[índice](/DS/)

## Definição

*Ágora*

> Element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

## Aspetos de acessibilidade a considerar (síntese)

(...)



## Aspetos de acessibilidade a considerar resultantes das WCAG 2.1 (AA) Quick References

Esta secção contém os **Critérios de Sucesso WCAG 2.1 (AA)** (normativo) aplicáveis a elementos `anchors` / `link`. A secção contém também as Técnicas, conhecidas, consideradas Suficientes para satisfazer estes Critérios de Sucesso, bem como as Falhas, conhecidas, que violam estes Critérios de Sucesso.

Configuração do filtro usado em [How to Meet WCAG - Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&tags=links&levels=aaa&techniques=advisory&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=141%2C211%2C243%2C244%2C253)

<mark>Selected Filters: WCAG 2.1: success criteria tagged with links for levels A and AA and sufficient and failure techniques for the technologies: HTML, CSS, ARIA, Client-side Scripting, and Server-side Scripting.</mark>

Critérios de Sucesso, Técnicas e Falhas descritas especificamente para o elemento ´anchor`:
- 5 Critérios de Sucesso de nível A
- 34 Técnicas
- 11 Falhas

**Coisas que eu não sabia:**

Por exemplo, de acordo com F96, construções deste tipo `<a href="abc.html" aria-label="início">Home</a>` provocam a falha do Critério de Sucesso 2.5.4, o qual é um requisito de nível 'A', ou seja fundamental para alguns utilizadores, violando o princípio de acessibilidade "Operável". 

Talvez a introdução de _personas_ facilite a compreensão das construções:

> The objective of this Failure is to describe situations where speech input users cannot reliably speak the name of a control because it differs from the visible label.

> When speech input users interact with a web page, they usually speak a command followed by the reference to some visible label (like the text in a button or a link, or the text labelling some input). If the visible label does not match the accessible name of the control, speech users may be unable to directly activate that control.



### 1. CS 1.4.1 - Use of Color (Level A)
#### Sufficient Techniques
##### Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:

1. [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/WAI/WCAG21/Techniques/general/G14.html)
2. [G205: Including a text cue for colored form control labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G205.html)
3. [G182: Ensuring that additional visual cues are available when text color differences are used to convey information](https://www.w3.org/WAI/WCAG21/Techniques/general/G182.html)
4. [*G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them*](https://www.w3.org/WAI/WCAG21/Techniques/general/G183.html)

##### Situation B: If color is used within an image to convey information:

1. [G111: Using color and pattern](https://www.w3.org/WAI/WCAG21/Techniques/general/G111.html)
2. [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/WAI/WCAG21/Techniques/general/G14.html)

#### Failures

1. [F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image](https://www.w3.org/WAI/WCAG21/Techniques/failures/F13.html)
2. [*F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision*](https://www.w3.org/WAI/WCAG21/Techniques/failures/F73.html)
3. [F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only](https://www.w3.org/WAI/WCAG21/Techniques/failures/F81.html)

### 2. CS 2.1.1 Keyboard (Level A)

#### Sufficient Techniques

1. [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202.html)
2. Ensuring keyboard control by using one of the following techniques:
   1. [*H91: Using HTML form controls and links*](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html)
3. [G90: Providing keyboard-triggered event handlers](https://www.w3.org/WAI/WCAG21/Techniques/general/G90.html)   
   1. [SCR20: Using both keyboard and other device-specific functions](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR20.html)
   2. [SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR35.html)
   3. [SCR2: Using redundant keyboard and mouse event handlers](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR2.html)

#### Failures

1. [F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function](https://www.w3.org/WAI/WCAG21/Techniques/failures/F54.html)
2. [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html)
3. [*F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links*](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html)

### 3. CS 2.4.3 Focus Order (Level A)

#### Sufficient Techniques

1. [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G59.html)
2. Giving focus to elements in an order that follows sequences and relationships within the content using one of the following techniques:
   1. [*H4: Creating a logical tab order through links, form controls, and objects*](https://www.w3.org/WAI/WCAG21/Techniques/html/H4.html)
   2. [C27: Making the DOM order match the visual order](https://www.w3.org/WAI/WCAG21/Techniques/css/C27.html)
3. Changing a Web page dynamically using one of the following techniques:
    1. [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26.html)
    2. [SCR37: Creating Custom Dialogs in a Device Independent Way](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR37.html)
    3. [SCR27: Reordering page sections using the Document Object Model](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR27.html)
  
#### Failures

1. [F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability](https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html)
2. [F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order](https://www.w3.org/WAI/WCAG21/Techniques/failures/F85.html)

### 4. *SC 2.4.4 Link Purpose (In Context) (Level A)*

#### Sufficient Techniques

1. [*G91: Providing link text that describes the purpose of a link*](https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html)
2. [*H30: Providing link text that describes the purpose of a link for anchor elements*](https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html)
3. [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24.html)
4. *Allowing the user to choose short or long link text using one of the techniques below:*
   1. [*G189: Providing a control near the beginning of the Web page that changes the link text*](https://www.w3.org/WAI/WCAG21/Techniques/general/G189.html)
   2. [*SCR30: Using scripts to change the link text*](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR30.html)
5. [*G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence*](https://www.w3.org/WAI/WCAG21/Techniques/general/G53.html)
6. *Providing a supplemental description of the purpose of a link using one of the following techniques:*
   1. [*H33: Supplementing link text with the title attribute*](https://www.w3.org/WAI/WCAG21/Techniques/html/H33.html)
   2. [*C7: Using CSS to hide a portion of the link text*](https://www.w3.org/WAI/WCAG21/Techniques/css/C7.html)
7. *Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques:*
   1. [*ARIA7: Using aria-labelledby for link purpose*](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7.html)
   2. [*H77: Identifying the purpose of a link using link text combined with its enclosing list item*](https://www.w3.org/WAI/WCAG21/Techniques/html/H77.html)
   3. [*H78: Identifying the purpose of a link using link text combined with its enclosing paragraph*](https://www.w3.org/WAI/WCAG21/Techniques/html/H78.html)
   4. [*H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells*](https://www.w3.org/WAI/WCAG21/Techniques/html/H79.html)
   5. [*H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested*](https://www.w3.org/WAI/WCAG21/Techniques/html/H81.html)
8. [*G91: Providing link text that describes the purpose of a link*](https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html)
  
### Failures

1. [*F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link*](https://www.w3.org/WAI/WCAG21/Techniques/failures/F63.html)
2. [*F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link*](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html)

### 5. SC 2.5.3 Label in Name (Level A)

#### Sufficient Techniques

1. [G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html)
2. [G211: Matching the accessible name to the visible label](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html)

#### Failures

1. [F96: Failure due to the accessible name not containing the visible label text](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96.html)
2. @@ Accessible name contains the visible label text, but the words of the visible label are not in the same order as they are in the visible label text
3. @@ Accessible name contains the visible label text, but one or more other words are interspersed in the label

## Referências

