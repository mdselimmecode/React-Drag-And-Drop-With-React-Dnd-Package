import { useDrag } from "react-dnd";
import toast from "react-hot-toast";


const Task = ({ task, setTasks, tasks }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));


    const handleDeleteTask = id => {
        try {
            const deleteAndRemainTask = tasks.filter((td) => td.id !== id);
            localStorage.setItem("tasks", JSON.stringify(deleteAndRemainTask));
            setTasks(deleteAndRemainTask);
            toast.success("Delete Task Successfully.");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div ref={drag} className={`p-5 mt-8 shadow-xl bg-white rounded-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"}`}>
            <p className="mb-3 text-base font-medium">{task.name}</p>
            <div className="flex justify-between mt-5 rounded-lg">
                <button onClick={() => handleDeleteTask(task.id)} className="bg-[#00C951] px-4 py-2 cursor-pointer text-base rounded-md text-white">
                    <span className="flex items-center">Delete <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg></span>
                </button>
                <button className="bg-[#AD46FF] px-4 py-2 cursor-pointer text-base rounded-md text-white">
                    <span className="flex items-center">
                        Edit
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Task;