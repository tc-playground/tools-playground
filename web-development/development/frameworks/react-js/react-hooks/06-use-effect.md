# React useEffect Hook

## Introduction

* The `useEffect` lets you perform _side effects_ in `function components`.

    * Updating the `DOM`.

    * API Endpoints - Fetching data or saving data.

    * Setting up `subscriptions`.

    * Setting up `timers`.

* When using `class components` _side effects_ are often performed int eh `life-cycle` methods.

    * `componentDidMount`, `componentDidUpdate`, `componentDidUnmount`, `componentWillAmount`.

* The `useEffect` hook is passed a `function` to execute after each DOM render.

    * The function is executed after the initial render then every update render.

* The `useEffect` can be passed `dependency array` of variables to __watch__. 

    * The `effect function` will only be updated if one of these values changes. 

* __Conditional Execution__ - The `useEffect` hook can also be passed a `dependency array` of arguments to support conditional execution. 

    * __On Change__ - The function will only be executed if the specified values in the dependency array have changed.

        * NB: Emulates `componentDidUpdate`.

    * __On Init__ - If an empty dependency array is passed, the function will only be executed on the initial render.

        * NB: Emulates `componentDidMount`.

    * __On Cleanup__ - The `effect function` can return a `clean-up function` that will be executed. 

        * This can be used to un-register `listeners`, `subscriptions`, `timers`, etc. 

        * NB: Emulates `componentWillAmount`/`componentDidUnmount`.


* The `useEffect` function is stored inside the `functional component` and has access to the `state` and `props` in the `functional component`.

* The `useState` and `useEffect` hooks can be used in conjunction to provide data loading and display functionality.

---

## Example

```Javascript
import React, { useState, useEffect } from 'react'

function EffectHookCounter() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')
    
    useEffect(() => {
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
    }, [count])
    
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default EffectHookCounter
```

---

## References

* [useEffect Overview](https://reactjs.org/docs/hooks-effect.html)

* [useEffect API](https://reactjs.org/docs/hooks-reference.html#useeffect)