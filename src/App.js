import React from 'react';
import logo from './logo.svg';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import './App.css';
import { Provider } from 'react-redux';


function App() {
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-link">Redux Boilerplate</h3>
          </header>
          <hr />
          <AddPost/>
          <hr />
          <Posts/>
        </div>
  );
}

export default App;
