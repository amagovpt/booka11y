---
title: Something?
num: 1
---

{% assign principle = site.data.wcag21.principles.num[page.num] %}
   <p>princípio: {{ principle.handle }} </p>

{% for sc in site.data.principles %}
<p> {{ sc.handle }}</p>
<ul>
    {% for guideline in sc.guidelines %}
    <li>Title: {{ guideline.handle }}</li>
    {% endfor %}
</ul>
{% endfor %}
