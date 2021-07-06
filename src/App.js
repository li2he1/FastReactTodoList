import React from "react";
import "./styles.css";
import List from "./List";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  onChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ term: "", items: [...this.state.items, this.state.term] });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <input value={this.state.term} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
        <h2>Edit to see some magic happen!</h2>
      </div>
    );
  }
}
