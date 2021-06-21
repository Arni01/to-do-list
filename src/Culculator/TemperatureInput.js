import { Component } from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фарингейта',
};

class TemperatureInput extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { temperature: '' };
  // }

  handleChange = ({ target }) => {
    this.props.onTemperatureChange(target.value);
  };

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
