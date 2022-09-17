import { useState } from "react"

export const Title = () => {
    const [message, setMessage] = useState('Welcome to Our Website')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick = {() => setMessage('Mason sucks fat wang')}>Click</button>
      
        </div>
    )
}
