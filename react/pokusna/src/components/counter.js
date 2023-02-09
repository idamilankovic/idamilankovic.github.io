import React from 'react';

function Counter(props) {

  return (
    <div>
        <h4>Counter #{props.id}</h4>
        <span>
            {props.value === 0 ? 'Zero' : props.value}
        </span>
        <button onClick={() => props.onIncrement(props.counters)}>Increment</button>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default Counter;