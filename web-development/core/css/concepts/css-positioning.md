# CSS Positioning

## Box Model

---

## Normal Flow

---

## Floats

---

## Block Level Element

* Expand to fill the maximum space.

* Have `line breaks` after them.

---

## In-line Block Element

* Is treated as text.

* __Elements__ - `<span>`

* __CSS__ -  `display: inline-block;`


---

## Relative Positioning

---

## Absolute Positioning

* To use `absolute positioning` in a container, the `parent element` must have a `position` attribute set to `relative`.

* Then the position can be set relative to the origin of that element.

```html
<header class="header">
    <div class="header-title">Title</div>
</header>
```

```css
.header {
    position: relative;
}

.header-title {
    position: absolute;
    top: 40px;
    left:40px;
}
```