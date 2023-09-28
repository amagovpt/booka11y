---
title: A little bit more
---

ABC...

{% assign p = 0 %}
      {% for principle in site.data.wcag21.principles %}
        {% assign p = p | plus: 1 %}
        {% assign g = 0 %}
        <section class="principle" aria-labelledby="principle{{ principle.num }}" aria-roledescription="principle">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 id="principle{{ principle.num }}"><strong>Principle {{ p }}</strong> – {{principle.handle}}</h2>
            </div>
            <div class="panel-body panel-body-principle">
              <p>{{principle.title}}</p>
            </div>
          </div>
          <div class="guidelines">
            {% for guideline in principle.guidelines %}
              {% include guideline.html %}
            {% endfor %}
          </div>
        </section>
      {% endfor %}
