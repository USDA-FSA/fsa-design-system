---
layout: demo
custom_js: "table-select-demo.js"
---

<div class="fsa-level@l fsa-level--justify-between fsa-level--align-bottom">
  <ul class="fsa-level fsa-level--grow-auto">
    <li><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button" disabled="">Edit</button></li>
    <li><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Assign</button></li>
    <li><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Move to</button></li>
    <li><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Label</button></li>
  </ul>
  <div class="fsa-show@m fsa-level fsa-m-t--s fsa-level--grow-auto">
    <div>
      <label for="lorem_find" class="fsa-text-size--2">Quick Find</label>
      <input type="text" class="fsa-input fsa-input--small fsa-input--block" id="lorem_find">
    </div>
    <div>
      <span class="fsa-text-size--2" id="lorem_timeframe">Timeframe</span>
      <span class="fsa-btn-group fsa-btn-group--small fsa-btn-group--block" role="group" aria-labeledby="lorem_timeframe">
        <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Today</button>
        <button class="fsa-btn-group__item" type="button">This Week</button>
        <button class="fsa-btn-group__item" type="button">This Year</button>
      </span>
    </div>
  </div>
</div>
<table class="fsa-table fsa-table--borderless fsa-table--responsive fsa-table--responsive-horizontal fsa-m-t--s">
  <caption class="sr-only">Inspections</caption>
  <thead>
    <tr>
      <th class="fsa-table__th--sticky fsa-table__th--select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-all" id="inpections__select-all" type="checkbox" name="inpections__select-all" value="Select all">
          <label for="inpections__select-all" title="Select all"><span class="sr-only">Select all</span></label>
        </span>
      </th>
      <th class="fsa-table__th--sticky" aria-sort="ascending">
        <button type="button" class="fsa-table__sort fsa-table__sort--ascending">Name</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">State</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">County</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Farm</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Assignee</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Due Date</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Status</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--07" type="checkbox" name="inpections__select-inspection--07" value="07">
          <label for="inpections__select-inspection--07"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 07</button>
        </strong>
      </td>
      <td aria-label="State">Kansas</td>
      <td aria-label="County">Johnson</td>
      <td aria-label="Farm Number">8787</td>
      <td aria-label="Assigned to"><a href="link.html">Carla Tortelli</a></td>
      <td aria-label="Due Date">
        <time datetime="2018-08-05">08/05/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--neutral">Assigned</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--10" type="checkbox" name="inpections__select-inspection--10" value="10">
          <label for="inpections__select-inspection--10"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 10</button>
        </strong>
      </td>
      <td aria-label="State">Missouri</td>
      <td aria-label="County">Jackson</td>
      <td aria-label="Farm Number">8080</td>
      <td aria-label="Assigned to"><a href="link.html">Ernie Pantusso</a></td>
      <td aria-label="Due Date">
        <time datetime="2018-10-01">10/01/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--alert">Rejected</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--17" type="checkbox" name="inpections__select-inspection--17" value="17">
          <label for="inpections__select-inspection--17"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 17</button>
        </strong>
      </td>
      <td aria-label="State">California</td>
      <td aria-label="County">Ventura</td>
      <td aria-label="Farm Number">5644</td>
      <td aria-label="Assigned to"><span class="sr-only">not assigned</span></td>
      <td aria-label="Due Date">
        <time datetime="2018-11-10">11/10/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label">Not Started</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--24" type="checkbox" name="inpections__select-inspection--24" value="24">
          <label for="inpections__select-inspection--24"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 24</button>
        </strong>
      </td>
      <td aria-label="State">California</td>
      <td aria-label="County">Los Angeles</td>
      <td aria-label="Farm Number">6662</td>
      <td aria-label="Assigned to"><a href="link.html">Diane Chambers</a></td>
      <td aria-label="Due Date">
        <time datetime="2018-11-16">11/16/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--general">In Progress</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--31" type="checkbox" name="inpections__select-inspection--31" value="31">
          <label for="inpections__select-inspection--31"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 31</button>
        </strong>
      </td>
      <td aria-label="State">California</td>
      <td aria-label="County">San Bernardino</td>
      <td aria-label="Farm Number">6664</td>
      <td aria-label="Assigned to"><span class="sr-only">not assigned</span></td>
      <td aria-label="Due Date">
        <time datetime="2018-10-07">10/07/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--warning">On Hold</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input disabled="disabled" class="fsa-checkbox fsa-checkbox--solo" id="inpections__select-inspection--33" type="checkbox" name="inpections__select-inspection--33" value="33">
          <label for="inpections__select-inspection--33"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 33</button>
        </strong>
      </td>
      <td aria-label="State">Kansas</td>
      <td aria-label="County">Miami</td>
      <td aria-label="Farm Number">7510</td>
      <td aria-label="Assigned to"><a href="link.html">Woody Boyd</a></td>
      <td aria-label="Due Date">
        <time datetime="2018-10-05">10/05/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--success">Complete</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--37" type="checkbox" name="inpections__select-inspection--37" value="37">
          <label for="inpections__select-inspection--37"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 37</button>
        </strong>
      </td>
      <td aria-label="State">Maryland</td>
      <td aria-label="County">Anne Arundel</td>
      <td aria-label="Farm Number">1325</td>
      <td aria-label="Assigned to"><a href="link.html">Woody Boyd</a></td>
      <td aria-label="Due Date">
        <time datetime="2019-05-05">05/05/2019</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--general">In Progress</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--39" type="checkbox" name="inpections__select-inspection--39" value="39">
          <label for="inpections__select-inspection--39"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 39</button>
        </strong>
      </td>
      <td aria-label="State">Oregon</td>
      <td aria-label="County">Clackamas </td>
      <td aria-label="Farm Number">1196</td>
      <td aria-label="Assigned to"><span class="sr-only">not assigned</span></td>
      <td aria-label="Due Date">
        <time datetime="2019-05-05">05/05/2019</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label">Not Started</span></div>
      </td>
    </tr>
  </tbody>
</table>
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="1" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous" aria-hidden="true">
        <span class="fsa-pagination__label fsa-pagination__label--previous fsa-pagination__label--disabled"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></span>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="step"><span class="fsa-sr-only">Currently on page</span> 1</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 2</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 120</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></a>
      </li>
    </ul>
  </div>
</nav>
