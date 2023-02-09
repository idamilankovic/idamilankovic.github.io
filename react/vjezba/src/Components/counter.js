// // // import React, { useState} from 'react';


// // // function Counter(counters) {
// // //   // moramo proslijediti iz childrena counters da ih možemo čitati
// // //     const [value, setCount] = useState(counter.value);

// // //     function getBadgeClass() {
// // //       let classes = "badge m-2 badge-";
// // //       classes += (value === 0 ? "warning" : "primary");
// // //       return classes;
// // //     }
// // //     const handleIncrement = () => {
// // //       setCount(value + 1);
// // //     }
// // //     {console.log(value)}

// // //     // function handleDecrement(counterId) {
// // //     //   setCount(props.value - 1);
// // //     // }

// // //   return (
// // //     <div>   
// // //         {/* <React.Fragment>ovo zamjenjuje div koji ne radi ništa, možemo ga koristiti jer smo importali React */}
// // //         {counters.children} {/* ovako ispisujemo naslov <h4> iz komponente */}
// // //         <span className={getBadgeClass()}>{value === 0 ? "Zero" : value}</span>
// // //         <button onClick={() => handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> 
// // //         {/* Inače bi zvali samo handleIncrement, ali to je referenca na funkciju, ako želimo pozvati sa propertyjem onda moramo pozvati array function
// // //          */}
// // //         {/* <button onClick={() => props.handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
// // //         <button onClick={() => props.onDelete} className='btn btn-danger btn-sm m-2'>Delete</button> */}
// // //         {/* <ul>
// // //           {tags.map(tag => <li key={tag}>{tag}</li>)}
// // //         </ul> */}
// // //     </div>
// // //   );
// // // }
// // // export default Counter;


// // import React, {useState} from 'react';

// // function Counter(counter) {
// //   const [value, setCount] = useState(counter.value)


// //   function getBadgeClass() {
// //     let classes = "badge m-2 badge-";
// //     classes += (value === 0 ? "warning" : "primary");
// //     return classes;
// //   }

// //       const handleIncrement = () => {
// //       setCount(counter.value + 1);
// //     }

// //   return (
// //     <div>
// //       {console.log(counter.value)}
// //       <h1>hello2</h1>
// //       <span className={getBadgeClass()}>{counter.value === 0 ? "Zero" : counter.value}</span>
// //       <button onClick={() => handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
// //     </div>
// //   )
// // }

// // export default Counter;

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"

class Counter extends Component {
  // state = {
  //   // count: 0;          ovako je bilo prije, ali ako želimo da naslijedi value od counters.jsx onda stavljamo novu vrijednost count
  //   // count: this.props.value
  //   value: this.props.counter.value     //sad smo count preimenovali u value; i onda smo dodali counter jer smo promijenili attribute koje šaljemo 
  // };       ovo mičemo jer mičemo Local State iz countera i postavljamo da je ovo controlled component, znači samo uzima data i raisa event
// nakon što maknemo onda u ostatku koda moramo zamijeniti this.state


  //props uključuju data koje dajemo componentu, a state uključuje data koji je lokalni/privatmi tom componentu, drugi
  // components ne mogu pristupiti tom stateu
  // propse ne možemo mijenjati izvan te komponente

  // handleIncrement = (product) => {   //arrow function dodajemo, to je umjesto constructora, te funkcije nasljeđuju this!!!!!
  //   // console.log(product);       //moramo raditi constructor jer je this undefinied
  //   this.setState({value: this.state.value +1})
  // }        ovo smo maknuli zato što mičemo Local State

  render() {
    return (
      <div>
        {/* {this.props.children} ovak je bilo prije ali rađe koristimo proslijeđene atribute za naslov */}
        <h4>Counter #{this.props.counter.id}</h4> {/* i ovdje smo imali this.props.id, pa smo promijenili atribute pa je dodan counter */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
        {/* koristimo arrow function jer šaljemo prametar(kao za id) kad imamo više proizvoda */}
        {/* bilo je () => this.handleIncrement({id:1}), ali dodajemo props jer smo maknuli Local State. U parametar možemo staviti i props.counter.id, ali je ovako lakše, ovo je referenca na id */}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        {/* delete function ide u counters.jsx jer ovdje imamo samo value, ali button ide ovdje, raise event onDelete, i onda counters.jsx deleta */}
        {/* prvo je bilo samo this.props.onDelete, ali budući da trebamo poslati parametar za id onda ide arrow function sa parametrom this.props.id  */}
      {/* prvo je bilo this.props.onDelete(this.props.id), ali smo u conters.jsx zamijenili attribute koje šaljemo sa counter i onda mijenjamo na this.props.counter.id */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";  //mičemo Local State pa smo umjesto this.state.value dodali ovo
    return classes;
  }

  formatCount () {
    const {value} = this.props.counter;    //vrijednost od this.state.count, mičemo Local State pa smo umjesto this.state dodali ovo
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;