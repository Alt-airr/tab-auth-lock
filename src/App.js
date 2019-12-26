import React from 'react';
import './App.css';
import './styles.css'
import Header from "./components/header/Header";
import ClientsList from "./components/clientsList/ClientsList";

const App = (props) => {
  return (
      <div className='app-wrapper'>
          <Header/>
          <div className='app-wrapper-page'>
              <ClientsList state={props.state}
                           dispatch={props.dispatch}/>
          </div>
      </div>
  );
};

export default App;
