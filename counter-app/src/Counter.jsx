import React, {useState} from 'react';

function Counter(){

    let [count=0, setCount] = useState();

    const increment = () => {
        setCount(++count);
    }

    const decrement = () => {
        setCount(--count);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <>
            <div className='counter-div'>
                <p>{count}</p>
            </div>
            <div className='counter-panel-div'>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
}

export default Counter;