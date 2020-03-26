import React from "react";
import "./styles.css";
import { render } from "react-dom";
const rootElement = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });

  }

  render() {
    return (
      <div class="App">
        <div>
          <button onClick={this.increaseCount.bind(this)}>
            Increase Count
          </button>
          <h2>{this.state.count}</h2>
        </div>
      </div>
    );
  }
}

let count = 0;

render(<App count={count++} />, rootElement);
