---
title: ARIA17 Usando funções de agrupamento para identificar controles de formulário relacionados
---

## Procedimentos de teste

Para grupos de controles relacionados em que os rótulos individuais de cada controle não fornecem uma descrição suficiente e é necessária uma descrição adicional em nível de grupo:
1. Verifique se o grupo de elementos de entrada ou seleção logicamente relacionados está contido em um elemento com <code>role=group</code>.
2. Verifique se este grupo possui um nome acessível definido usando <code>aria-label</code> ou <code>aria-labelledby</code>.


## Resultados esperados
#1 e #2 são verdadeiros.

### Referências

W3C/WAI (2024). [Technique ARIA17: Using grouping roles to identify related form controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17). Developed by Accessibility Guidelines Working Group (AG WG) Participants. Updated 04 April 2024.