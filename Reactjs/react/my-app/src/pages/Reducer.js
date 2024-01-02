import { useReducer } from "react";
import { counterReducer } from "helpers/reducer";

function ReducerPage() {

    const [counter, counterDispatcher] = useReducer(counterReducer, { counter: 0 });


    return (
        <>
            <h2>Reducer Page</h2>
            <div className="btn-group"><button className="btn btn-danger" onClick={() => counterDispatcher({ type: 'MINUS' })}>-</button><button className="btn btn-secondary" onClick={() => counterDispatcher({ type: 'CONCAT', payload: 'is your number' })}>{counter.counter}</button><button onClick={() => counterDispatcher({ type: 'PLUSE' })} className="btn btn-success">+</button></div>
        </>
    );
}

export default ReducerPage;