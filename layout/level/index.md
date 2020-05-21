---
layout: page
parent: "Layout"
title: "Level"
shortName: "component__level"
intro: "Multi-purpose layout component typically used for simple horizontal arrangement using the CSS Flexbox Model."
jump_menu: true
---

<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>

## Usage

### Use When

* Small-scale layout tasks control components along a level row.
* Vertically center two or more adjacent elements or components.

### Don't Use

* For complex or unique arrangements of components. Consider the [Grid System]({{ site.baseurl }}layout/grid/).
* For large-scale page layout. Consider the [Grid System]({{ site.baseurl }}layout/grid/).

## Structure

```html
<el class="fsa-level"> <!-- Container -->
  <el [class="fsa-level__item[--modifiers]"]>item</el> <!-- Item -->
  <el [class="fsa-level__item[--modifiers[@BP]]"]>item</el> <!-- Item -->
</el>
```

## Level Container

### Display

#### Default
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>longest item</div>
</div>
```

#### Inline
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    Text
    <div class="fsa-level fsa-level--inline">
      <div>item 1</div>
      <div>item 2</div>
      <div>item</div>
      <div>longest item</div>
    </div>
    text
  </div>
</div>
```html
Text
<div class="fsa-level fsa-level--inline">
  <div>item 1</div>
  <div>item 2</div>
  <div>item</div>
  <div>longest item</div>
</div>
text
```

#### Full (default)
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--full">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--full">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>longest item</div>
</div>
```

#### None (override)
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--none">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--none">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>longest item</div>
</div>
```

### Wrap

#### Wrap
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--wrap">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item with a lot of stuff</div>
      <div>item</div>
      <div>item with a lot of stuff</div>
      <div>item</div>
      <div>long item</div>
      <div>item</div>
      <div>item with a lot of stuff</div>
      <div>item</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--wrap">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item with a lot of stuff</div>
  <div>item</div>
  <div>item with a lot of stuff</div>
  <div>item</div>
  <div>long item</div>
  <div>item</div>
  <div>item with a lot of stuff</div>
  <div>item</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
</div>
```

#### No-wrap (default / override)
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--no-wrap">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item with a lot of stuff</div>
      <div>item</div>
      <div>item with a lot of stuff</div>
      <div>item</div>
      <div>long item</div>
      <div>item</div>
      <div>item with a lot of stuff</div>
      <div>item</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--no-wrap">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item with a lot of stuff</div>
  <div>item</div>
  <div>item with a lot of stuff</div>
  <div>item</div>
  <div>long item</div>
  <div>item</div>
  <div>item with a lot of stuff</div>
  <div>item</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
</div>
```

### Vertical Alignment

#### Align-top
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--align-top" style="min-height: 100px;">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--align-top" style="min-height: 100px;">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>longest item</div>
</div>
```

#### Align-middle (default)
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--align-middle" style="min-height: 100px;">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--align-middle" style="min-height: 100px;">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>longest item</div>
</div>
```

#### Align-bottom
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--align-bottom" style="min-height: 100px;">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--align-bottom" style="min-height: 100px;">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>longest item</div>
</div>
```

#### Align-baseline
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--align-baseline">
      <span class="fsa-text-size--3">item 1</span>
      <span class="fsa-text-size--1">long item</span>
      <span class="fsa-text-size--6">item</span>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--align-baseline">
  <span class="fsa-text-size--3">item 1</span>
  <span class="fsa-text-size--1">long item</span>
  <span class="fsa-text-size--6">item</span>
</div>
```

#### Align-stretch
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--align-stretch" style="min-height: 100px;">
      <div>item 1</div>
      <div>long item</div>
      <div>item</div>
      <div>item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--align-stretch" style="min-height: 100px;">
  <div>item 1</div>
  <div>long item</div>
  <div>item</div>
  <div>item</div>
  <div>longest item</div>
</div>
```

### Horizontal Alignment

#### Justify-left (default)
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--justify-left">
      <div>item</div>
      <div>long item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-left">
  <div>item</div>
  <div>long item</div>
  <div>longest item</div>
</div>
```

#### Justify-center
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--justify-center">
      <div>item</div>
      <div>long item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-center">
  <div>item</div>
  <div>long item</div>
  <div>longest item</div>
</div>
```

#### Justify-right
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--justify-right">
      <div>item</div>
      <div>long item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-right">
  <div>item</div>
  <div>long item</div>
  <div>longest item</div>
