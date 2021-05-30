# CSS Animations

## The `transition` property can be used set `simple` animations



## The `animation` property can be used set `keyframe` animations

* [CSS - Animations - Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

* __Short HAnd__ : `animation: name duration timing-function delay iteration-count direction fill-mode;`

```css
.heading-primary--main {
    display: block;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 35px;
    animation-name: heading-primary--main-animate;
    animation-duration: 3s;
}
@keyframes heading-primary--main-animate {
    0% {
        opacity: 0;
        transform: translateY(-10rem);
    }
    80% {
        opacity: 0.8;
        transform: translateY(1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
```