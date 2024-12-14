import React, {useState, useContext } from 'react'
import { numberContext , totalAmountcontext , nameContext} from './context'
import {useNavigate } from 'react-router-dom'

function InfoHandler() {
  const{name} = useContext(nameContext)
  console.log(name)
const {number} = useContext(numberContext)
const navigate = useNavigate();

const {totalAmount, setTotalAmount} = useContext(totalAmountcontext)

const handleChange = (event) =>
{
setTotalAmount(event.target.value) 

}

const handleSubmit  = () => {

  navigate("/TaxHandler")
}
  return (
    <>
    
    <div className="main">
    <div className='card'>
    <h1></h1>
    <label htmlFor="totalAmount"> Enter the total amount (wihout tax)</label>
<input type="number" id='totalAmount' name='totalAmount' value={totalAmount} onChange={handleChange}/>
<button onClick={handleSubmit} className='button'>ENTER</button>

    </div>
    </div>
    </>
   
  )
}

export default InfoHandler
