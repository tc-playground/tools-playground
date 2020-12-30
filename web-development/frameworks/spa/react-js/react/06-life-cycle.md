# Life Cycle

## Introduction

* `React life cycle` events denote the life of a `class based component`.

* `React life cycle` events can be implemented on a `class based component` to __hook__ into the event and add additional functionality.

* All `life cycle` events are implemented by default aprt from `render()`.

---

## Component Life cycle - Main Methods

* `constructor()` - Create component. Good place for one __time set-up__. NB: Although best-practice is to use `componentDidMount()`.

* `render()` - Content visible on screen. Avoid doing anything apart from returning `jsx`.

* `componentDidMount()` - Wait for updates. Good place for __data loading__.

* `componentDidUpdate()` - Handle update. `render()` is called. Good place to do additional __data loading__ when a component changes. 

* `componentWillUnmount()` - Handle destruction. Good place to do __clean-up__.

---

## Component Life cycle - Additional Methods

* `shouldComponentUpdate` -

* `getDerivedStateFromProps()` - 

* `getSnapshotBeforeUpdate()` - 

