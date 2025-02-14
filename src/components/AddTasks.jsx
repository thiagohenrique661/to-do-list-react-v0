import "../stylization/style.css";
import { useState } from "react";
import Input from "./Input";

function AddTasks({ addNewTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="container-inputs">
            <Input
                type="text"
                placeholder="Write a task"
                className="inputAddTask"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Write description task"
                className="inputAddTask"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button
                className="btn-AddTask"
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert("Fill in the fields")
                    }

                    if (title.trim()) {
                        addNewTask(title, description);
                        setTitle("");
                        setDescription("");
                    }
                }}
            >
                Add task
            </button>
        </div>
    );
}

export default AddTasks;
