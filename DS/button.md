---
title: button
---

[índice](index.md)

## Definição

*Ágora*

> Defines an element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.

## Aspetos de acessibilidade a considerar (síntese)

(...)



## Aspetos de acessibilidade a considerar resultantes das WCAG 2.1 (AA) Quick References

Esta secção contém os **Critérios de Sucesso WCAG 2.1 (AA)** (normativo) aplicáveis a elementos `<button>`. A secção contém também as Técnicas, conhecidas, consideradas Suficientes para satisfazer estes Critérios de Sucesso, bem como as Falhas, conhecidas, que violam estes Critérios de Sucesso.

Configuração do filtro usado em [How to Meet WCAG - Quick Reference](#)

<mark>Selected Filters: WCAG 2.1: success criteria tagged with buttons for levels A and AA and sufficient and failure techniques for the technologies: HTML, CSS, ARIA, Client-side Scripting, and Server-side Scripting.</mark>

Critérios de Sucesso, Técnicas e Falhas descritas especificamente para o elemento ´anchor`:
- x Critérios de Sucesso de nível A
- x Técnicas
- x Falhas

## 1. CS 1.1.1 - Non-text content (Level A)

### Sufficient Techniques

#### Situation A: If a short description can serve the same purpose and present the same information as the non-text content:

1. [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94.html)
    
   Short text alternative techniques for Situation A:
    
   1.   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)    
   2.   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
   3.   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
   4.   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
   5.   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
   6.   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
   7.   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
    8.   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)

#### Situation B: If a short description can not serve the same purpose and present the same information as the non-text content (e.g., a chart or diagram):

1.   [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html)
    
    Short text alternative techniques for Situation B:
    
   1.   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
   2.   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
   3.   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
   4.   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
   5.   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
   6.   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
   7.   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
   8.   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
    
   Long text alternative techniques for Situation B:
    
   1.   [ARIA15: Using aria-describedby to provide descriptions of images](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA15.html)
   2.   [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G73.html)
   3.   [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](https://www.w3.org/WAI/WCAG21/Techniques/general/G74.html)
   4.   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](https://www.w3.org/WAI/WCAG21/Techniques/general/G92.html)
   5.   [H45: Using longdesc](https://www.w3.org/WAI/WCAG21/Techniques/html/H45.html)
   6.   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)

#### Situation C: If non-text content is a control or accepts user input:

1.   [G82: Providing a text alternative that identifies the purpose of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G82.html)
    
   Text alternative techniques for controls and input for Situation C:
    
   1.   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
   2.   [ARIA9: Using aria-labelledby to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9.html)
   3.   [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24.html)
   4.   [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html)
   5.   [H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36.html)
   6.   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html)
   7.   [H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html)

#### Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:

1.   Providing a descriptive label
    
   Short text alternative techniques for Situation D:
    
   1.   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
   2.   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
   3.   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
   4.   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
   5.   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
   6.   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
   7.   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
   8.   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
1.   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
2.   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
3.   [G68: Providing a short text alternative that describes the purpose of live audio-only and live video-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G68.html)
    
   Short text alternative techniques for Situation D:
    
   1.   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
   2.   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
   3.   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
   4.   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
   5.   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
   6.   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
   7.   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
   8.   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
4.   [G100: Providing a short text alternative which is the accepted name or a descriptive name of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G100.html)
    
   Short text alternative techniques for Situation D:
    
   1.   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
   2.   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
   3.   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
   4.   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
   5.   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
   6.   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
   7.   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
   8.   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)

#### Situation E: If non-text content is a CAPTCHA:

1.   [G143: Providing a text alternative that describes the purpose of the CAPTCHA](https://www.w3.org/WAI/WCAG21/Techniques/general/G143.html) **AND** [G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality](https://www.w3.org/WAI/WCAG21/Techniques/general/G144.html)

#### Situation F: If the non-text content should be ignored by assistive technology:

1.   Implementing or marking the non-text content so that it will be ignored by assistive technology
    
   Techniques to indicate that text alternatives are not required for Situation F:
    
   1.   [C9: Using CSS to include decorative images](https://www.w3.org/WAI/WCAG21/Techniques/css/C9.html)
   2.   [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67.html)

#### Failures

1. [xxx](#)
2. [xxx](#)

## Referências

