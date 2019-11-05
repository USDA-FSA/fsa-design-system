---
layout: page
parent: "Components"
title: "Timeline"
intro: "List system and user activity chronologically."
jump_menu: true
---

`fsa-timeline`'s structure enables flexible usage of other Design System components. For example, the featured demo below makes sample use of [Labels]({{ site.baseurl }}components/labels/), [Badge]({{ site.baseurl }}components/badges/), [Buttons]({{ site.baseurl }}components/buttons/), [Text Links]({{ site.baseurl }}components/links/), and several [CSS Utilities]({{ site.baseurl }}utilities/).

<div class="ds-preview ds-preview--default-bg">
  <div class="fsa-timeline">
    <div class="fsa-timeline__item fsa-timeline__item--system">
      <div class="fsa-timeline__hd">
        <span class="fsa-label">Submitted</span> on
        <time datetime="2015-05-28T09:02:10.517-05:00">Monday, 04/03/2015 6:02 AM</time>
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--system">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Jane Doe</a></strong> <span class="fsa-label">Approved</span> request on
        <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:08 PM</time>
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--user">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Jane Doe</a></strong> commented on
        <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:10 PM</time>
        <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('See **.fsa-timeline__item--editing** example.')">Edit</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Likely use a **Prompt** Notification variation.')">Delete</button> </span>
      </div>
      <div class="fsa-timeline__bd">
        The inspection request identifies this site enrolled in three Land Use programs. While technically possible, it is quite rare and needs to be verified.
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--system">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Jane Doe</a></strong>
        <span class="fsa-label fsa-label--general">Assigned</span> to <a href="link.html">Todd Stanley</a> on
        <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 04/06/2015 12:28 PM</time>
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--user">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Todd Stanley</a></strong> commented on
        <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 05/28/2015 7:02 AM</time>
        <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('See **.fsa-timeline__item--editing** example.')">Edit</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Likely use a **Prompt** Notification variation.')">Delete</button> </span>
      </div>
      <div class="fsa-timeline__bd">
        On my way to the site now.
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--system">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Todd Stanley</a></strong> changed the status to
        <span class="fsa-label fsa-label--warning">In Progress</span> on
        <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 05/28/2015 8:30 AM</time>
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--system">
      <div class="fsa-timeline__hd">
        <strong><abbr title="SPA Reference App">SPAR</abbr> Bot</strong> closed <span class="fsa-badge fsa-badge--neutral">8</span> sub-tasks, <span class="fsa-badge fsa-badge--neutral">99+</span> remain open
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--system">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Jane Doe</a></strong> changed the Due Date to
        <time datetime="2015-05-28T09:02:10.517-05:00">06/13/2015</time> on
        <time datetime="2015-05-28T09:02:10.517-05:00">Tuesday, 05/28/2015 8:58 AM</time>
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--user">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Jane Doe</a></strong> commented on
        <time datetime="2015-05-28T09:02:10.517-05:00">Tuesday, 05/28/2015 9:02 AM</time>
      </div>
      <div class="fsa-timeline__bd">
        This Inspection remains on hold as operator has been using the last two months to address soil pH level.
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--system">
      <div class="fsa-timeline__hd">
        <strong><a href="link.html">Jane Doe</a></strong> <span class="fsa-label fsa-label--alert">Rejected</span> this Inspection Request on
        <time datetime="2015-05-28T09:02:10.517-05:00">Friday, 06/08/2015 5:58 PM</time>
      </div>
    </div>
    <div class="fsa-timeline__item fsa-timeline__item--add-comment">
      <div class="fsa-timeline__hd">
        <label class="fsa-field__label" for="inspectionCommentField--104"><strong>Todd Stanley</strong> comments:</label>
      </div>
      <div class="fsa-timeline__bd">
        <div class="fsa-m-b--s">
          <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentField--104" name="inspectionCommentField"></textarea>
        </div>
        <button class="fsa-btn fsa-btn--primary" type="submit">Add Comment</button>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-timeline">
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <span class="fsa-label">Submitted</span> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Monday, 04/03/2015 6:02 AM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> <span class="fsa-label">Approved</span> request on
      <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:08 PM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--user">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> commented on
      <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:10 PM</time>
      <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('See **.fsa-timeline__item--editing** example.')">Edit</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Likely use a **Prompt** Notification variation.')">Delete</button> </span>
    </div>
    <div class="fsa-timeline__bd">
      The inspection request identifies this site enrolled in three Land Use programs. While technically possible, it is quite rare and needs to be verified.
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong>
      <span class="fsa-label fsa-label--general">Assigned</span> to <a href="link.html">Todd Stanley</a> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 04/06/2015 12:28 PM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--user">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Todd Stanley</a></strong> commented on
      <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 05/28/2015 7:02 AM</time>
      <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('See **.fsa-timeline__item--editing** example.')">Edit</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Likely use a **Prompt** Notification variation.')">Delete</button> </span>
    </div>
    <div class="fsa-timeline__bd">
      On my way to the site now.
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Todd Stanley</a></strong> changed the status to
      <span class="fsa-label fsa-label--warning">In Progress</span> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 05/28/2015 8:30 AM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <strong><abbr title="SPA Reference App">SPAR</abbr> Bot</strong> closed <span class="fsa-badge fsa-badge--neutral">8</span> sub-tasks, <span class="fsa-badge fsa-badge--neutral">99+</span> remain open
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> changed the Due Date to
      <time datetime="2015-05-28T09:02:10.517-05:00">06/13/2015</time> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Tuesday, 05/28/2015 8:58 AM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--user">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> commented on
      <time datetime="2015-05-28T09:02:10.517-05:00">Tuesday, 05/28/2015 9:02 AM</time>
    </div>
    <div class="fsa-timeline__bd">
      This Inspection remains on hold as operator has been using the last two months to address soil pH level.
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> <span class="fsa-label fsa-label--alert">Rejected</span> this Inspection Request on
      <time datetime="2015-05-28T09:02:10.517-05:00">Friday, 06/08/2015 5:58 PM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--add-comment">
    <div class="fsa-timeline__hd">
      <label class="fsa-field__label" for="inspectionCommentField--104"><strong>Todd Stanley</strong> comments:</label>
    </div>
    <div class="fsa-timeline__bd">
      <div class="fsa-m-b--s">
        <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentField--104" name="inspectionCommentField"></textarea>
      </div>
      <button class="fsa-btn fsa-btn--primary" type="submit">Add Comment</button>
    </div>
  </div>
