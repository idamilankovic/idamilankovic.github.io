import React from 'react';
import ReactDOM from 'react-dom/client';
//import AppInner from './App';
import App from './App';

//import TestComponent from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// function ref() {
//   root.render(<App/>);
// }

// const text = ReactDOM.createRoot(document.querySelector("#text"));
// function hello() {
//   text.render(<App/>);
// }

// setInterval(hello, 1000);



// sentence();

// ReactDOM.render(
// <React.StrictMode>
//   <App color="red" size="25" clickEvent={()=>(alert("You clicked me"))}/>
// </React.StrictMode>,
// document.querySelector("#root"));


//################## ispis teksta i gumb sa alert, App(props)
// ovo su funkcije
// const text = document.querySelector("#root"); // odabiremo root preko id
// const root = ReactDOM.createRoot(text); // create root od odabranom diva
// root.render(<App color="red" size="25" clickEvent = {() =>(alert("You clicked me"))}/>) // renderaj taj root tako da poziva App kojoj šalje argumente


//####################### ovo su klase za gumb i increment
// const button = document.querySelector("#root");
// const root = ReactDOM.createRoot(button);
// root.render(<App />);

const state = document.querySelector("#root");
const root = ReactDOM.createRoot(state);
root.render(<App />);