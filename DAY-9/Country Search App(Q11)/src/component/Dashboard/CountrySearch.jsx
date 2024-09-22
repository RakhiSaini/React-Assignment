import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce';

const initialState = { countries: [], loading: false, error: null };

const countryReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, countries: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const CountrySearch = () => {
  const [state, dispatch] = useReducer(countryReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch({ type: 'FETCH_START' });
      axios.get(`https://api.first.org/data/v1/countries?search=${debouncedSearchTerm}`)
        .then(response => {
          dispatch({ type: 'FETCH_SUCCESS', payload: response.data.data });
        })
        .catch(error => {
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        });
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for countries..." />
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <ul>
        {state.countries.map(country => (
          <li key={country.alpha2Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySearch;
