
import React from 'react'
import loading from '../components/loading'
import fatalError from './500'
import excercises from './exercises'
import dog from '../dogs/dog'
 

const { data, loading, error } = dog('https://api.thedogapi.com/v1/images/search')

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
