//Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

//Importing App component
import App from "./App";

//Root Element Selector
const el = document.getElementById("root");

//Creating Root
const root = ReactDOM.createRoot(el);

//Rendering App
root.render(<App/>);