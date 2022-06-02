import React, {PureComponent} from 'react';
class ClassClick extends PureComponent {
  render() {
    return (
        <div>
          <button onClick={this.clickHandler}>Class Click</button>
        </div>
    );
  }

  clickHandler() {
    console.log("class click")
  }
}
export default ClassClick;