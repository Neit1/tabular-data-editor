import {rerender} from './../index';

export let initialState = {
    records: [
        { id: 0, name: 'name1', type: 'main', color: '#f4f4f4' },
        { id: 1, name: 'name2', type: 'side', color: '#f8f8f8' },
        { id: 2, name: 'name3', type: 'side', color: '#a4a4a4' },
        { id: 3, name: 'name4', type: 'main', color: '#a8a8a8' },
        { id: 4, name: 'name5', type: 'main', color: '#c5c3c7' }    
    ],
    newRecord: {
        id: -1,
        name: "",
        type: "",
        color: ""
    },
    storageLength: localStorage.length
}

export const setInitialState = () => {
    if (localStorage.length === 0) {
        for (let i = 0; i < initialState.records.length; i++) {
            localStorage.setItem(i, JSON.stringify(initialState.records[i]));
        }
        initialState.storageLength = localStorage.length;
    }
    else {
        for (let value in localStorage) {
            if (initialState.storageLength < value && !isNaN(value)) {
                initialState.storageLength = value;
            }
        }
        initialState.storageLength++;
    }
    rerender();
}

export const setNewRecord = (newName, newType, newColor) => {
    initialState.newRecord.id = initialState.storageLength;
    initialState.newRecord.name = newName;
    initialState.newRecord.type = newType;
    initialState.newRecord.color = newColor;
    localStorage.setItem(initialState.storageLength, JSON.stringify(initialState.newRecord));
    initialState.storageLength++;
    rerender();
}

export const updateNewRecord = (newName, newType, newColor) => {
    initialState.newRecord.name = newName;
    initialState.newRecord.type = newType;
    initialState.newRecord.color = newColor;
}

export const deleteRecord = (recordId) => {
    localStorage.removeItem(recordId);
    rerender();
}

export const updateRecord = (recordId, newName, newType, newColor) => {
    let item = JSON.parse(localStorage.getItem(recordId));
    item.name = newName;
    item.type = newType;
    item.color = newColor;
    localStorage.setItem(recordId, JSON.stringify(item));
}

export const moveRecord = (recordId1, recordId2, up) => {
    while (localStorage.getItem(recordId2) === null) {
        if (up) {
            recordId2--;
        }
        else recordId2++;
    }
    let item1 = JSON.parse(localStorage.getItem(recordId1));
    let item2 = JSON.parse(localStorage.getItem(recordId2));
    let tmpId = item1.id;
    item1.id = item2.id;
    item2.id = tmpId;
    localStorage.setItem(recordId2, JSON.stringify(item1));
    localStorage.setItem(recordId1, JSON.stringify(item2));
    rerender();
}