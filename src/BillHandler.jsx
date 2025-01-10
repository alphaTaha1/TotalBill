import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button, List } from 'antd';
import { nameContext } from './context';
import { motion } from 'framer-motion';
import cardPhoto from "./cardPhoto.jpeg"
function BillHandler() {
    const { person } = useContext(nameContext);
    const location = useLocation();
    const [total, setTotal] = useState("");
    const { updatedTotal } = location.state;

    return (
    <>
    <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
    >
    <div  className='card'       style={{
            backgroundImage: `url(${cardPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
                <h1>Bill Details</h1>
                
                {updatedTotal && Object.keys(updatedTotal).length > 0 ? (
                    <List style={{backgroundColor:"lightblue" , fontWeight:'bold'}}
                        bordered
                        dataSource={Object.entries(updatedTotal)}
                        renderItem={([person, amount]) => (
                            <List.Item>
                                <p>{person}: ${amount.toFixed(2)}</p>
                            </List.Item>
                        )}
                    />
                ) : (
                    <p>No data available</p>
                )}
            </div>

    </motion.div>
    </>
           
      
    );
}

export default BillHandler;
