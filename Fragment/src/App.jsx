import React from "react";
import "./App.css";

function App() {
  return (
    // Adds a real <div> to the DOM, useful for styling/layout
    <div className="card">
      <h2>Title</h2>
      <p>Description</p>
    </div>

    // No extra DOM node, useful for grouping
    // <React.Fragment>
    //   <td>Row 1</td>
    //   <td>Row 2</td>
    // </React.Fragment>

    // Short syntax, no extra DOM node
    // <>
    //   <li>Item 1</li>
    //   <li>Item 2</li>
    // </>
  );
}

export default App;
