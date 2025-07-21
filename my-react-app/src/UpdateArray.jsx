import React, {useState} from "react";

function UpdateArray(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    let newFood = "";

    function addElement() {
        setFoods([...foods, newFood]);
    }

    function deleteElement(index) {
        setFoods(foods.filter((_, i) => i != index));
    }

    const getFieldElement = (e) => {
        newFood = e.target.value;
    }

    const showItems = foods.map((food, index) => (
        <><li key={index}>{food} <button onClick={() => deleteElement(index)}>-</button></li></>
    ));

    return(
        <>
            <ul>
                {showItems}
            </ul>
            <input type="text" placeholder="New Fruit..." onChange={(e) => getFieldElement(e)}/>
            <button onClick={() => addElement()}>Add</button>
        </>
    );
}

export default UpdateArray;