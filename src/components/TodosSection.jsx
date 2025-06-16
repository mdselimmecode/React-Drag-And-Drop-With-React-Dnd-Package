import Header from "./Header";
import Task from "./Task";

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
    }

    return (
        <div className="bg-white p-10 rounded-md">
            {/* <h2 className="text-center uppercase text-xl font-bold">{status}</h2> */}
            <Header text={text} bg={bg} count={tasksToMap.length}></Header>
            {tasksToMap.length > 0 && tasksToMap.map((task) => <Task key={task.id} tasks={tasks} setTasks={setTasks} task={task} ></Task>)}
        </div>
    )
}

export default TodosSection;