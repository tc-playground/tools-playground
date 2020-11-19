import React, { useState, useEffect } from 'react'

function EffectHookCounter() {
    const [count, setCount] = useState(0)
    
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