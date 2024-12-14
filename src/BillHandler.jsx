import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { nameContext } from './context';
function BillHandler() {
    const {person} = useContext(nameContext)
    const location = useLocation();
    const [total, ssetTotal] = useState("");
    const { updatedTotal } = location.state  

    return (
        <div className='main'>
            <div className='card'>
            <h1>Bill Details</h1>
            
            {updatedTotal && Object.keys(updatedTotal).length > 0 ? (
                        Object.keys(updatedTotal).map((person) => (
                            <div key={person}>
                                <p>{person}: ${updatedTotal[person].toFixed(2)}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
        </div>
            </div>
      
    );
}

export default BillHandler;
