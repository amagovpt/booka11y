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
    {% for guideline in principle.guidelines %}
       {% for sc in guideline.successcriteria %}
          <li>{{ sc.num }} {{ sc.handle }}</li>
        {% endfor %}
    {% endfor %}
</ul>
{% endfor %}

<h2>Técnicas suficientes</h2>

{% for principle in site.data.wcag21.principles %}
<p>{{ principle.num }} - {{ principle.handle }}</p>
<ul>
    {% for guideline in principle.guidelines %}
       {% for sc in guideline.successcriteria %}
          {% for tech in sc.techniques %}
          <li>{{ tech.suficient.id }} {{ tech.suficient.title }}</li>
          {% endfor %}
        {% endfor %}
    {% endfor %}
</ul>
{% endfor %}
