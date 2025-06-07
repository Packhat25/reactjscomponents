import './components.css';

import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => {setCount(count+1)};   
    const decrement = () => {
        count > 0 ? setCount(count-1) : setCount(count);
    };
    return(
    <div className= "counterContainer">
            <h1>Card Counter</h1>
            <h3>Count: {count}</h3>
        <div className="btnContainer">
        <button onClick={decrement}class="ctrButton">Decrement</button>
        <button onClick={increment} class="ctrButton">Increment</button>
        </div>
    </div>
    )
}

export default Counter;