import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers/index";
import Counter from "./components/counter";

var store = createStore(reducer);

function App() {
  return (
    <Counter
      value={store.getState()}
      increment={store.dispatch.bind(store, { type: "INCREMENT" })}
      decrement={store.dispatch.bind(store, { type: "DECREMENT" })}
    />
  );
}

function render() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
}
render();
store.subscribe(() => {
  render();
});
