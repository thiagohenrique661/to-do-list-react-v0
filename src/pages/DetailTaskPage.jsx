import { useNavigate, useSearchParams } from "react-router-dom";


function DetailTask() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const taskTitle = searchParams.get("title");
    const taskDescription = searchParams.get("description");

    return <div className="container-principal-detailTask">
        <div className="content-detailTask">

            <button className="btn-back" onClick={() => navigate(- 1)}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <h1>Detalhes da tarefa</h1>

        </div>

        <div className="content-description">
            <h2>{taskTitle}</h2>
            <p>Descrição: {taskDescription}</p>
        </div>
    </div>

}
export default DetailTask;