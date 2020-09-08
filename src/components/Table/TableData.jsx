import React from 'react';
import TableRecord from './TableRecord/TableRecord';
import { createRef } from 'react';
import styles from './TableData.module.css';

const TableData = (props) => {

    let tableElements = props.records.map(r => <TableRecord 
        key={r.id} recordId={r.id} name={r.name} type={r.type} color={r.color} deleteRecord={props.deleteRecord} updateRecord={props.updateRecord}/>);

    let upButtonSwitch = false;

    let buttons = props.records.map(r => {
        return (
            <div className={styles.buttonsStr} key={r.id}>
                {r.id !== props.records.length-1
                ? <button className={styles.tableButtons} onClick={() => {props.moveRecord(r.id, r.id+1, false)}}>Down</button>
                : null}
                {upButtonSwitch !== false
                ? <button className={styles.tableButtons} onClick={() => {props.moveRecord(r.id, r.id-1, true)}}>Up</button>
                : upButtonSwitch = true}
                <button className={`${styles.tableButtons} ${styles.deleteButton}`} onClick={() => {props.deleteRecord(r.id)}}>Delete record</button>
            </div>
        )
    });

    let nameRef = createRef();
    let typeRef = createRef();
    let colorRef = createRef();

    let addNewRecord = () => {
        props.setNewRecord(nameRef.current.value, typeRef.current.value, colorRef.current.value);
        props.updateNewRecord("", "", "");
    }

    let onRecordChange = () => {
        props.updateNewRecord(nameRef.current.value, typeRef.current.value, colorRef.current.value);
    }

    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {tableElements}                    
                </tbody>
            </table>
            <div className={styles.tableButtonsWrapper}>
                {buttons}
            </div>
            <div className={styles.addFormWrapper}>
                To add a new record, please, enter data:
                <div className={styles.addFormItem}>
                    <span>Name: </span><input ref={nameRef} onChange={onRecordChange} placeholder="Enter name..." />
                </div>
                <div className={styles.addFormItem}>
                    <span>Type: </span><input ref={typeRef} onChange={onRecordChange} placeholder="Enter type..." />
                </div>
                <div className={styles.addFormItem}>
                    <span>Color: </span><input ref={colorRef} onChange={onRecordChange} placeholder="Enter color..." />
                </div>
                <button className={styles.addFormItem} onClick={addNewRecord}>Add new record</button>
            </div>
        </div>
    )
}

export default TableData;