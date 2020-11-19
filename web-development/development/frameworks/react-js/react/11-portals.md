# React Portals

---

## Introduction

* In `React` __normally__ all components are a child of the `<div id='root'>`.

    1. This means a css `stacking context` (e.g. `pos: relative; z-index=0;`) can be created in any parent `<div>` element to the modal.

    2. A `stacking context` creates a different way of comparing sibling elements. 
    
    3. This might break the css of the modal as the siblings are __compared to the context, not the modal itself__.

        > NB: If several siblings have the same `z-index`, the last one declared will be the one on top.

    4. This could be fixed by altering the `z-index` OR __making the modal a child of the `root`__.

    5. `React Portals` allow us to get around this issue when using `modals` by breaking the react parent-child model and allowing a component to be `re-parented`.

* A `portal` allows us to render a component NOT as a direct child, but, as a child of some other component, or example, the `body` element.