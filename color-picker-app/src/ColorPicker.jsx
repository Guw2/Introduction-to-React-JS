import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    const changeColor = (e) => {
        setColor(e.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input value={color} type="color" onChange={(e) => changeColor(e)}/>
        </div>
    );
}

export default ColorPicker;