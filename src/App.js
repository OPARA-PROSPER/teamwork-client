import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from './containers/login/login';
import Dashboard from './containers/dashboard/dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard/:id" component={Dashboard}/>
    </BrowserRouter>
  );
}

export default App;
