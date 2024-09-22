import React, { useReducer } from 'react';
import { counterReducer, initialState } from './component/counterReducer';
import './App.css';

const App = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div className="counter-app">
            <h1>Current Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                Decrement
            </button>
        </div>
    );
};

export default App;
