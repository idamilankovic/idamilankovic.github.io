// // import { useState } from "react"; filter list



// // function App() {
// //   const list = [
// //     "banana",
// //     "apple",
// //     "pineapple",
// //     "orange",
// //     "mango",
// //     "watermelon"
// //   ];
// //   const [filterList, setFilterList] = useState(list);

// //   const handleSearch = (event)=> {
// //     if (event.target.value === "") {
// //       setFilterList(list);
// //       return;
// //     }

// //   const filteredValues = list.filter(
// //     (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !==-1);
// //   setFilterList(filteredValues);

// //   }
// //   return (
// //     <div>
// //       <div>
// //       <h1>Select item from list:</h1>
// //       <input name="list" type="text" onChange={handleSearch}/>
// //       {filterList && filterList.map((item,index) => (
// //         <div key={index}>{item}</div>
// //       ))}
// //       </div>
        
// //     </div>
   
// //   );
// // }

// // export default App;


// // import { useState } from "react";  increase, decrease, reset

// // function App () {
// //   const [counter, setCounter] = useState(0);

// //   const increase = (event) => {
// //     setCounter(counter => counter + 10);
// //   }

// //   const decrease = (event) => {
// //     if(counter>0) {
// //       setCounter(counter => counter - 10);
// //     }
// //   }

// //   const reset = (event) => {
// //     setCounter(0);
// //   }

// //   return (
// //     <div>
// //       <h1>Counter</h1>
// //       <span>Current value is: {counter}</span>
// //       <div>
// //       <button onClick={increase}>+</button>
// //       <button onClick={decrease}>-</button>
// //       <button onClick={reset}>Reset</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


// // function App() {         odabir vrijednosti iz padajućeg izbornika i prikaz liste
// //   // const items = [
// //   //   "prvi",
// //   //   "drugi",
// //   //   "treći",
// //   //   "četvrti",
// //   //   "peti"
// //   // ];

// //   // const listItems = items.map((items) => <li>{items}</li>)
// //   const getInitialState = () => {
// //     const value = "1";
// //     return value;
// //   };

// //     const [value, setValue] = useState(getInitialState);

// //     const dropDownNumbers = (event) => {
// //       setValue(event.target.value);
// //     };

// //    
// //   return (
// //     <div>

// //       <div>
// //       <select onChange={dropDownNumbers}>
// //         <option value="1">1</option>
// //         <option value="2">2</option>
// //         <option value="3">3</option>
// //         <option value="4">4</option>
// //       </select>
// //       </div>
// //       <p>{`You selected ${value}`}</p>
// //     </div>
    
// //   );
// // 
// // }


// // export default App;

// // import React, { useState } from "react";
// // import Axios from "axios";
// // function App() {
// //   const [joke, setJoke] = useState("");

// //   const getJoke = () => {
// //     Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
// //       setJoke(response.data.setup + " ... " + response.data.punchline);
// //     })
// //   }

// //   return(
// //     <div>
// //       <button onClick={getJoke}>Click for joke</button>
// //       {joke}
// //     </div>
// //   );

// // }

// // export default App;


// // import React, { useState } from "react";     ispis temperature
// // import Axios from "axios";

// // function App() {
// //   const [temp, setTemp] = useState(0);


// //   const getTemp = () => {
// //     Axios.get("https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&city=Zagreb&start_date=2023-01-16&end_date=2023-01-24&key=c3679095f19f4a9dadfa02f59f24f360").then((response) => 
// //     response.data).then((json) => {
// //       setTemp(json.data[0].temp);
// //       console.log(json.data[0])
// //     })
// // }


// //   return (
// //     <div>
// //       <select onChange={getTemp}>
// //         <option defaultValue={''}>-----</option>
// //         <option value="current">Current</option>
// //         <option value="min_temp">Minimum temperature</option>
// //       </select>
// //       {temp}

// //     </div>
// //   );
// // }
// // export default App;


// // import React, { useState } from 'react';       login
// // import LoginForm from './Components/LoginForm';

// // function App() {

// //   const adminUser = {
// //     email: "admin@admin.com",
// //     password: "admin123"
// //   }

// //   const [user, setUser] = useState({name: "", email:""});
// //   const [error, setError] = useState("");

// //   const Login = (details) => {
// //     console.log(details);

// //     if (details.email == adminUser.email && details.password == adminUser.password){
// //       console.log("Logged in");
// //       setUser({
// //         name: details.name,
// //         email: details.email
// //       })
// //     }
// //     else {
// //       console.log("Details do not match")
// //       setError("Details do not match");
// //     }
// //   }

