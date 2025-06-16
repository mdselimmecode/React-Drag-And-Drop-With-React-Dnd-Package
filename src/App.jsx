import { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask'
import LiskTasks from './components/LiskTasks'
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks) {
      return;
    }
    else {
      const parseTask = JSON.parse(tasks);
      setTasks(parseTask);
    }
  }, []);


  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className='bg-slate-100 max-w-screen min-h-screen flex flex-col items-center gap-16 pt-4'>
        <h1 className='text-center text-3xl font-semibold'>Drag And Drop Task Todo</h1>
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>

        <LiskTasks tasks={tasks} setTasks={setTasks}></LiskTasks>

      </div>
    </DndProvider>
  )
}

export default App
