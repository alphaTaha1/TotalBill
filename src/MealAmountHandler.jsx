import React, { useContext } from 'react';
import { useState } from 'react';
import { nameContext } from './context';
import { useNavigate } from 'react-router-dom';

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
        <div className="mainMeal">
            <div className="cardMeal">
                <h1>Meal details</h1>
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
                <label className="labels" htmlFor="options"></label>
                <select name="options" id="options" multiple onChange={handleNameSelect}>
                    {name.map((Name, index) => (
                        <option key={index} value={Name}>
                            {Name}
                        </option>
                    ))}
                </select>
                <button onClick={submitMeal}>Submit</button>
                <button onClick={finish}>FINISH</button>
            </div>
        </div>
    );
}

export default MealAmountHandler;
