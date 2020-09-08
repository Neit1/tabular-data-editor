import React from 'react';
import styles from './TableRecord.module.css';
import ColorPicker from '../../common/ColorPicker/ColorPicker';

class TableRecord extends React.Component {

    state = {
        nameEditMode: false,
        typeEditMode: false,
        colorEditMode: false,
        name: this.props.name,
        type: this.props.type,
        color: this.props.color
    }

    activateNameEditMode = () => {
        this.setState({
            nameEditMode: true
        });
    }

    deactivateNameEditMode = () => {
        this.setState({
            nameEditMode: false
        });
        this.props.updateRecord(this.props.recordId, this.state.name, this.state.type, this.state.color);
    }

    activateTypeEditMode = () => {
        this.setState({
            typeEditMode: true
        });
    }

    deactivateTypeEditMode = () => {
        this.setState({
            typeEditMode: false
        });
        this.props.updateRecord(this.props.recordId, this.state.name, this.state.type, this.state.color);
    }

    activateColorEditMode = () => {
        this.setState({
            colorEditMode: true
        });
    }

    deactivateColorEditMode = (color) => {
        this.setState({
            colorEditMode: false
        });
        this.props.updateRecord(this.props.recordId, this.state.name, this.state.type, color);
    }

    onNameChange = (e) => {
        this.setState({
            name: e.currentTarget.value
        });
    }

    onTypeChange = (e) => {
        this.setState({
            type: e.currentTarget.value
        });
    }

    onColorChange = (e) => {
        this.setState({
            color: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.name !== this.props.name || prevProps.type !== this.props.type || prevProps.color !== this.props.color)
        this.setState({
            name: this.props.name,
            type: this.props.type,
            color: this.props.color
        });
    }

    render() {
        return (
        <>
            <tr>
                <td className={styles.editField}>
                    {!this.state.nameEditMode
                        ? <span onClick={this.activateNameEditMode}>{this.state.name}</span>
                        : <input onChange={this.onNameChange} autoFocus={true} onBlur={this.deactivateNameEditMode} value={this.state.name}/>
                    }
                </td>
                <td className={styles.editField}>
                    {!this.state.typeEditMode
                        ? <span onClick={this.activateTypeEditMode}>{this.state.type}</span>
                        : <input onChange={this.onTypeChange} autoFocus={true} onBlur={this.deactivateTypeEditMode} value={this.state.type}/>
                    }
                </td>
                <td>
                    <ColorPicker color={this.state.color}
                    activateColorEditMode={this.activateColorEditMode}
                    deactivateColorEditMode={this.deactivateColorEditMode}/>
                </td>
            </tr>
        </>
    )}
}

export default TableRecord;