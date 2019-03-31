import * as React from 'react'
import { useState, Component } from 'react';
import * as ReactDOM from 'react-dom';
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
    </div>
  );
}


class App extends Component {

  render() {
    return (
      <Example />
    );
  }
}


ReactDOM.render(
  <App />, document.getElementById('app'));