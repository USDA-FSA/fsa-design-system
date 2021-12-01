---
layout: guide
parent: "Content"
title: "Numbers, Dates, and Percentages"
intro: Generally speaking, FPAC follows the guidelines outlined in the <a href="https://www.apstylebook.com">AP Stylebook</a>.
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Numbers

In body copy, we at FPAC prefer to spell out numbers *one* through *nine*, and use numerals for numbers 10 and greater. This is true of ordinal numbers, as well. Spell out *first* to *ninth*, and capture *10th* or greater with numerals.

Sometimes the government writes about very large numbers: millions, billions, even trillions. We express these numbers with a numeral and a word. For example, *1.6 million people*. When referring to amounts of money in cents or greater than $1 million, we use numerals followed by words: *5 cents* or *$2.7 million*. For amounts of money less than $1 million, we use the dollar sign: *$17*.

In titles, subheadings, and interface labels, we use numerals instead of spelling out numbers. For example, *10 digital tech leaders you should know now* or *6 ways to incorporate plain-language strategies*. We do this to promote ease of reading and scannability — in titles and headings, it’s easier for readers to scan numerals than it is for them to scan written-out numbers.

## Phone Number Guidelines

FPAC applications shall follow the E.123 International Telecommunications Union sector ITU-T. In order to have the widest amount of flexibility and to make sure applications do not use proprietary methodology, the below listed guidelines shall be followed. Variants of the accepted formats by a User are also listed below.

<table class="fsa-table">
<thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Format</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Telephone number, national notation</td>
      <td>(555) 555 5555</td>
    </tr>
    <tr>
      <td>Telephone number E.123 international notation</td>
      <td>+55 555 555 5555</td>
    </tr>
  </tbody>
</table>

### Acceptable National Variants

FPAC applications requiring a User to input a telephone number shall accept the below formats. The system will automatically convert the number to (555) 555-5555 format to be stored in the database.

 * (555) 555 5555
 * (555) 555-5555
 * 555-555-5555
 * 555 555 5555

## Dates

Use the full, four-digit year. For informal writing, it's okay to use an abbreviated form. For example, *We're thankful web design isn't stuck in the '90s.*

### Required Date Format

`MM/DD/YYYY`

**Example**

`05/14/1975` for "May 14th, 1975"

#### Parsing and reforming date entry

If the date **entered** does not match `MM/DD/YYYY` when the focus on the date field is lost (`blur`), then the system shall reform to `MM/DD/YYYY`, testing against the **Allowable Date Formats** listed below.

**Example**

1. User manually enters `05141975`
1. System (e.g. via JavaScript) reforms UI to `05/14/1975`.

### Allowable Date Formats

While consistent use of the Design System will naturally train users to enter the preferred date format, to work with the widest range or date entry and to improve User workflow, the following date strings shall be allowed to be entered.

 * `MMDDYYYY`
 * `MM/DD/YYYY`
 * `MM/DD/YY`
 * `M/D/YYYY`
 * `MM-DD-YYYY`
 * `MM-DD-YY`
 * `M-D-YYYY`
 * `MM.DD.YYYY`
 * `MM.DD.YY`
 * `M.D.YYYY`
 * `M.D.YY`

### Disallowed Date Format

The above Allowable Date Formats is the currently known exhaustive list of strings that can reasonably be resolved. Any string **not listed above shall fail**, and the user interface shall provide error messaging with guidance to resolve.

**Example**

`MDYY` **cannot** be predictably reformatted with 100% certainty. If a user enters `1111`, programmatically we cannot surmise the users intention; it could be "January 1st, 20011," or "January 11, 2001," or "November 11th," or "November, 2011."


## Percentages

In keeping with AP style, we spell out *percent* in most cases, with a few exceptions. We use the percent sign (%) in these specific circumstances:

* **Tables and technical or scientific writing**. For example: *60% of participants reported experiencing negative side effects*.
* **Headings and subheadings**. For example: *Candidate Woof takes 7% lead in the election for best dog*.
* **Interface labels**.
* **Captions and infographics**.

We choose to use the percent sign in these cases to improve content scannability, allowing readers to digest the content more quickly.
