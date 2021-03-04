---
layout: guide
parent: "Accessibility"
title: "Timeouts"
intro: "If timeouts are used, you must give the user at least 20 seconds to request more time. "
custom_js: ["ga/ga-tracker.js", "ga/generic.js", "time-outs.js"]
---

## Testing

1. Identify any timeouts on the page.
  * Contact the developer to find these.
1. Trigger the time out.
  * __If you are unable to request more time or the request lasts less than 20 seconds, it's a failure.__

## Examples

### Passes

Fill out this form. The form will reset after 20 seconds if user doesn't request more time to complete.

<form id='pForm'>

  <fieldset>

    <p>
      <label for='t1'>Field 1</label><br>
      <input class="fsa-input" type='text' id='t1'>
    </p>

    <p>
      <label for='t2'>Field 2</label><br>
      <input class="fsa-input" type='text' id='t2'>
    </p>

    <p>
      <label for='t3'>Field 3</label><br>
      <input class="fsa-input" type='text' id='t3'>
    </p>

    <p>
      <label for='t4'>Field 4</label><br>
      <input class="fsa-input" type='text' id='t4'>
    </p>

    <p>
      <label for='t5'>Field 5</label><br>
      <input class="fsa-input" type='text' id='t5'>
    </p>

  </fieldset>

</form>

> While this passes because a timeout does occur, the user is given more than 20 seconds to request more time.
