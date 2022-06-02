import React from 'react';

function FunctionClick() {
  function clickHandler() {
    console.log("click")
  }

  return (
      <div>
        <button onClick={clickHandler}>FunctionClick</button>
      </div>
  );
}

export default FunctionClick