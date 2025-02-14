import { useEffect, useState, useRef } from "react";
import AddTasks from "./components/AddTasks";
import ListTasks from "./components/ListTasks";
import "./stylization/style.css";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const fetchExecuted = useRef(false); // 🔹 Evita execução duplicada no StrictMode

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   if (fetchExecuted.current) return; // 🔹 Se já rodou, não executa de novo
  //   fetchExecuted.current = true; // 🔹 Marca como executado

  //   async function fetchTask() {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setTasks(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar as tarefas:", error);
  //     }
  //   }



  //   fetchTask();
  // }, []);

  function checkOnclickTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  }

  function removeTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function addNewTask(title, description) {
    if (!title.trim()) return;

    const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask = { id: newId, title, description, isCompleted: false };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="app-container">
      <h1 className="title">TASK MANAGER</h1>
      <AddTasks addNewTask={addNewTask} />
      <ListTasks
        propsTasks={tasks}
        checkOnclickTask={checkOnclickTask}
        removeTask={removeTask}
      />
    </div>
  );
}
export default App;