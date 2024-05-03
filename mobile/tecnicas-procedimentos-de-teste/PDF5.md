---
title: PDF5 Indicando controles de formulário obrigatórios em formulários PDF
---

## Procedimentos de teste

Para cada campo de formulário obrigatório, verifique se as informações e instruções de validação são fornecidas aplicando o seguinte:
1. Verifique se o status necessário está indicado no rótulo do controle de formulário.
2. Deixe o campo em branco e envie o formulário. Verifique se um alerta descrevendo o erro é fornecido.
3. Utilize uma ferramenta que exponha o documento através da API de acessibilidade , e verifique se a propriedade necessária está indicada.

## Resultados esperados
#1, #2 e #3 são verdadeiros.

## Referências

W3C/WAI (2024). [Technique PDF5: Indicating required form controls in PDF forms](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF5). Developed by Accessibility Guidelines Working Group (AG WG) Participants. Updated 04 April 2024.