</div>
```

#### Justify-between
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--justify-between">
      <div>item</div>
      <div>long item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-between">
  <div>item</div>
  <div>long item</div>
  <div>longest item</div>
</div>
```

#### Justify-around
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--justify-around">
      <div>item</div>
      <div>long item</div>
      <div>longest item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-around">
  <div>item</div>
  <div>long item</div>
  <div>longest item</div>
</div>
```

### Grow

#### Grow-auto
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--grow-auto">
      <div>item</div>
      <div>slightly longer item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--grow-auto">
  <div>item</div>
  <div>slightly longer item</div>
  <div>item</div>
</div>
```

#### Grow-even
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--grow-even">
      <div>item</div>
      <div>slightly longer item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--grow-even">
  <div>item</div>
  <div>slightly longer item</div>
  <div>item</div>
</div>
```

#### Grow-none (default)
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--grow-none">
      <div>item</div>
      <div>slightly longer item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--grow-none">
  <div>item</div>
  <div>slightly longer item</div>
  <div>item</div>
</div>
```

### Gutters

#### None
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--gutter-none">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--gutter-none">
  <div>foo</div>
  <div>bar</div>
  <div>baz</div>
</div>
```

#### XXS
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--gutter-xxs">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--gutter-xxs">
  <div>foo</div>
  <div>bar</div>
  <div>baz</div>
</div>
```

#### XS
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--gutter-xs">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--gutter-xs">
  <div>foo</div>
  <div>bar</div>
  <div>baz</div>
</div>
```

#### S (default)
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--gutter-s">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--gutter-s">
  <div>foo</div>
  <div>bar</div>
  <div>baz</div>
</div>
```

#### M
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--gutter-m">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--gutter-m">
  <div>foo</div>
  <div>bar</div>
  <div>baz</div>
</div>
```

#### L
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--gutter-l">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--gutter-l">
  <div>foo</div>
  <div>bar</div>
  <div>baz</div>
</div>
```

#### XL
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--gutter-xl">
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--gutter-xl">
  <div>foo</div>
  <div>bar</div>
  <div>baz</div>
</div>
```

## Level Items

### Grow / Shrink

#### Grow-auto
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level">
      <div>item</div>
      <div class="fsa-level__item--grow-auto OUTLINE"><strong>grow-auto</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
      <div>item</div>
    </div>
    <div class="fsa-level">
      <div class="fsa-level__item--grow-auto OUTLINE"><strong>grow-auto</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem.</div>
      <div>item</div>
      <div class="fsa-level__item--grow-auto OUTLINE"><strong>grow-auto</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level">
  <div>item</div>
  <div class="fsa-level__item--grow-auto"><strong>grow-auto</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
  <div>item</div>
</div>
<div class="fsa-level">
  <div class="fsa-level__item--grow-auto"><strong>grow-auto</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem.</div>
  <div>item</div>
  <div class="fsa-level__item--grow-auto"><strong>grow-auto</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
</div>
```

#### Grow-even
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level">
      <div>item</div>
      <div class="fsa-level__item--grow-even OUTLINE"><strong>grow-even</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
      <div>item</div>
    </div>
    <div class="fsa-level">
      <div class="fsa-level__item--grow-even OUTLINE"><strong>grow-even</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem.</div>
      <div>item</div>
      <div class="fsa-level__item--grow-even OUTLINE"><strong>grow-even</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level">
  <div>item</div>
  <div class="fsa-level__item--grow-even"><strong>grow-even</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
  <div>item</div>
</div>
<div class="fsa-level">
  <div class="fsa-level__item--grow-even"><strong>grow-even</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem.</div>
  <div>item</div>
  <div class="fsa-level__item--grow-even"><strong>grow-even</strong> lorem ipsum ugiat voluptatibus dolores eos fuga numquam rerum autem fugit iure officiis, culpa quis magni distinctio beatae cumque sit earum id vero eius.</div>
</div>
```

#### Grow-none
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level">
      <div>Fugiat nulla hic rerum aliquid! nimi laudantium in repellat vero cumque ducimus nesciunt rerum exercitationem, explicabo quaerat adipisci, dolorem, sit voluptatum enim.</div>
      <div class="fsa-level__item--grow-none OUTLINE"><strong>grow-none</strong> lorem ipsum.</div>
      <div>Dicta necessitatibus iure labore ex ullam molestiae similique quaerat mollitia officia, nihil laudantium, pariatur incidunt iusto autem nisi at. Quae, error consequatur.</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level">
  <div>Fugiat nulla hic rerum aliquid! nimi laudantium in repellat vero cumque ducimus nesciunt rerum exercitationem, explicabo quaerat adipisci, dolorem, sit voluptatum enim.</div>
  <div class="fsa-level__item--grow-none"><strong>grow-none</strong> lorem ipsum.</div>
  <div>Dicta necessitatibus iure labore ex ullam molestiae similique quaerat mollitia officia, nihil laudantium, pariatur incidunt iusto autem nisi at. Quae, error consequatur.</div>
</div>
```

