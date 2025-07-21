import React, {useState} from 'react';

function UpdateObjectsComponent(){
    
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});
    
    const handleYearChange = (e) => {
        if(e.target.value <= new Date().getFullYear()){
            setCar({...car, year: e.target.value});
        }
    }

    const handleMakeChange = (e) => {
        setCar({...car, make: e.target.value});
    }

    const handleModelChange = (e) => {
        setCar({...car, model: e.target.value});
    }

    return(

        <>
            <div>
                <p>Your favorite car is: {car.make} {car.model}, {car.year}</p>

                <input type="number" value={car.year} onChange={(e) => handleYearChange(e)}/>
                <br />
                <input type="text" value={car.make} onChange={(e) => handleMakeChange(e)}/>
                <br />
                <input type="text" value={car.model} onChange={(e) => handleModelChange(e)}/>

            </div>
        </>
        
    );
}

export default UpdateObjectsComponent;