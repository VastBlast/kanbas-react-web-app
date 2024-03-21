import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";


function TodoForm() {
    const { todo } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            <button onClick={() => dispatch(addTodo(todo))} className="btn btn-success m-1"> Add </button>
            <button onClick={() => dispatch(updateTodo(todo))} className="btn btn-primary m-1"> Update </button>
            <input
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            />
        </li>
    );
}
export default TodoForm;

