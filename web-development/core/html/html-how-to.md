# HTML - How To

### Initialise basic HTML page

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" type="image/png" href="img/favicon.png">
        <title>Template Project</title>
    </head>
    <body>
        Hello!
    </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
}
```

---

### Create basic Header element?

```html
<header class="header">
    <div class="header__logo-box">
        <img src="img/logo-white.png" alt="Logo" class="header__logo">
    </div>

    <div class="header__text-box">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Outdoors</span>
            <span class="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a>
    </div>
</header>
```

```css
.header {
    height: 95vh;
    background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)),
        url(../img/hero.jpg);
    background-size: cover;
    background-position: top;
    position: relative;
}
```

---

### Create basic Nav element?

```html
<nav class="navigation__nav">
    <ul class="navigation__list">
        <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>XXX</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>YYY</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>ZZZ</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>III</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>JJJ</a></li>
        </ul>
</nav>
```