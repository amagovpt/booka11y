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
