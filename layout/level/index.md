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

## Structure

```html
<el class="fsa-level[@BP] [fsa-level[--modifiers[@BP]]]"> <!-- Container -->
  <el [class="fsa-level__item[--modifiers[@BP]]"]>item</el> <!-- Item -->
  <el [class="fsa-level__item[--modifiers[@BP]]"]>item</el> <!-- Item -->
</el>
```

## Level Container

```html
<el class="fsa-level [fsa-level[--modifiers]]">
  ...
</el>
```

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


## Usage

### Use When

* Small-scale layout tasks control components along a level row.
* Vertically center two or more adjacent elements or components.

### Don't Use

* For complex or unique arrangements of components. Consider the [Grid System]({{ site.baseurl }}layout/grid/).
* For large-scale page layout. Consider the [Grid System]({{ site.baseurl }}layout/grid/).
