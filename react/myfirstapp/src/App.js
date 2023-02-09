import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


// function App(props) {
//   const currDate = new Date();

//   return (
//     <div>
//       <h1>Ida Milanković</h1>
//       <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
//       <h2>The date now is {currDate.toLocaleDateString()}.</h2>
//       <div>
//       <h1> Hello World!</h1>
//     </div>
//     </div>

    
//   );
// }

// export default App;



function App() {
  return (
    <div>
      <ol>
        <li>First line</li>
        <li>First line</li>
      </ol>
    </div>
  );
}

export default App;


// function App () {
//   const current = new Date();
//   return (
//     <div>
//       <h1>Hello World, my name is Ida.</h1>
//       <h1>Ovo je današnji datum {current.toLocaleDateString()}</h1>
//       <h1>Ovo je trenutno vrijeme {current.toLocaleTimeString()}</h1>

//     </div>
//   );
// }


//functional component
// const App = () => {
//   return<h1>Welcome</h1>
// }

// export default App;

// class component

// class App extends React.Component {
//   render() {
//     return<h1>Welcome</h1>;
//   };
// }
// export default App;

// ###########################funkcija za prenošenje propsa za styling teksta i klikanje buttona
// function App(props) {
//   const compStyle = {
//     color: props.color,
//     fontSize: props.size+"px"
//   };

//   return(
//     <div>
//       <span style={compStyle}>I am a sentence.</span>
//       <button onClick={props.clickEvent}>Click me!</button>
//       </div>
//   );
// }

// export default App;


//############################ klase za klikanje buttona i increment
// class App extends React.Component {
//   constructor(props) {
//     super(props)      // od React.Component clase zovemo sa props; this se referira na current object
//   }
//   state={counter :"0"};
//   incrementCounter = () => {
//     this.setState({counter:parseInt(this.state.counter)+1});
//   }
//   render() {
//     return <div><button onClick={this.incrementCounter}>Click me</button>;
//     <br/>{this.state.counter}</div>
//   }
// }
// export default App;

//#################### primjer state-a i ispisivanje 
// class TestComponent extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       id: 1,
//       name: "John",
//       age: 25
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.id}</p>
//         <p>{this.state.name}</p>
//         <p>{this.state.age}</p>
//         </div>

//     );
//   }
// }
// export default TestComponent;

//########################## ovo je za updating
// class App extends React.Component {
//   state = {counter:"0"};
//   incrementCounter =()=>this.setState({counter:parseInt(this.state.counter)+1});

//   shouldComponentUpdate() {
//     console.log("Inside sould update")
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("Inside getsnapshot");
//     console.log("previous counter is " + prevState.counter);
//     console.log("new counter is " + this.state.counter);
//     return prevState;
//   }

//   componentDidUpdate() {
//     console.log("Inside did update")
//   }

//   // componentDidMount=()=> {
//   //   console.log("Inside component did mount");
//   // } ovo je samo za stvaranje

//   render() {
//     console.log("Inside render method")
//     return (
//       <div>
//         <button onClick={this.incrementCounter}>Click me</button>
//         {this.state.counter}
//         This component is rendered.</div>
//     );
//   }
// }
// export default App;


//####################################### passing data od parenta do childa
//App je glavna, App Inner je child, mijenja se boja i ime koje upisujemo
// u App je definirano da se prikazuje ima i style
// class AppInner extends React.Component {
// constructor(props){
//   super(props)
// }
//   render() {
//       const txtStyle = {color:this.props.color}
//       return <span style={txtStyle}>{this.props.name}</span>};
//   }


// class App extends React.Component {
//   state = {childColor:"green", name:"John"}
//   changeColor = () => {
//     const newColor = document.querySelector("#colorbox").value;
//     this.setState({childColor:newColor})
//   }

//   changeName = () => {
//     const newName = document.querySelector("#namebox").value;
//     this.setState({name:newName})
//   }

//   render() {
//     console.log("Inside render")
//     return (
//       <div>
//         Color <input type="text" onChange={this.changeColor} id="colorbox"/>
//         <br/>
//         Name <input type="text" onChange={this.changeName} id="namebox"/>
//         <AppInner color={this.state.childColor} name={this.state.name}/>
//       </div>
//     );
//   }
// }

// export default App; 


//############################# passing data od child do parenta, to možemo samo preko callback
// class AppInner extends React.Component {
//   sendData = () => {
//     setInterval(() => {const currTime = Date();
//     this.props.parentCallback(currTime)
//   }, 1000);
//   }
//   componentDidMount() {
//     this.sendData();
//   }
//   render() {
//     return (
//       <div></div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {message: ""}
//   func1 = (childData) => {
//     this.setState({message:childData})
//   }
//   render () {
//     return (
//       <div>
//         <AppInner parentCallback= {this.func1}/>
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }
// }

// export default App;

//########################### promise server call, ispis usera
// class App extends React.Component {
//   state = {user:"None logged in"}

//   componentDidMount() {
//     const req = axios.get("<external server>");
//     req.then(resp => {
//       this.setState({user:resp.data.name});
//     })
//     .catch(err => {
//       this.setState({user:"Invalid user"});
//     })
//   }
//   render () {
//     return (
//       <div>Current user = {this.state.user}</div>
//     );
//   }
// }
// export default App;

//############################ Hook, koliko puta kliknemo na button, prikaz sa DOLAROM!!!!!!!!!
// function App() {
//   const [count, setCount] = useState(0);
//   useEffect (() => {
//     document.title = `You clicked ${count} times`;
//   })
//   return (
//     <div>
//       <p>You clicked {count} many times</p>
//       <button onClick={() => setCount(count+1)}>Click me</button>
//     </div>
//   )
// }
// export default App;

//############################## primjer forma, unos korisničkog imena i lozinke i ispis u konzoli
// export default function App() {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const handleSubmit = (event) => {
//     console.log(`Email: ${email} Password: ${password}`);
//     console.log({email})
//     event.preventDefault();
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Registration</h1>
//       <label>
//         Email:
//           <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
//       </label>
//       <label>
//         Password
//         <input name="password" type="password" value={password} onChange={e=> setPassword(e.target.value)} required/>
//       </label>
//       <button>Submit</button>
//     </form>
//   )
// }

