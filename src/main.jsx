import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import InfoHandler from './infoHandler.jsx';
import TaxHandler from './TaxHandler.jsx';
import MealAmountHandler from './MealAmountHandler.jsx'
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { numberContext, totalAmountcontext , totalTaxAmountcontext, nameContext} from './context';
import Entries from './Entries.jsx';
import BillHandler from './BillHandler.jsx'
import Header from './Header.jsx';
function Main() {
    const [number, setNumber] = useState(1);
const [totalAmount, setTotalAmount] = useState(0)
const [totalTaxAmount , setTotalTaxAmount] = useState(0)
const [name , setName] = useState([])
    return (
        <numberContext.Provider value={{number , setNumber}}>
          <totalAmountcontext.Provider value = {{totalAmount , setTotalAmount}}>
          <totalTaxAmountcontext.Provider value = {{totalTaxAmount , setTotalTaxAmount}}>
          <nameContext.Provider value = {{name, setName}}>
          <BrowserRouter basename='/TotalBill'>
                <StrictMode>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/InfoHandler" element={<InfoHandler />} />
                        <Route path = "/TaxHandler" element = {<TaxHandler/>}/>
                        <Route path = "/MealAmountHandler" element = {<MealAmountHandler/>}/>
                        <Route path = "/Entries" element = {<Entries/>}/>
                        <Route path = "/BillHandler" element = {<BillHandler/>}/>
                    </Routes>
                </StrictMode>
            </BrowserRouter>

          </nameContext.Provider>
          
            </totalTaxAmountcontext.Provider>
            </totalAmountcontext.Provider>
        </numberContext.Provider>
    );
}

createRoot(document.getElementById('root')).render(<Main />);
