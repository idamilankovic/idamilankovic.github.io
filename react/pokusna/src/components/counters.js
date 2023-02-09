



import React, {useState} from 'react';
import Counter from './counter';

function Counters() {

    const [counters, setCounters] = useState([
        {id: 1, value: 1},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ])

    const incrementValue = (counter) => {
        const updateCounters = [...counters];
        const index = updateCounters.indexOf(counter);
        updateCounters[index] = {...counter};
        updateCounters[index].value +=1;
        console.log(updateCounters[index])
        setCounters([...updateCounters])
    }

    const handleDelete = (counter) => {
        const updateCounters = counters.filter(c => c.id != counter)
        setCounters([...updateCounters])
    }

    const handleReset = () => {
        counters.map(c => {
            c.value = 0;
            return c;
        });
        setCounters([...counters])
    }

  return (
    <div> 
        <button onClick={handleReset}>Reset</button>
        {Object.values(counters).map((counters) => 
        <Counter {...counters} key={counters.id} value={counters.value} id={counters.id} counters={counters} onIncrement={incrementValue} onDelete={handleDelete}/>)}
    </div>
  )
}

export default Counters;