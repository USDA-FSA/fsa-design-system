---
layout: demo
custom_js: ["ga/ga-tracker.js", "ga/generic.js", "table-select-demo.js"]
---

<div class="fsa-level@l fsa-level--justify-between fsa-level--align-bottom">
  <div class="fsa-level fsa-level--grow-auto fsa-m-b--s fsa-m-b--none@l">
    <button class="fsa-btn fsa-btn--secondary fsa-btn--fill fsa-btn--small" type="button" disabled=""><svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> <span class="fsa-sr-only@xs-only">Edit</span></button>
    <button class="fsa-btn fsa-btn--secondary fsa-btn--fill fsa-btn--small" type="button"><svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/></svg> <span class="fsa-sr-only@xs-only">Assign</span></button>
    <button class="fsa-btn fsa-btn--secondary fsa-btn--fill fsa-btn--small" type="button"><svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 12v-3h-4v-4h4V8l5 5-5 5z"/></svg> <span class="fsa-sr-only@xs-only">Move</span></button>
    <button class="fsa-btn fsa-btn--secondary fsa-btn--fill fsa-btn--small" type="button"><svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/></svg> <span class="fsa-sr-only@xs-only">Label</span></button>
  </div>
  <div class="fsa-show@m fsa-level fsa-level--grow-auto">
    <div>
      <label for="lorem_find" class="fsa-text-size--2">Quick Find</label>
      <input type="text" class="fsa-input fsa-input--small fsa-input--fill" id="lorem_find">
    </div>
    <div>
      <span class="fsa-text-size--2" id="lorem_timeframe">Timeframe</span>
      <span class="fsa-btn-group fsa-btn-group--small fsa-btn-group--fill" role="group" aria-labeledby="lorem_timeframe">
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
      <td aria-label="Assigned to"><a href="/link.html">Carla Tortelli</a></td>
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
      <td aria-label="Assigned to"><a href="/link.html">Ernie Pantusso</a></td>
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
      <td aria-label="Assigned to"><a href="/link.html">Diane Chambers</a></td>
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
      <td aria-label="Assigned to"><a href="/link.html">Woody Boyd</a></td>
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
      <td aria-label="Assigned to"><a href="/link.html">Woody Boyd</a></td>
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
        <a class="fsa-pagination__label" href="/link.html"><span class="fsa-sr-only">Go to page</span> 2</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="/link.html"><span class="fsa-sr-only">Go to page</span> 120</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="/link.html"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></a>
      </li>
    </ul>
  </div>
</nav>
