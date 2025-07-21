import React, {useState} from 'react';

function Counter(){

    let [count=0, setCount] = useState();

    const incrementCounter = (increment) => {
        if(increment == true){;
            setCount(++count);
        }else{
            setCount(--count);
        }
    }

    return(
        <>
            <div className='counter-div'>
                <p>{count}</p>
            </div>
            <div className='counter-panel-div'>
                <button onClick={() => incrementCounter(false)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => incrementCounter(true)}>Increment</button>
            </div>
        </>
    );
}

export default Counter;