#### Shrink-none
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level">
      <div>Fugiat nulla hic rerum aliquid! nimi laudantium in repellat vero cumque ducimus nesciunt rerum exercitationem, explicabo quaerat adipisci, dolorem, sit voluptatum enim.</div>
      <div class="fsa-level__item--shrink-none OUTLINE"><strong>shrink-none</strong> lorem ipsum.</div>
      <div>Dicta necessitatibus iure labore ex ullam molestiae similique quaerat mollitia officia, nihil laudantium, pariatur incidunt iusto autem nisi at. Quae, error consequatur.</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level">
  <div>Fugiat nulla hic rerum aliquid! nimi laudantium in repellat vero cumque ducimus nesciunt rerum exercitationem, explicabo quaerat adipisci, dolorem, sit voluptatum enim.</div>
  <div class="fsa-level__item--shrink-none"><strong>shrink-none</strong> lorem ipsum.</div>
  <div>Dicta necessitatibus iure labore ex ullam molestiae similique quaerat mollitia officia, nihil laudantium, pariatur incidunt iusto autem nisi at. Quae, error consequatur.</div>
</div>
```

### Vertical Alignment

#### Align-top
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level" style="min-height: 100px;">
      <div class="fsa-level__item--align-top OUTLINE"><strong>top</strong></div>
      <div>item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level" style="min-height: 100px;">
  <div class="fsa-level__item--align-top"><strong>top</strong></div>
  <div>item</div>
  <div>item</div>
</div>
```

#### Align-middle <small>(default)</small>
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level" style="min-height: 100px;">
      <div class="fsa-level__item--align-middle OUTLINE"><strong>middle</strong></div>
      <div>item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level" style="min-height: 100px;">
  <div class="fsa-level__item--align-middle"><strong>middle</strong></div>
  <div>item</div>
  <div>item</div>
</div>
```

#### Align-bottom
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level" style="min-height: 100px;">
      <div class="fsa-level__item--align-bottom OUTLINE"><strong>bottom</strong></div>
      <div>item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level" style="min-height: 100px;">
  <div class="fsa-level__item--align-bottom"><strong>bottom</strong></div>
  <div>item</div>
  <div>item</div>
</div>
```

#### Align-stretch
<div class="ds-preview">
  <div class="docs__utilities__demo fsa-level-demo">
    <div class="fsa-level fsa-level--align-top" style="min-height: 100px;">
      <div class="fsa-level__item--align-stretch OUTLINE"><strong>stretch</strong></div>
      <div>item</div>
      <div>item</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--align-top" style="min-height: 100px;">
  <div class="fsa-level__item--align-stretch"><strong>stretch</strong></div>
  <div>item</div>
  <div>item</div>
</div>
```

## Responsive

Responsive modifiers are available for both Level **Containers** and Level **Items** to be selectively applied per media query breakpoint.

```html
<el class="fsa-level[@BP] [fsa-level[--modifiers[@BP]]]"> <!-- Container -->
  <el [class="fsa-level__item[--modifiers[@BP]]"]>item</el> <!-- Item -->
  <el [class="fsa-level__item[--modifiers[@BP]]"]>item</el> <!-- Item -->
