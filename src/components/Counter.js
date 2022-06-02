import React, {PureComponent} from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
        <div>
          <div>Count - {this.state.count}</div>
          <button onClick={() => this.increment()}>Increment</button>
        </div>
    );
  }
  increment(){
    this.setState(
        (preState) => ({
          count: preState.count + 1
        })
    );
  }
}

export default Counter;