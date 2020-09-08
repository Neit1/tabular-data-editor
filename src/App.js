import React from 'react';
import './App.css';
import TableContainer from './components/Table/TableContainer';

function App(props) {
  return (
    <div className="App">
      <TableContainer storageLength={props.storageLength} setInitialState={props.setInitialState}
        setNewRecord={props.setNewRecord} updateNewRecord={props.updateNewRecord} deleteRecord={props.deleteRecord}
        updateRecord={props.updateRecord} moveRecord={props.moveRecord} />
    </div>
  );
}


export default App;
