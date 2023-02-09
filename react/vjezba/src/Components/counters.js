// import React, { useState } from 'react';
// import Counter from './counter';

// function Counters () {
  
//     const [counters, setCounters] = useState([
//         {id: 1, value: 0}, 
//         {id: 2, value: 0}, 
//         {id: 3, value: 0}, 
//         {id: 4, value: 0}
//     ]);
 
// //     const handleDelete = (counterId) => {      //handling event jer deletamo state koji je u originalu u ovoj komponenti; ideja je kad deletamo da kreiramo novi array bez tog člana
// //     const updateCounters = counters.filter(c => c.id !== counterId);
// //         setCounters(updateCounters);
// //     };

// // //     const handleReset = (counterId) => {
// // //       const resetCounters = counters.map(c => c.value = 0);
// // // //         setCounters(resetCounters);
// // //     }

//   return (
//     <div>
//       {/* <button onClick={() => handleReset(counters.id)} className='btn btn-primary btn-sm m-2'>Reset</button> */}
//         {Object.values(counters).map((counters) => 
//             (<Counter {...counters} key={counters.id} value={counters.value} id={counters.id}>
//         {/* umjesto value i id možemo samo napisati counter={counter}, time dobivamo sve properties */}<h4>Counter #{counters.id}</h4>
//         </Counter>))}
//     </div>
//   )
// }
// export default Counters;

// // // // import React from 'react';
// // // // import childChildCounter from './counter';

// // // // function ChildCounter(props) {


// // // //   return (
// // // //     <div>
// // // //       <span>
// // // //         <childChildCounter 
// // // //       <button onClick={props.onIncrement} className='btn btn-primary btn-sm m-2'>Increment</button>
// // // //       <button onClick={props.onDecrement} className='btn btn-primary btn-sm m-2'>Decrement</button>
// // // //       <button onClick={props.onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
// // // //       </span>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ChildCounter;



import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      {id:1, value:0},
      {id:2, value:1},
      {id:3, value:1},
      {id:4, value:1}
    ]
  };

  handleDelete = (counterId) => {    //bilo je bez counterId, ali moramo znati točno koji se briše
    // console.log("event handler called")
    // console.log(counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  }

  handleReset = () => {     // reset button ide ovdje zato što želimo napraviti reset od svih countera
    const counters = this.state.counters.map(c => {    //trebaju nam svi counteri i onda mapiramo po njima i postavljamo value 0, i to dodajemo novoj varijabli
      c.value = 0;
      return c;
    });
    this.setState({counters})     //ovo ne radi jer nemamo single source of truth, u inspectu vidimo na react component da je value 0, ali se ne prikazuje na stranici (state je stari)
  };                              // poanta je da maknemo value iz countera jer je to Local State

  handleIncrement = counter => {    //ovo dodajemo tu jer smo maknuli Local State iz countera pa smo maknuli i ovu metodu otamo
    const counters = [...this.state.counters];    //kopiramo cijeli counters
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters});
  };

  render () {
    return (
      <div>
        <button onClick={this.handleReset} className='btn btn-primary btn-sm m-2'>Reset</button>
        {this.state.counters.map(counter => 
        // <Counter key={counter.id} value={counter.value}/>      ovako je bilo na početku, ali dodajemo naslove za svaki
        <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement}>
          {/* <h4>Counter #{counter.id}</h4>  ovako je bilo za naslov, ali rađe proslijedimo novi attribut to child id={counter.id}*/} 
          {/* ako dodamo novi property moramo ga tu dodati. Poanta je da možemo sve obuhvatiti sa counter={counter}, znači zamjenjuje value={counter.value} id={counter.id} */}
          {/* maknuli smo Local State iz counter.jsx pa smo metodu handleIncrement dodali ovdje i onda dodajemo novi attribute */}
        </Counter>
        )}
      </div>
    );
  }
}


export default Counters;