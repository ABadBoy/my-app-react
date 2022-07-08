import React from "react";

class VisibilityToggle extends React.Component{

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      visibility: false
    };
  }

  render() {
    return (
        <div>
          <h1>Hello World</h1>
          <button onClick={this.handleToggle}>
            {this.state.visibility ? 'hide' : 'show'}
          </button>
          {this.state.visibility && (
              <div>
                <p>Welcome to state!</p>
              </div>
          )}
        </div>
    );
  }


  handleToggle() {
    this.setState((preState) => {
      return {
        visibility: !preState.visibility
      };
    });
  }
}

export default VisibilityToggle;
