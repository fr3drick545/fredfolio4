import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export let UniversalScrollY = 0;
window.addEventListener("scroll", () => (UniversalScrollY = window.scrollY));

ReactDOM.render(<App />, document.querySelector("#root"));
