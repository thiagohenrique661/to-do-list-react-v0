import { useNavigate } from "react-router-dom";
import "../stylization/style.css";

function ListTasks({ propsTasks, checkOnclickTask, removeTask }) {
    const navigate = useNavigate();

    function clickSeeDetailsTask(task) {
        navigate(`/detailTask?title=${encodeURIComponent(task.title)}&description=${encodeURIComponent(task.description)}`);

    }

    return (
        <ul className="title">
            {propsTasks.map((task) => (
                <li key={task.id}>
                    <button
                        onClick={() => checkOnclickTask(task.id)}
                        className={`btn-task ${task.isCompleted ? "completed-text" : ""}`}
                    >
                        {task.title}
                    </button>

                    <button className="icon-right" onClick={() => clickSeeDetailsTask(task)}>
                        <i className="fa-solid fa-chevron-right" ></i>
                    </button>

                    <button className="icon-right" onClick={() => removeTask(task.id)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ListTasks;
