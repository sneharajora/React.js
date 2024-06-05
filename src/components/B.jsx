import React from 'react'
import useOnline from "../hooks/useOnline"
import useCounter from '../hooks/useCounter';

 const B = () => {
     const {count,Decrement} = useCounter(1);
         
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={Decrement}>Dec</button>
    </div>
  )
};

export default B;

