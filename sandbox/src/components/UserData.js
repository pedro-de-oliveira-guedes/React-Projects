import { useState } from 'react'

function DisplayName(params) {
    return (
        <div>
            <h2>
                Welcome, {params.name}!
            </h2>
            <DisplayAge />
            <TaskList />
        </div>
    );
}

export function DisplayAge(params) {
    const submitButtonStyle = { marginLeft: '15px' }

    const [age, setAge] = useState("X");

    function handleAgeChange(age) {
        setAge(age);
    }

    function handleAgeSubmit(ev) {
        ev.preventDefault();

        let today = new Date();
        let birthDate = document.getElementById("birth-date").value.split("-").reverse();
        let age = today.getFullYear() - birthDate[2];

        if ( Number(birthDate[1]) > today.getMonth() ||
            (Number(birthDate[1]) - today.getMonth() === 0 &&
             Number(birthDate[0]) > today.getDate()) )
            return handleAgeChange(age - 1);
        
        console.log(age);

        return handleAgeChange(age);
    }

    return (
        <div>
            <h3>
                You are {age} years old!
            </h3>

            <form onSubmit={ handleAgeSubmit }>
                <label htmlFor="birth-date">Choose your birth date:</label>
                <br /> <br />
                <input 
                    type="date" 
                    name="birth-date" 
                    id="birth-date" />
                <input type="submit" value="Confirmar!" style={submitButtonStyle} />
            </form>
        </div>
    );
}

export function TaskList(params) {
    const submitButtonStyle = { marginLeft: '15px' }
    // const completedTaskStyle = { color: 'red',
    //                              textDecoration: 'line-through' }
    // const notCompletedTaskStyle = { color: 'black',
    //                                 textDecoration: 'none'}

    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(["Fuck it!", "We ball!"]);

    function handleNewTask(ev) {
        ev.preventDefault();

        if (newTask === "") return;

        setTasks([...tasks, newTask]);
        setNewTask("");

        console.log(tasks);
    }

    function handleTaskChange(ev) {
        if (ev.target.checked) {
            ev.target.nextElementSibling.style.textDecoration = 'line-through';
            ev.target.nextElementSibling.style.color = 'red';
        }
        else {
            ev.target.nextElementSibling.style.color = 'black';
            ev.target.nextElementSibling.style.textDecoration = 'none';
        }
    }

    return (
        <div>
            <form onSubmit={ handleNewTask }>
                <label htmlFor="newTask"> Insira uma nova tarefa: </label>
                <input id="newTask"
                       name="newTask"
                       placeholder="Levar o cachorro para passear"
                       value={newTask}
                       onChange={ e => setNewTask(e.target.value) } />
                
                <input type="submit" value="Adicionar!" style={submitButtonStyle}></input>
            </form>

            { tasks.map( (task, index) => (
                <div>
                    <input type="checkbox" id={index} name={index} onChange={ handleTaskChange }/>
                    <label htmlFor={index}> {task} </label>
                </div>
            ))}
        </div>
    );
}

export default DisplayName;