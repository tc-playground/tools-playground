# CSS - How To

> Have a class name on every element.

---

### Perform basic reset of universal selector?

* Reset the default browser CSS.

* `*` is the `universal selector`.

* Remove the padding and margin, and, remove these from browser dimension calculations.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
```

---

### Set project wide font definitions?

* Best practice to set on teh `body` than the `universal selector`.

```css
body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
}

```

---

### Clip parts of elements?

* Use the `clip-path` property.

```css
.header {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 50% 100%, 50% 100%, 0 75vh);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 50% 100%, 50% 100%, 0 75vh);
}
```

---

### Have `line breaks` between elements?

* Use `block level elements` or apply the `display` property to `block` in the CSS.