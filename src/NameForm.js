import { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', text: '' };
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: this.state.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Отправить" />
        </form>
        <h1>{this.state.value}</h1>
        {this.state.text && <h2>{this.state.text}</h2>}
      </div>
    );
  }
}

export default NameForm;
