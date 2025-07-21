import React, {useState} from "react";
import './ToDoList.css'

function ToDoList(){
    
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const handleChangeTask = e => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        setTasks(x => [...x, task]);
    }

    const deleteTask = index => {
        setTasks(tasks.filter((t, i) => i != index));
    }

    const taskUp = index => {
        const updatedTasks = [...tasks];
        if(index > 0){
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    const taskDown = index => {
        const updatedTasks = [...tasks];
        if(index < tasks.length - 1){
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const showTasks = tasks.map((t, i) => 
        <li key={i}>
            <p className="text">{t}</p> <button className="delete-button" onClick={() => deleteTask(i)}>Delete</button>
            <button className="move-button" onClick={() => taskUp(i)}>↑</button>
            <button className="move-button" onClick={() => taskDown(i)}>↓</button>
        </li>
    );

    return(
        <>
            <div className="main-div">
                <h1>To Do List</h1>
                <div className="addtasks-div">
                    <form>
                        <input type="text" placeholder="New Task..." onChange={handleChangeTask}/>
                        <button type="submit" onClick={(e) => addTask(e)}>Add</button>
                    </form>
                </div>
                <div className="tasks-div">
                    <ul>
                        {showTasks}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ToDoList;