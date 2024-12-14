import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './App.css'
import { numberContext } from './context';


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
<div className="main">
<div className='card'>
<label htmlFor="number"> Enter the number of people with whom you want to split (include yourself)</label>
<input type="number" id='number' name='number' value={number} onChange={handleChange}/>
<button onClick={handleSubmit} className='button'>ENTER</button>
</div>
</div>
  



</>
)
}

export default App
