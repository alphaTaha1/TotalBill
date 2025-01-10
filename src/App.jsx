import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './App.css'
import { numberContext } from './context';
import { Button } from 'antd';
import { motion } from 'framer-motion';
function App() {

const navigate = useNavigate();
  
  const {number, setNumber} = useContext(numberContext);

  const handleSubmit = () => {
   setNumber(Number(number));  
      
        navigate("/Entries");
  
};

  const handleChange = (event) =>{setNumber(event.target.value)
  }


return(

<>
<motion.div 
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}> 
<div  className='card'>
<label htmlFor="number"> Enter the number of people with whom you want to split with (include yourself)</label>
<input type="number" id='number' name='number' value={number} onChange={handleChange}/>
<Button onClick={handleSubmit} className='button'>ENTER</Button>
</div>
</motion.div>

</>
)
}

export default App
