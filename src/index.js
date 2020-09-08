import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setInitialState, setNewRecord, updateNewRecord, deleteRecord, initialState, updateRecord, moveRecord } from './localStorage/localStorage';

export let rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App storageLength={initialState.storageLength} setInitialState={setInitialState} 
      setNewRecord={setNewRecord} updateNewRecord={updateNewRecord} deleteRecord={deleteRecord} 
      updateRecord={updateRecord} moveRecord={moveRecord}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
