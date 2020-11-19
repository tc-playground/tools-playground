# React useState Hook

## Introduction

* The `useState` hook can be used to manage a piece state: `primitive`, `array`, `object`.

* The `useState` hook takes an `initial value` and returns the `state value` and an `state setter function`.

* The `state setter function` can be use to set the state.

* The `state` and `setter` can be used in combination to update the state.

* The `setter` function can be bound to `event handlers`.

---

## Example

```javascript
import React, { useState } from 'react'

function StateHookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Count: {count}</button>
        </div>
    )

}

export default StateHookCounter
```

---

## References

* [useState Overview](https://reactjs.org/docs/hooks-state.html)

* [useState API](https://reactjs.org/docs/hooks-reference.html#usestate)

* __Youtube__

    1. [useState](https://www.youtube.com/watch?v=lAW1Jmmr9hc&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=2)

    2. [useState with previous state](https://www.youtube.com/watch?v=d0plTCQgsXs&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=3)

    3. [useState with object](https://www.youtube.com/watch?v=-3lL8oyev9w&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=4)

    4. [useState with array](https://www.youtube.com/watch?v=RZ5wKYbOM_I&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=5)




