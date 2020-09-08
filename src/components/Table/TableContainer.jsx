import React from 'react';
import TableData from './TableData';

class TableContainer extends React.Component {

    _records = [];

    componentDidMount() {
        this.props.setInitialState();
    }

    render() {
        this._records = [];
        let i = 0;
        for (let i = 0; i < this.props.storageLength; i++) {
            if (localStorage.getItem(i) != null) {
                this._records[i] = JSON.parse(localStorage.getItem(i));
            }
        }
        return <TableData records = {this._records} setNewRecord={this.props.setNewRecord} updateNewRecord={this.props.updateNewRecord} 
        deleteRecord={this.props.deleteRecord} updateRecord={this.props.updateRecord} moveRecord={this.props.moveRecord}/>
    }
}

export default TableContainer;