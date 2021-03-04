---
layout: guide
parent: "Accessibility"
title: "Checklist"
intro: "This checklist helps developers identify potential accessibility issues affecting their websites or applications. It's divided into three sections of decreasing importance: <strong>A</strong>, <strong>B</strong>, and <strong>C</strong>. For workflow priority based on issue severity, please check and address these issues in the order in which they appear."
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---


For more detail on accessibility standards, please see [WCAG2.0 AA](https://www.w3.org/TR/WCAG20/).

 * **A** - Critical issues that will cause serious problems and/or stop most users of assistive technology from using the site.
 * **B** - Less critical issues that may cause problems or increased frustration for certain users.
 * **C** - Minor issues that will cause problems or frustration for a small number of users.

It is important to note, while B and C are noted as less critical, they are still required to be truly Section 508 compliant. This checklist should be used as a reference for development and is not a substitute for compliance checks by a Section 508 coordinator. If warranted, additional testing information can occasionally be found within specific technical sections of this guide.

##  A - Critical

1. [Site is keyboard accessible.](keyboard)
 * All interactions can be accessed with a keyboard.
2. [Site is free of keyboard traps.](keyboard)
 * The keyboard focus is never trapped in a loop.
4. [All `form` inputs have explicit labels.](forms)
6. [All relevant images use an `img` tag.](images)
5. [All images have `alt` attributes.](images)
6. [Multimedia is tagged.](multimedia)
 * All multimedia has appropriate captioning and audio description.
7. [Text has sufficient color contrast.](color-and-contrast)
 * All text has a contrast ratio of 4.5:1 with the background.

## B - Less Critical

1. [Site never loses focus.](keyboard)
 * Focus is always visible when moving through the page with the keyboard.
2. [Tab order is logical.](keyboard)
3. [Form instructions are associated with inputs.](forms)
4. [Site doesn't timeout unexpectedly.](timeouts)
 * Identify elements that may "timeout" and verify that the user can request more time.
5. [Tables are coded properly.](tables)
 * Tables have proper headers and column attributes.
6. [Headings are nested properly.](headings)
 * Heading elements are nested in a logical way.

## C - Minor
1. [Frames are named.](frames)
 * All frames have a name element.
2. [Flashing elements are compliant.](flashing)
 * Elements that flash on screen do so at a rate of less than 3hz.
3. [Language is set.](language)
 * The language for the page is set.
 * The language for sections on the page that differ from the site language are set.
4. [CSS is not required to use the page.](css)
 * The page makes sense with or without CSS.
5. [Links are unique and contextual.](links)
 * All links can be understood taken alone; i.e., 'Read more - about 508'.
6. [Page titles are descriptive.](page-titles)
7. [Required plugins are linked on the page.](plugins)
