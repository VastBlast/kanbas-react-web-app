// import PassingFunctions from "./PassingFunctions";
// import EventObject from "./EventObject";
// import Counter from "./Counter";
// import BooleanStateVariables from "./BooleanStateVariables";
// import StringStateVariables from "./StringStateVariables";
// import DateStateVariable from "./DateStateVariable";
// import ObjectStateVariable from "./ObjectStateVariable";
// import ArrayStateVariable from "./ArrayStateVariable";
// import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import AddRedux from "./ReduxExamples/AddRedux";
import TodoList from "./ReduxExamples/todos/TodoList";

function Assignment4() {
    // function sayHello() {
    //     alert("Hello");
    // }
    return (
        <div>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <AddRedux />
            <TodoList />
            {/* <PassingFunctions theFunction={sayHello} /> */}

            {/* <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent /> */}
        </div>
    );
}
export default Assignment4;