// //   const Logout = () => {
// //     setUser({name: "", 
// //             email:""})
// //   }

// //   return (
// //     <div className='App'>
// //       {(user.email !=="") ? (
// //       <div className='welcome'><h1>Welcome, <span>{user.name}</span></h1>
// //       <button onClick={Logout}>Logout</button>
// //       </div>) : (<LoginForm  Login = {Login} error={error}/>)}
// //     </div>
// //   );
// // }

// // export default App;

// // import React from "react";     linkovi, društvene mreže
// // import "./App.css"
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import About from './Components/About'
// // import Home from './Components/Home'
// // import Projects from './Components/Projects'
// // import PageNotFound from "./Components/PageNotFount";
// // import { useParams } from "react-router-dom";

// // function App() {

// //   return (
// //     <>
// //     <Router>
// //     <div style={{width: 100 + "vw", height:80, backgroundColor: "lightblue"}}>
// //       <Link to="/">Home</Link>
// //       <Link to="/about">About</Link>
// //       <Link to="/projects">Projects</Link>

// //     </div>
    
// //       <Routes>
// //         <Route path="/:name" element={<Home />}></Route>
// //         <Route path="/about" element={<About />}></Route>
// //         <Route path="/projects" element={<Projects />}></Route>
// //         <Route path="*" element={<PageNotFound />}></Route>
// //       </Routes>
// //     </Router>
// //     </>
// //   );
// // }

// // export default App;


// import 'bootstrap/dist/css/bootstrap.css';
// import React, { useState } from 'react';
// import Counters from './Components/counters';
// import Counter from './Components/counter';

// function App() {

//   //  const [counters, setCounters] = useState([
//   //   {id:1, value:0},
//   //   {id:2, value:1},
//   //   {id:3, value:1},
//   //   {id:4, value:4}
//   //  ]);
  

//     // const handleDelete = (counterId) => {      //handling event jer deletamo state koji je u originalu u ovoj komponenti; ideja je kad deletamo da kreiramo novi array bez tog člana
//     //   const updateCounters = counters.filter(c => c.id !== counterId);
//     //   setCounters(updateCounters);
//     // };

//     // const handleReset = (counterId) => {
//     //   const resetCounters = Object.values(counters).map(c => c.value = 0);
//     //   setCounters(resetCounters);
//     // }

//   //  const handleIncrement = () => {
//   //     setCounter(value + 1);
//   //     console.log("we clicked")
//   //   }

//     // const handleDecrement = () => {
//     //   setCounters(Object.values(counters) - 1);
//     // }
//     // function handleIncrement() {
//     //   setCounter(counter + 1);
//     // }
//     // function handleDecrement() {
//     //   setCounter(counter - 1);
//     // }
//     // function handleReset() {
//     //   setCounter(0);
//     // }
  

//   return (
//     <div>
//       {/* <NavBar /> */}
//       {/* <main className='container'>
//       <Counters {...counters} key={counters.id} value={counters.value} odDelete={handleDelete} onIncrement={handleIncrement} odDecrement={hadleDecrement}/>
//       </main> */}
//       <h1>hello</h1>
//       <Counter />
//     </div>
//     // <div>
//     //   <div>Hello counter </div>
//     //   <span>{counter.map(count => count.value)}
//     //   <ChildCounter 
//     //       {...counter}
//     //       onIncrement={handleIncrement} 
//     //       onDecrement={handleDecrement} 
//     //       onReset={handleReset} 
//     //       />
//     //       </span>
//     // </div>
//   )
// } 

// export default App;

// // import React from 'react';
// // import Books from './Components/Books'

// // function App () {
// //   const books = [
// //     {id:1, author:"Robert Kiyosaki", titles:"Rich and Poor dad"},
// //     {id:2, author:"Chethan Bhagath", title:"Revolution 20 Twenty"},
// //     {id:3, author:"Napoleon Hill", title:"Think and Grow Rich"},
// //     {id:4, author:"Ankur Warikoo", title:"Do Epic Shit"}
// //   ]



// //   return (
// //     <div>
// //       <Books books={books}/>
// //     </div>
// //   );
// // }

// // export default App;


import React, {Component} from 'react';
import Counters from './Components/counter';
import NavBar from './Components/navbar';

class App extends Component{
  render() {
    return (
      <div>
         <NavBar />
         <main className='container'>
         <Counters />
         </main>

     
      </div>
    );
  }
}

export default App;