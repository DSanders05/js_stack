import React, { useState } from 'react';

const List =()=>{

    let [newTask, setTask] = useState("");
    let [tasks, setTasks] = useState([]);
    let [completed, setCompleted] = useState(false)

    const createTask=(event)=>{
        event.preventDefault();
        let taskObj = {newTask, completed};
        setTasks([...tasks, taskObj]);
    }

    const toggleCompleteTask=(index)=>{
        let [...copyOfTasks] = tasks;
        copyOfTasks[index].completed = !copyOfTasks[index].completed;
        setTasks(copyOfTasks);
    }

    const deleteTask=()=>{
        // let [...copyOfTasks] = tasks;
        // setTasks(copyOfTasks);
    }

    return (
        <>
            <form className='mt-5 d-flex gap-2 justify-content-center' onSubmit={createTask}>
                <label htmlFor="">Enter Tasks Here: </label>
                <input type="text" name="" id="" onChange={(e)=>setTask(e.target.value)} />
                <input type="submit" value="Add Task" />
            </form>

            <div className="d-flex justify-content-center">
                <div>
                    {
                        tasks.map((task, index)=>{ //second parameter represents index position of iteration
                            return(
                                <div className='d-flex gap-2 mt-3'>
                                    <div key={index} className='d-flex w-auto align-middle' style={{height:"30px", width:"100px", backgroundColor:"grey", textDecoration:task.completed? 'line-through': 'none'}}>
                                        <p>{task.newTask}</p>
                                        <p><input type="checkbox" name="" id="" onClick={()=>toggleCompleteTask(index)} /></p>
                                    </div>
                                    <div>
                                        <input type="button" value="Delete" onClick={deleteTask} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default List;