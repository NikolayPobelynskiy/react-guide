const ReactDOM = require("react-dom/client");
const React = require("react");
const Counter = require("./components/counter.jsx");
const BtnCounter = require("./components/btnCounter.jsx");
const Header = require("./components/header.jsx");

const header = "Рассказ";

// https://metanit.com/web/react/2.9.php
ReactDOM.createRoot(document.getElementById("header")).render(<div> <Header text={header}/> </div>);
ReactDOM.createRoot(document.getElementById("counter")).render(<div> <Counter/> </div>);
ReactDOM.createRoot(document.getElementById("btn-counter")).render(<div> <BtnCounter/> </div>);