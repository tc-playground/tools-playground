# React useMemo Hook


## Introduction

* The `useMemo` hook is a _higher order_ hook that prevents a `functional component` re-rendering when it's `props`/`state` have not changed.

* The `useMemo` hook allows us to cache long running functions and use a `dependency array` to allow react determine when the memoised result needs to be recalculated.

* The `useMemo` hook `caches the result or a function` and only recalculates it when a dependency has changed.

    * NB: The `useCallback` hook `cache the function itself` and only recalculates it when a dependency has changed.

---

## Example

```javascript
import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

	return (
		<div>
			<div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
			</div>
			<div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter
```


---

## References

* [useMemo API](https://reactjs.org/docs/hooks-reference.html#usemeo)

* __Youtube__

    * [useMemo](https://www.youtube.com/watch?v=qySZIzZvZOY&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=27)
