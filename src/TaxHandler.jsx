import React, { useContext } from 'react'
import { totalAmountcontext , totalTaxAmountcontext} from './context'
import { useNavigate } from 'react-router-dom'

function TaxHandler() {
    const {totalAmount} = useContext(totalAmountcontext)
    console.log(totalAmount)     
    const {totalTaxAmount, setTotalTaxAmount} = useContext(totalTaxAmountcontext)
    const navigate = useNavigate()
    const handleChange = (event) =>
    {
        setTotalTaxAmount(event.target.value)
    }

    const handleSubmit = () =>
    {
        setTotalTaxAmount(Number(totalTaxAmount))
        navigate("/MealAmountHandler");
    }
  return (
    <div className='main'>
        <div className='card'>
        <label htmlFor="totalTaxAmount"> Enter the total  tax amount</label>
<input type="number" id='totalTaxAmount' name='totaTaxlAmount' value={totalTaxAmount} onChange={handleChange}/>
<button onClick={handleSubmit} className='button'>ENTER</button>
        </div>

    </div>
  )
}

export default TaxHandler
