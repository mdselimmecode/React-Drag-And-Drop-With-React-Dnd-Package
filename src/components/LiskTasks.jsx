import { useEffect, useState } from "react";
import TodosSection from "./TodosSection";




const LiskTasks = ({ tasks, setTasks }) => {



    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const todosFilterData = tasks.filter((td) => td.status === "todo");
        const inProFilterData = tasks.filter((td) => td.status === "in_progress");
        const compleFilterData = tasks.filter((td) => td.status === "completed");

        setTodos(todosFilterData);
        setInProgress(inProFilterData);
        setCompleted(compleFilterData);

    }, [tasks]);

    const statuses = ["todo", "in_progress", "completed"];

    return (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-3 sm:mb-5 md:gap-32">
            {
                statuses.map((st, idx) => <TodosSection
                    inProgress={inProgress}
                    todos={todos}
                    completed={completed}
                    tasks={tasks}
                    setTasks={setTasks}
                    status={st}
                    key={idx}
                ></TodosSection>)
            }
        </div>
    );
};

export default LiskTasks;