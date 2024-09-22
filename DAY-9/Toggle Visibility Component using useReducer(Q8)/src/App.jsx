import React, { useReducer } from 'react';
import { themeReducer, initialState } from './component/themeReducer';
import './App.css';

const App = () => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <div className={state.theme}>
            <h1>The current theme is {state.theme}</h1>
            <button onClick={toggleTheme}>
                Toggle to {state.theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </div>
    );
};

export default App;
