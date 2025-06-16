import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';


const CreateTask = ({ setTasks }) => {

    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo"  //also will be inprogress or done
    });



    const handleTaskFormSubmit = (e) => {
        e.preventDefault();
        console.log(task)
        if (task.name.length < 3) return toast.error("A task must have more than 3 character");
        if (task.name.length > 100) return toast.error("task must have not more than 100 character");
        setTasks((prev) => {
            const newList = [...prev, task];
            localStorage.setItem("tasks", JSON.stringify(newList));
            return newList;
        })
        toast.success("Task Created Successfully");

        setTask({
            id: "",
            name: "",
            status: "todo"
        })
    };


    return (
        <div className="my-8" onSubmit={handleTaskFormSubmit}>
            <h1 className="mb-2">Create Task</h1>
            <form>
                <input value={task.name} type="text" onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })} placeholder="Write your task" className="border-2 rounded-md mr-4 w-64 py-2 px-2 border-slate-400 bg-slate-100" />
                <button className="bg-cyan-500 rounded-md px-4 py-3 text-white">Create</button>
            </form>
        </div>
    );
};

export default CreateTask;