</el>
```

Where `BP` is one of <code title="small">s</code>, <code title="medium">m</code>, <code title="large">l</code>, or <code title="extra large">xl</code>; and `modifiers` can be one or more of variations documented above in [Level Container](#level-container) and [Level Items](#level-items).

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_level" data-size="phone" class="fsa-btn-group__item" type="button" title="Portrait"><span class="sr-only">Portrait</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_level" data-size="phone-big" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Landscape"><span class="sr-only">Landscape</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_level" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_level" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__level.html" target="_blank" title="View in its own browser window">New window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone-big" id="rwd-demo_level">
      <iframe title="Responsive Demo: Level" src="http://usda-fsa.github.io/fsa-style/demo/rwd__level.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Examples

Sample implementations of `fsa-level` and its available variations, combined with multiple other FPAC Design System components.

### Media Object
Combines with
[Text Size Utilities]({{ site.baseurl }}utilities/#text-size),
[Margin Utilities]({{ site.baseurl }}utilities/#margins),
and
[Label]({{ site.baseurl }}components/label/).

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon" role="alert">
  This example of Level component effectively replaces the <strong>Deprecated</strong> <a href="{{ site.baseurl }}layout/media-object/">Media Object component</a>.
</div>

<div class="ds-preview">
  <div class="fsa-level fsa-level--align-top fsa-level--gutter-m">
    <div class="fsa-level__item--shrink-none">
      <img src="https://www.fillmurray.com/g/140/100" alt="">
    </div>
    <div>
      <h3 class="fsa-m-t--none">Temporibus exercitationem sequi cupiditate a excepturi nihil distinctio</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam dolore provident ex ab voluptatem necessitatibus, nobis reiciendis! Pariatur rem autem perferendis? Quas praesentium suscipit adipisci unde.</p>
      <div class="fsa-level fsa-level--justify-between">
        <span class="fsa-label fsa-label--warning">Archived</span>
        <span class="fsa-text-size--2">Updated <time datetime="2019-05-14">May 15, 2019</time></span>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--align-top fsa-level--gutter-m">
  <div class="fsa-level__item--shrink-none">
    <img src="https://www.fillmurray.com/g/140/100" alt="">
  </div>
  <div>
    <h3 class="fsa-m-t--none">Temporibus exercitationem sequi cupiditate a excepturi nihil distinctio</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam dolore provident ex ab voluptatem necessitatibus, nobis reiciendis! Pariatur rem autem perferendis? Quas praesentium suscipit adipisci unde.</p>
    <div class="fsa-level fsa-level--justify-between">
      <span class="fsa-label fsa-label--warning">Archived</span>
      <span class="fsa-text-size--2">Updated <time datetime="2019-05-14">May 15, 2019</time></span>
    </div>
  </div>
</div>
```

### Tiles

