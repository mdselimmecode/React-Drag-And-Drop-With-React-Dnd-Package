import { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask'
import LiskTasks from './components/LiskTasks'
import { Toaster } from 'react-hot-toast';
import { TouchBackend } from 'react-dnd-touch-backend';
import BothDeviceDndProvider from './components/BothDeviceDndProvider';


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
    <BothDeviceDndProvider backend={TouchBackend}>
      <Toaster />
      <div className='bg-slate-100 max-w-screen min-h-screen flex flex-col items-center pt-4'>
        <h1 className='text-center sm:text-lg md:text-3xl font-semibold mt-5'>Drag And Drop Task Todo</h1>
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>

        <LiskTasks tasks={tasks} setTasks={setTasks}></LiskTasks>

      </div>
    </BothDeviceDndProvider>
  )
}

export default App
