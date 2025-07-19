import React, {useState} from 'react';

function OnChangeComponent(){
    
    const [field, setField] = useState();
    
    const calculate = (e) => {
        let value = e.target.value;
        setField(value * value);
    }

    return(
        <>
        
            <input type="number" onChange={(e) => calculate(e)} />
            <p>Result: {field}</p>
        </>
    );

}

export default OnChangeComponent;