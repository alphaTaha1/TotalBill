import { useState, useEffect, useContext } from "react";
import {  numberContext, nameContext } from "./context";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { motion } from 'framer-motion';

function Entries() {
    const {name, setName} = useContext(nameContext)
    const { number } = useContext(numberContext);  
const navigate = useNavigate()
    useEffect(() => {
        setName(Array(number).fill("")); // Reset the names array based on the number of people
    }, [number, setName]);  // Array to hold names of people

    const handleSubmit = () => {
        // Accessing the names state array
         // Display names in the console
        alert("Names entered: " + name.join(", "));
        navigate("/MealAmountHandler")  // Show names as a string in an alert
    };
    // Handle change in input fields
    const handleNameChange = (index, event) => {
        const newNames = [...name];  // Create a copy of the current names array
        newNames[index] = event.target.value;  // Update the name at the given index
        setName(newNames);  // Update the state with the new names array
    };

    return (
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}> 
<div className="card">
                <label id="entriesHeading" htmlFor="Entries">Enter the names of {number} people</label>
                {Array.from({ length: number }).map((_, index) => (
                    <div id="entriesCard" key={index}>
                        <input
                            type="text"
                            id={`entry-${index}`}
                            name={`entry-${index}`}
                            placeholder={`Enter name ${index + 1}`}
                            value={name[index]}  // Set the value from the state
                            onChange={(event) => handleNameChange(index, event)}  // Handle input change
                        />
                    </div>
                ))}   <Button onClick={handleSubmit}>Submit</Button>
            </div>

        </motion.div>
            
    );
}

export default Entries;
