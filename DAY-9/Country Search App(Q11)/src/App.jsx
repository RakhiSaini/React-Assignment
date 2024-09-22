import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import CountrySearch from './component/Dashboard/countrySearch';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={CountrySearch} />
          <Route path="/" exact component={() => <h1>Welcome to Country Search App</h1>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
