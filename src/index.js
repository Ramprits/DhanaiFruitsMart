// import React and ReactDOM library
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// create react component
const App = () => {
  return (
    <Fragment>
      <h2 style={{ color: "red" }}>Hi there! </h2>
      <p>Welcome to React world!</p>
    </Fragment>
  );
};

export default App;

// take the react component and show on the screen.

ReactDOM.render(<App />, document.querySelector("#root"));