</div>
```

## Variations

### System
<div class="ds-preview ds-preview--default-bg">
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </div>
  </div>
</div>
```html
<div class="fsa-timeline__item fsa-timeline__item--system">
  <div class="fsa-timeline__hd">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  </div>
</div>
```

### User
<div class="ds-preview ds-preview--default-bg">
  <div class="fsa-timeline__item fsa-timeline__item--user">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> commented on
      <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:10 PM</time>
      <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button">[Action]</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button">[Action]</button> </span>
    </div>
    <div class="fsa-timeline__bd">
      At voluptatibus reiciendis voluptatum molestiae vel magni utem veritatis quas commodi repellendus laborum illo nesciunt odit vitae nisi eius. Gemino quis obcaecati ut hic minus aut, eius maxime perspiciatis, distinctio facilis excepturi. Deserunt, aliquid tenetur. Atque, culpa. Quos, magni!
    </div>
  </div>
</div>
```html
<div class="fsa-timeline__item fsa-timeline__item--user">
  <div class="fsa-timeline__hd">
    <strong><a href="link.html">Jane Doe</a></strong> commented on
    <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:10 PM</time>
    <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button">[Action]</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button">[Action]</button> </span>
  </div>
  <div class="fsa-timeline__bd">
    At voluptatibus reiciendis voluptatum molestiae vel magni utem veritatis quas commodi repellendus laborum illo nesciunt odit vitae nisi eius. Gemino quis obcaecati ut hic minus aut, eius maxime perspiciatis, distinctio facilis excepturi. Deserunt, aliquid tenetur. Atque, culpa. Quos, magni!
  </div>
</div>
```

### Edit comment
<div class="ds-preview ds-preview--default-bg">
  <div class="fsa-timeline__item fsa-timeline__item--user fsa-timeline__item--editing">
    <div class="fsa-timeline__hd">
      <label class="fsa-field__label" for="inspectionCommentEditSample--56w6w440"><strong>Jane</strong> is updating comment:</label>
    </div>
    <div class="fsa-timeline__bd">
      <div class="fsa-m-b--s">
        <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentEditSample--56w6w440" name="inspectionCommentEditSample--56w6w440"></textarea>
      </div>
      <button class="fsa-btn fsa-btn--primary fsa-btn--small" type="submit" onclick="alert('1. Repaint this fsa-timeline__item to original state with updated content.\n\n2. Growl Notification noting success.')">Update Comment</button>
      <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Revert to last saved comment. No prompt necessary.')">Cancel</button>
    </div>
  </div>
</div>
```html
<div class="fsa-timeline__item fsa-timeline__item--user fsa-timeline__item--editing">
  <div class="fsa-timeline__hd">
    <label class="fsa-field__label" for="inspectionCommentEditSample--56w6w440"><strong>Jane</strong> is updating comment:</label>
  </div>
  <div class="fsa-timeline__bd">
    <div class="fsa-m-b--s">
      <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentEditSample--56w6w440" name="inspectionCommentEditSample--56w6w440"></textarea>
    </div>
    <button class="fsa-btn fsa-btn--primary fsa-btn--small" type="submit" onclick="alert('1. Repaint this fsa-timeline__item to original state with updated content.\n\n2. Growl Notification noting success.')">Update Comment</button>
    <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Revert to last saved comment. No prompt necessary.')">Cancel</button>
  </div>
</div>
```

### Add a comment
<div class="ds-preview ds-preview--default-bg">
  <div class="fsa-timeline__item fsa-timeline__item--add-comment">
    <div class="fsa-timeline__hd">
      <label class="fsa-field__label" for="inspectionCommentField--669"><strong>Todd Stanley</strong> comments:</label>
    </div>
    <div class="fsa-timeline__bd">
      <div class="fsa-m-b--s">
        <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentField--669" name="inspectionCommentField"></textarea>
      </div>
      <button class="fsa-btn fsa-btn--primary" type="submit">Add Comment</button>
    </div>
  </div>
</div>
```html
<div class="fsa-timeline__item fsa-timeline__item--add-comment">
  <div class="fsa-timeline__hd">
    <label class="fsa-field__label" for="inspectionCommentField--669"><strong>Todd Stanley</strong> comments:</label>
  </div>
  <div class="fsa-timeline__bd">
    <div class="fsa-m-b--s">
      <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentField--669" name="inspectionCommentField"></textarea>
    </div>
    <button class="fsa-btn fsa-btn--primary" type="submit">Add Comment</button>
  </div>
</div>
```

## Usage

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text">Documentation in progress.</p>
  </div>
</div>