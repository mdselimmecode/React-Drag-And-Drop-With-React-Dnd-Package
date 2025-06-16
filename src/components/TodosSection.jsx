import { useDrop } from "react-dnd";
import Header from "./Header";
import Task from "./Task";
import toast from "react-hot-toast";

const TodosSection = ({ status, inProgress, todos, completed, tasks, setTasks }) => {

    let text = "todo";
    let bg = "bg-slate-500";
    let tasksToMap = todos;

    if (status === "in_progress") {
        text = "in_progress";
        bg = "bg-purple-500";
        tasksToMap = inProgress;
    }

    if (status === "completed") {
        text = "completed";
        bg = "bg-green-500";
        tasksToMap = completed;
    };

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !monitor.isOver()
        })
    }));

    const addItemToSection = (id) => {
        console.log("dropped", id, status, isOver);
        setTasks((prev) => {
            const modifyTask = prev.map(tk => {
                if (tk.id === id) {
                    return { ...tk, status: status }
                }
                console.log(tk)
                return tk;
            });
            localStorage.setItem("tasks", JSON.stringify(modifyTask));
            toast.success(`Task status is ${status}`);
            return modifyTask;
        })
    };

    return (
        <div ref={drop} className={`p-10 rounded-md ${isOver ? "bg-slate-200" : "bg-white"}`}>
            {/* <h2 className="text-center uppercase text-xl font-bold">{status}</h2> */}
            <Header text={text} bg={bg} count={tasksToMap.length}></Header>
            {tasksToMap.length > 0 && tasksToMap.map((task) => <Task key={task.id} tasks={tasks} setTasks={setTasks} task={task} ></Task>)}
        </div>
    )
}

export default TodosSection;