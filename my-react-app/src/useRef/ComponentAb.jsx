import React, {useEffect, useRef} from "react";

function ComponentA(){

    let ref = useRef(0);

    useEffect(() => {
        console.log("Component Rendered");
    }, []);

    function handeClick(){
        ref.current++;
        console.log(ref.current);
    }

    return(
        <>
            <button onClick={handeClick}>
                Click Me!
            </button>
        </>
    );
}

export default ComponentA;