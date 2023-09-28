---
title: Something?
---

<h2>Diretrizes WCAG 2.1</h2>

{% for principle in site.data.wcag21.principles %}
<p>{{ principle.num }} - {{ principle.handle }}</p>
<ul>
    {% for guideline in principle.guidelines %}
    <li>{{ guideline.num }} {{ guideline.handle }}</li>
    {% endfor %}
</ul>
{% endfor %}

<h2>Critérios de Sucesso WCAG 2.1</h2>

{% for principle in site.data.wcag21.principles %}
<p>{{ principle.num }} - {{ principle.handle }}</p>
<ul>
    {% for sc in principle.guidelines.successcriteria %}
    <li>{{ sc.num }} {{ sc.handle }}</li>
    {% endfor %}
</ul>
{% endfor %}
