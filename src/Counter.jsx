import { useState } from "react"


export default function Counter(){
    const[counter,setCounter] = useState(0);

    return (
        <>
            <h1>counter:{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>increase</button>
        </>
    )
}