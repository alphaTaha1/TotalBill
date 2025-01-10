import React, {useState, useContext } from 'react'
import { numberContext , totalAmountcontext , nameContext} from './context'
import {useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { motion } from 'framer-motion'
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
    <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}> 
          <div className="main">
    <div className='card'>
    <h1></h1>
    <label htmlFor="totalAmount"> Enter the total amount (wihout tax)</label>
<input type="number" id='totalAmount' name='totalAmount' value={totalAmount} onChange={handleChange}/>
<Button onClick={handleSubmit} className='button'>ENTER</Button>

    </div>
    </div>
    </motion.div>

    </>
   
  )
}

export default InfoHandler
