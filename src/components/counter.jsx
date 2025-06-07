import './components.css';
import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    {/* what heppens when u click a button */}
    const increment = () => {setCount(count+1)};   
    {/* ternary operator to check if less than 0 so it wont go negative */}
    const decrement = () => {count > 0 ? setCount(count-1) : setCount(count); };
    return(
    <div className= "counterContainer">
            <h1>A counter of some sorts</h1>
            <h3>Count: {count}</h3>
        <div className="btnContainer">
            {/* event handler for the buttons */}
        <button onClick={decrement}class="ctrButton">-</button>
        <button onClick={increment} class="ctrButton">+</button>
        </div>
    </div>
    )
}

export default Counter;