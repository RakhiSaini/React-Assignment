// import React, { useReducer } from 'react';
// import { formReducer, initialState } from './component/formReducer';
// import './App.css';

// const App = () => {
//     const [state, dispatch] = useReducer(formReducer, initialState);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Submitted Data:', state);
//         dispatch({ type: 'RESET' }); // Reset after submission
//     };

//     return (
//         <div className="college-form-app">
//             <h1>Add College</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="College Name"
//                     value={state.collegeName}
//                     onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'collegeName', value: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="number"
//                     placeholder="Establishment Year"
//                     value={state.establishmentYear}
//                     onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'establishmentYear', value: e.target.value })}
//                     required
//                 />
//                 <h3>Address Details</h3>
//                 {['building', 'street', 'city', 'state', 'pinCode', 'landmark'].map((field) => (
//                     <input
//                         key={field}
//                         type="text"
//                         placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                         value={state.address[field]}
//                         onChange={(e) => dispatch({ type: 'SET_ADDRESS', field, value: e.target.value })}
//                     />
//                 ))}
//                 <input
//                     type="text"
//                     placeholder="Courses Offered (comma-separated)"
//                     onChange={(e) => dispatch({ type: 'SET_COURSES', value: e.target.value })}
//                 />
//                 <button type="submit">Submit</button>
//             </form>

//             {state.collegeName && (
//                 <div>
//                     <h2>College Details</h2>
//                     <p>College Name: {state.collegeName}</p>
//                     <p>Establishment Year: {state.establishmentYear}</p>
//                     <p>Address: {`${state.address.building}, ${state.address.street}, ${state.address.city}, ${state.address.state} - ${state.address.pinCode} (${state.address.landmark})`}</p>
//                     <p>Courses Offered: {state.coursesOffered.join(', ')}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;


            // or

// src/App.js
import React, { useReducer } from 'react';
import { formReducer, initialState } from './component/formReducer';
import './App.css';

const App = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Display the submitted data
        console.log('Form submitted:', state);
        // Optionally reset the form after submission
        // dispatch({ type: 'RESET' });
    };

    return (
        <div className="college-form-app">
            <h1>Add College</h1>
            {state.error && <div className="error">{state.error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>College Name:</label>
                    <input
                        type="text"
                        value={state.collegeName}
                        onChange={(e) => dispatch({ type: 'SET_COLLEGE_NAME', payload: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Establishment Year:</label>
                    <input
                        type="number"
                        value={state.establishmentYear}
                        onChange={(e) => dispatch({ type: 'SET_ESTABLISHMENT_YEAR', payload: e.target.value })}
                        required
                    />
                </div>
                <h3>Address Details</h3>
                <div>
                    <label>Building:</label>
                    <input
                        type="text"
                        value={state.address.building}
                        onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: { field: 'building', value: e.target.value } })}
                    />
                </div>
                <div>
                    <label>Street:</label>
                    <input
                        type="text"
                        value={state.address.street}
                        onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: { field: 'street', value: e.target.value } })}
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        value={state.address.city}
                        onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: { field: 'city', value: e.target.value } })}
                    />
                </div>
                <div>
                    <label>State:</label>
                    <input
                        type="text"
                        value={state.address.state}
                        onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: { field: 'state', value: e.target.value } })}
                    />
                </div>
                <div>
                    <label>Pincode:</label>
                    <input
                        type="text"
                        value={state.address.pinCode}
                        onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: { field: 'pinCode', value: e.target.value } })}
                    />
                </div>
                <div>
                    <label>Landmark:</label>
                    <input
                        type="text"
                        value={state.address.landmark}
                        onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: { field: 'landmark', value: e.target.value } })}
                    />
                </div>
                <div>
                    <label>Courses Offered (comma-separated):</label>
                    <input
                        type="text"
                        onChange={(e) => dispatch({ type: 'SET_COURSES_OFFERED', payload: e.target.value.split(',') })}
                    />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            </form>

            {state.collegeName && state.establishmentYear && (
                <div>
                    <h2>College Details</h2>
                    <div>College Name: {state.collegeName}</div>
                    <div>Establishment Year: {state.establishmentYear}</div>
                    <div>Address:</div>
                    <div>Building: {state.address.building}</div>
                    <div>Street: {state.address.street}</div>
                    <div>City: {state.address.city}</div>
                    <div>State: {state.address.state}</div>
                    <div>Pincode: {state.address.pinCode}</div>
                    <div>Landmark: {state.address.landmark}</div>
                    <div>Courses Offered: {state.coursesOffered.join(', ')}</div>
                </div>
            )}
        </div>
    );
};

export default App;
