import React, { useContext } from 'react';
import { useState } from 'react';
import { nameContext } from './context';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import cardPhoto from "./cardPhoto.jpeg"

function MealAmountHandler() {
    const { name } = useContext(nameContext);
    const [totalForPeople, setTotalForPeople] = useState({});
    const [meal, setMeal] = useState([]);
    const [currentMeal, setCurrentMeal] = useState({
        mealPrice: '',
        mealTax: '',
        mealOrderedBy: []
    });

    const navigate = useNavigate();

    const handleMealPrice = (event) => {
        const newMealPrice = event.target.value;
        setCurrentMeal((prevMeal) => ({
            ...prevMeal,
            mealPrice: Number(newMealPrice),
        }));
    };

    const handleMealTax = (event) => {
        const newMealTax = event.target.value;
        setCurrentMeal((prevTax) => ({
            ...prevTax,
            mealTax: Number(newMealTax),
        }));
    };

    const handleNameSelect = (event) => {
        const selectedPeople = Array.from(event.target.selectedOptions, (option) => option.value);
        setCurrentMeal((prevPerson) => ({
            ...prevPerson,
            mealOrderedBy: selectedPeople
        }));
    };

    const submitMeal = () => {
        if (!currentMeal.mealPrice) {
            alert('Please enter at least the price of the meal');
            return;
        }

        const numOfPeople = currentMeal.mealOrderedBy.length;
        if (numOfPeople === 0) {
            alert('Please select at least one person.');
            return;
        }

        const splitCost = (currentMeal.mealPrice + currentMeal.mealTax) / numOfPeople;

        // Update meal array and totalForPeople together
        setMeal((prevMeal) => {
            const newMealList = [...prevMeal, currentMeal];

            setTotalForPeople((prevTotal) => {
                const updatedTotal = { ...prevTotal };

                currentMeal.mealOrderedBy.forEach((person) => {
                    updatedTotal[person] = (updatedTotal[person] || 0) + splitCost;
                });
                console.log(updatedTotal)

                return updatedTotal;
            });
           
            return newMealList;
        });

        // Reset currentMeal after submission
        setCurrentMeal({
            mealPrice: '',
            mealTax: '',
            mealOrderedBy: []
        });
    };

    const finish = () => {
      navigate("/BillHandler", { state: { meal, updatedTotal: totalForPeople } });    };

    return (
        <>
            <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}> 
       <div className="mainMeal"
            style={{
                   backgroundImage: `url(${cardPhoto})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}
       >
            <div className="cardMeal"
                 style={{
                        backgroundImage: `url(${cardPhoto})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
            >
                <h1 className='headings'>Meal details</h1>
                <label className="labels" htmlFor="mealPriceAmount">
                    Enter the price of the meal
                </label>
                <input
                    id="mealPriceAmount"
                    type="number"
                    value={currentMeal.mealPrice}
                    onChange={handleMealPrice}
                    min={0}
                />
                <label className="labels" htmlFor="mealTaxAmount">
                    Enter the <span>TAX</span> of the meal
                </label>
                <input
                    id="mealTaxAmount"
                    type="number"
                    value={currentMeal.mealTax}
                    onChange={handleMealTax}
                    min={0}
                    max={currentMeal.mealPrice}
                />
                {/* <label className="labels" htmlFor="options"></label> */}
                <select name="options" id="options" multiple onChange={handleNameSelect}>
                    {name.map((Name, index) => (
                        <option key={index} value={Name}>
                            {Name}
                        </option>
                    ))}
                </select>
                <div className='buttonsInMealAmountHandler'>
                <Button onClick={submitMeal}>Submit the Meal</Button>
                <Button type='primary' onClick={finish}>FINISH</Button>
                </div>
      
            </div>
        </div>
    </motion.div>
        </>
       
    );
}

export default MealAmountHandler;
