// export const initialState = {
//     collegeName: '',
//     establishmentYear: '',
//     address: {
//         building: '',
//         street: '',
//         city: '',
//         state: '',
//         pinCode: '',
//         landmark: ''
//     },
//     coursesOffered: [],
// };

// export const formReducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_FIELD':
//             return { ...state, [action.field]: action.value };
//         case 'SET_ADDRESS':
//             return { 
//                 ...state, 
//                 address: { ...state.address, [action.field]: action.value }
//             };
//         case 'SET_COURSES':
//             return { ...state, coursesOffered: action.value.split(',') };
//         case 'RESET':
//             return initialState;
//         default:
//             throw new Error('Invalid action type');
//     }
// };


                // OR// src/formReducer.js

export const initialState = {
    collegeName: '',
    establishmentYear: '',
    address: {
        building: '',
        street: '',
        city: '',
        state: '',
        pinCode: '',
        landmark: ''
    },
    coursesOffered: [],
    error: ''
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COLLEGE_NAME':
            return { ...state, collegeName: action.payload, error: '' };
        case 'SET_ESTABLISHMENT_YEAR':
            return { ...state, establishmentYear: action.payload, error: '' };
        case 'SET_ADDRESS':
            return { ...state, address: { ...state.address, [action.payload.field]: action.payload.value }, error: '' };
        case 'SET_COURSES_OFFERED':
            return { ...state, coursesOffered: action.payload, error: '' };
        case 'RESET':
            return initialState;
        default:
            throw new Error('Invalid action type');
    }
};
