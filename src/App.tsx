import React from 'react';

import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import PaymentPage from "./pages/PaymentPage";
import ThanksPage from "./pages/ThanksPage";
import {Routes, Route} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/candles/:id' element={<ProductPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/cart/details' element={<DetailsPage/>}/>
                <Route path='/cart/payment' element={<PaymentPage/>}/>
                <Route path='/cart/thanks' element={<ThanksPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
