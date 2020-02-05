import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from './containers/login/login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact to="/" component={Login}/>
    </BrowserRouter>
  );
}

export default App;
