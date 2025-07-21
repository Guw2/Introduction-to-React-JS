import React, {useState} from "react";

function UpdateArrayOfObjects(){
    
    const [students, setStudents] = useState([{name: "Peter", age: 15}, {name: "Gabe", age: 14}]);
    
    const deleteStudent = (index) => {
        setStudents(students.filter((_, i) => i != index))
    }

    const addStudent = () => {
        const n = document.getElementById("addstudent-name-field").value;
        const a = document.getElementById("addstudent-age-field").value;
        setStudents(x => [...x, {name: n, age: a}]);
    }

    const listItems = students.map((student, index) =>
         <li key={index}> 
            {student.name} | {student.age} <button onClick={() => deleteStudent(index)}>-</button>
         </li>
    );
    
    return(
        <>
            <ul>
                {listItems}
            </ul>
            <input type="text" id="addstudent-name-field" placeholder="Name..."/>
            &nbsp;<input type="number" id="addstudent-age-field" placeholder="Age..."/>
            &nbsp;<button onClick={addStudent}>Add</button>
        </>
    );
}

export default UpdateArrayOfObjects;