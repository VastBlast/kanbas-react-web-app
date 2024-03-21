import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";

function CounterRedux() {
    const { count } = useSelector((state: LabState) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter Redux</h2>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())} className="btn btn-success m-1"> Increment </button>
            <button onClick={() => dispatch(decrement())} className="btn btn-danger m-1"> Decrement </button>
        </div>
    );
}

export default CounterRedux;