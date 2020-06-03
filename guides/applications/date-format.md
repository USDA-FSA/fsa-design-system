---
layout: guide
parent: "Applications"
title: "Date Format"
intro: ""

---

## Required Date Format

`MM/DD/YYYY`

**Example**

`05/14/1975` for "May 14th, 1975"

### Parsing and reforming date entry

If the date **entered** does not match `MM/DD/YYYY` when the focus on the date field is lost (`blur`), then the system shall reform to `MM/DD/YYYY`, testing against the **Allowable Date Formats** listed below.

**Example**

1. User manually enters `05141975`
1. System (e.g. via JavaScript) reforms UI to `05/14/1975`.

## Allowable Date Formats

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

## Disallowed Date Format

The above Allowable Date Formats is the currently known exhaustive list of strings that can reasonably be resolved. Any string **not listed above shall fail**, and the user interface shall provide error messaging with guidance to resolve.

**Example**

`MDYY` **cannot** be predictably reformatted with 100% certainty. If a user enters `1111`, programmatically we cannot surmise the users intention; it could be "January 1st, 20011," or "January 11, 2001," or "November 11th," or "November, 2011."
