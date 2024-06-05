import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

 const Bgcolour = () => {
    const[bgcolor,setBgcolor] = useLocalStorage();
   
    const handleChange =(e)=>{
     setBgcolor(e.target.value);
    }
  return (
  <div style={{backgroundColor:'bgcolor' , minheighgt: '100vh',padding:'20px'}}>
    <h1>Background Color Picker</h1>
      <input type='color' value={bgcolor} onChange={handleChange}></input>      
  </div>
  )
};

export default Bgcolour ;

