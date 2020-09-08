import React from 'react';
import { ChromePicker } from "react-color";
import styles from "./ColorPicker.module.css";
import isColor from 'is-color';

class ColorPicker extends React.Component {

  state = {
    displayColorPicker: false,
    defaultColor: this.props.color,
    changeColor: this.props.color,
    color: {
      r: "0",
      g: "0",
      b: "0",
      a: "1"
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.color !== this.props.color)
      this.setState({
        defaultColor: this.props.color,
        changeColor: this.props.color,
      });
  }

  onHandleShowColorPicker = () => {
    this.setState({
      displayColorPicker: true
    });
    this.props.activateColorEditMode();
  }

  onHandleHideColorPicker = () => {
    this.setState({
      displayColorPicker: false
    });
    this.props.deactivateColorEditMode(this.state.changeColor);
  }

  onChangeColorPicker = (color) => {
    this.setState({
      color: color.rgb, 
      changeColor: color.hex
    });
  }

  render() {
    return (
        <div className={styles.colorPickerContainer}>
          {isColor(this.state.changeColor)
            ? <div className={styles.colorPickerColorBackground}
              style={{ backgroundColor: this.state.changeColor }} />
            : null
          }
          <input
            readOnly
            className={styles.colorPickerText}
            type="text"
            name="color-picker-text"
            value={this.state.changeColor}
            onClick={this.onHandleShowColorPicker}
          />
          {this.state.displayColorPicker
            ? <div className={styles.colorPickerPalette}>
                <div className={styles.colorPickerCover} onClick={this.onHandleHideColorPicker} />
                <ChromePicker color={this.state.color} onChange={this.onChangeColorPicker} />
              </div>
            : null}
        </div>
      )
    }
}

export default ColorPicker;