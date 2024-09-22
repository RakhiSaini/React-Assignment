import React, { useReducer } from 'react';
import { FormReducer, initialState } from './component/FormReducer';
import './App.css';

const App = () => {
    const [state, dispatch] = useReducer(FormReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optionally reset the form after submission
        // dispatch({ type: 'RESET' });
    };

    return (
        <div className="form-app">
            <h1>Form Application</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {state.email && state.password ? (
                <div>
                    <div>User Email: {state.email}</div>
                    <div>User Password: {state.password}</div>
                </div>
            ) : (
                <div>No details found</div>
            )}
        </div>
    );
};

export default App;
