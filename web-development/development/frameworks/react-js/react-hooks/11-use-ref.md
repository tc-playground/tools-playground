# React useRef Hook


## Introduction

* The `react ref system` allow react to access `DOM nodes`.

    * A common use of the ref system is to `perform custom actions` such as automatically focusing on an `input` element.

* The `useRef` hook allows `functional components` to interact with DOM nodes.

* The `userRef` hook can be used to get a `reference hook` with an `initial value`.

    * The `reference hook` needs to be attached to the target JSX component using the `ref` attribute.

    * The `reference hook` DOM node can be manipulated via the `current` member variable returned by the useRef hook.

* The `useRef` hook can also be used to store any `mutable value`. 

    * Similar to instance properties on a class instance.

    * This can be sued to provided a generic container.

    * This will persist through `re-renders`.

    * This can be used to hold a reference to properties defined inside functions to provide access to the external scope.

---

## Example

```javascript
import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput
```


---

## References

* [useRef API](https://reactjs.org/docs/hooks-reference.html#useref)

* __Youtube__

    * [useRef 1](https://www.youtube.com/watch?v=yCS2m01bQ6w&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=28)

    * [useRef 2](https://www.youtube.com/watch?v=yCS2m01bQ6w&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=28)