Combines Level with
[Text Size Utilities]({{ site.baseurl }}utilities/#text-size),
[Text Header Utilities]({{ site.baseurl }}utilities/#text-headers),
[Padding Utilities]({{ site.baseurl }}utilities/#padding),
[Margin Utilities]({{ site.baseurl }}utilities/#margins),
[Box]({{ site.baseurl }}layout/box/),
and
[Label]({{ site.baseurl }}components/label/).

<div class="ds-preview">
  <div class="fsa-level fsa-level--justify-between fsa-level--align-stretch fsa-level--grow-auto">
    <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
      <div class="fsa-text--h6">Status</div>
      <div class="fsa-text-size--4">
        <span class="fsa-label fsa-label--large fsa-label--warning">In&nbsp;Progress</span>
      </div>
    </div>
    <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
      <div class="fsa-text--h6">Location</div>
      <div class="fsa-text-size--4">
        <div title="Johnson County, Missouri">Johnson, <abbr title="Missouri">MO</abbr></div>
      </div>
    </div>
    <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
      <div class="fsa-text--h6">Operator</div>
      <div class="fsa-text-size--4">Buchman Seed and Feed</div>
    </div>
    <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
      <div class="fsa-text--h6">Producer ID</div>
      <div class="fsa-text-size--4">66061</div>
    </div>
    <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
      <div class="fsa-text--h6">Farms</div>
      <div class="fsa-text-size--4">17</div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-between fsa-level--align-stretch fsa-level--grow-auto">
  <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
    <div class="fsa-text--h6">Status</div>
    <div class="fsa-text-size--4">
      <span class="fsa-label fsa-label--large fsa-label--warning">In&nbsp;Progress</span>
    </div>
  </div>
  <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
    <div class="fsa-text--h6">Location</div>
    <div class="fsa-text-size--4">
      <div title="Johnson County, Missouri">Johnson, <abbr title="Missouri">MO</abbr></div>
    </div>
  </div>
  <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
    <div class="fsa-text--h6">Operator</div>
    <div class="fsa-text-size--4">Buchman Seed and Feed</div>
  </div>
  <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
    <div class="fsa-text--h6">Producer ID</div>
    <div class="fsa-text-size--4">66061</div>
  </div>
  <div class="fsa-box fsa-box--bw-0 fsa-box--br-2 fsa-p--s">
    <div class="fsa-text--h6">Farms</div>
    <div class="fsa-text-size--4">17</div>
  </div>
</div>
```

### Page Title paired with actions

Combines with
[Margin Utilities]({{ site.baseurl }}utilities/#margins),
and
[Buttons]({{ site.baseurl }}components/button/).

<div class="ds-preview">
  <div class="fsa-level fsa-level--justify-between">
    <div>
      <h1 class="fsa-m--none">Things</h1>
    </div>
    <div class="fsa-level">
      <span><a href="#go-to-settings.html" class="fsa-btn fsa-btn--flat">Settings</a></span>
      <span><button class="fsa-btn fsa-btn--secondary" type="button">Import Thing</button></span>
      <span><button class="fsa-btn fsa-btn--primary" type="button">Create Thing</button></span>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-between">
  <div>
    <h1 class="fsa-m--none">Things</h1>
  </div>
  <div class="fsa-level">
    <span><a href="#go-to-settings.html" class="fsa-btn fsa-btn--flat">Settings</a></span>
    <span><button class="fsa-btn fsa-btn--secondary" type="button">Import Thing</button></span>
    <span><button class="fsa-btn fsa-btn--primary" type="button">Create Thing</button></span>
  </div>
</div>
```

### Badge Tiles

Combines with
[Badges]({{ site.baseurl }}components/badges/).

<div class="ds-preview">
  <div class="fsa-level fsa-level--justify-between fsa-level--gutter-xs">
    <div><span class="fsa-badge fsa-badge--large">4</span> Submitted</div>
    <div><span class="fsa-badge fsa-badge--neutral fsa-badge--large">1</span> Approved</div>
    <div><span class="fsa-badge fsa-badge--general fsa-badge--large">2</span> Assigned</div>
    <div><span class="fsa-badge fsa-badge--warning fsa-badge--large">3</span> In&nbsp;Progress</div>
    <div><span class="fsa-badge fsa-badge--success fsa-badge--large">2</span> Completed </div>
    <div><span class="fsa-badge fsa-badge--alert fsa-badge--large">0</span> Rejected</div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-between fsa-level--gutter-xs">
  <div><span class="fsa-badge fsa-badge--large">4</span> Submitted</div>
  <div><span class="fsa-badge fsa-badge--neutral fsa-badge--large">1</span> Approved</div>
  <div><span class="fsa-badge fsa-badge--general fsa-badge--large">2</span> Assigned</div>
  <div><span class="fsa-badge fsa-badge--warning fsa-badge--large">3</span> In&nbsp;Progress</div>
  <div><span class="fsa-badge fsa-badge--success fsa-badge--large">2</span> Completed </div>
  <div><span class="fsa-badge fsa-badge--alert fsa-badge--large">0</span> Rejected</div>
</div>
```

### Tile List

Combines with
[Box]({{ site.baseurl }}layout/box/),
[Padding Utilities]({{ site.baseurl }}utilities/#padding),
and
[Badges]({{ site.baseurl }}components/badges/).

<div class="ds-preview">
  <div class="fsa-box fsa-p--none">
    <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
      Organizations
      <span class="fsa-badge">1</span>
    </div>
    <div class="fsa-divider"></div>
    <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
      Repositories
      <span class="fsa-badge">30</span>
    </div>
    <div class="fsa-divider"></div>
    <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
      Issues
      <span class="fsa-badge">270</span>
    </div>
    <div class="fsa-divider"></div>
    <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
      Milestones
      <span class="fsa-badge">9</span>
    </div>
    <div class="fsa-divider"></div>
    <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
      Projects
      <span class="fsa-badge">11</span>
    </div>
  </div>
</div>
```html
<div class="fsa-box fsa-p--none">
  <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Organizations
    <span class="fsa-badge">1</span>
  </div>
  <div class="fsa-divider"></div>
  <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Repositories
    <span class="fsa-badge">30</span>
  </div>
  <div class="fsa-divider"></div>
  <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Issues
    <span class="fsa-badge">270</span>
  </div>
  <div class="fsa-divider"></div>
  <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Milestones
    <span class="fsa-badge">9</span>
  </div>
  <div class="fsa-divider"></div>
  <div class="fsa-level fsa-level--gutter-m fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Projects
    <span class="fsa-badge">11</span>
  </div>
</div>
```

### Action Bar

Combines Level with
[Buttons]({{ site.baseurl }}components/buttons),
[Button Group]({{ site.baseurl }}components/button-group),
[Text Input]({{ site.baseurl }}components/text-input/),
and
[Text Size Utilities]({{ site.baseurl }}utilities/#text-size),

<div class="ds-preview">
  <div class="fsa-level fsa-level--justify-between fsa-level--align-bottom">
    <div class="fsa-level">
      <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button" disabled>Edit</button></span>
      <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Assign</button></span>
      <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Move to</button></span>
      <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Label</button></span>
    </div>
    <div class="fsa-level">
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
</div>
```html
<div class="fsa-level fsa-level--justify-between fsa-level--align-bottom">
  <div class="fsa-level">
    <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button" disabled>Edit</button></span>
    <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Assign</button></span>
    <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Move to</button></span>
    <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block fsa-btn--small" type="button">Label</button></span>
  </div>
  <div class="fsa-level">
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
```

### Product List Item

<div class="ds-preview">
  <div class="fsa-level fsa-level--justify-between">
    <div class="fsa-level">
      <div>
        <img width="100" src="data:image/jpg;base64, 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" alt="">
      </div>
      <div>
        <h3 class="fsa-m--none">Hard Red Winter Wheat</h3>
        <div>HRW</div>
        <div>Triticum aestivum</div>
      </div>
    </div>
    <div>
      <ul class="fsa-m--none">
        <li class="fsa-m--none">Planted in the autumn</li>
        <li class="fsa-m--none">Best for whole grains</li>
        <li class="fsa-m--none">Superior baking characteristics</li>
      </ul>
    </div>
    <div>
      <div class="fsa-m-b--s">
        <button class="fsa-btn fsa-btn--secondary fsa-btn--block" type="button">Add</button>
      </div>
      <div>
        <button class="fsa-btn fsa-btn--tertiary fsa-btn--block" type="button">Remove</button>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-between">
  <div class="fsa-level">
    <div>
      <img width="100" src="data:image/jpg;base64, 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" alt="">
    </div>
    <div>
      <h3 class="fsa-m--none">Hard Red Winter Wheat</h3>
      <div>HRW</div>
      <div>Triticum aestivum</div>
    </div>
  </div>
  <div>
    <ul class="fsa-m--none">
      <li class="fsa-m--none">Planted in the autumn</li>
      <li class="fsa-m--none">Best for whole grains</li>
      <li class="fsa-m--none">Superior baking characteristics</li>
    </ul>
  </div>
  <div>
    <div class="fsa-m-b--s">
      <button class="fsa-btn fsa-btn--secondary fsa-btn--block" type="button">Add</button>
    </div>
    <div>
      <button class="fsa-btn fsa-btn--tertiary fsa-btn--block" type="button">Remove</button>
    </div>
  </div>
</div>
```

### Product List Item

<div class="ds-preview">
  <div class="fsa-level fsa-level--justify-between">
    <div>
      <input class="fsa-checkbox" id="solo-example__01" type="checkbox" name="solo-example__01" value="solo-example__01">
      <label for="solo-example__01">Farm #123456</label>
    </div>
    <div class="fsa-level fsa-level--gutter-xs">
      <span class="fsa-label"><abbr title="Soft Red Winter Wheat">SRW</abbr></span>
      <span class="fsa-label"><abbr title="Soft White Wheat">WHI</abbr></span>
      <span class="fsa-label"><abbr title="Oats">OAT</abbr></span>
      <span class="fsa-label"><abbr title="Barley">BRL</abbr></span>
    </div>
    <div class="fsa-level fsa-level--gutter-xs">
      <span><button class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Edit</button></span>
      <span><button class="fsa-btn fsa-btn--small fsa-btn--tertiary" type="button">Remove</button></span>
    </div>
  </div>
</div>
```html
<div class="fsa-level fsa-level--justify-between">
  <div>
    <input class="fsa-checkbox" id="solo-example__01" type="checkbox" name="solo-example__01" value="solo-example__01">
    <label for="solo-example__01">Farm #123456</label>
  </div>
  <div class="fsa-level fsa-level--gutter-xs">
    <span class="fsa-label"><abbr title="Soft Red Winter Wheat">SRW</abbr></span>
    <span class="fsa-label"><abbr title="Soft White Wheat">WHI</abbr></span>
    <span class="fsa-label"><abbr title="Oats">OAT</abbr></span>
    <span class="fsa-label"><abbr title="Barley">BRL</abbr></span>
  </div>
  <div class="fsa-level fsa-level--gutter-xs">
    <span><button class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Edit</button></span>
    <span><button class="fsa-btn fsa-btn--small fsa-btn--tertiary" type="button">Remove</button></span>
  </div>
</div>
```
