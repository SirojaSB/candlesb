import React from 'react';

import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import PaymentPage from "./pages/PaymentPage";
import ThanksPage from "./pages/ThanksPage";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";

const App: React.FC = () => {
    const withoutHeaderFooterPages = ['/cart/details', '/cart/payment', '/cart/thanks']

    const location = useLocation()

    const isWithoutHeaderFooter = withoutHeaderFooterPages.includes(location.pathname)

    return (
        <div>
            {!isWithoutHeaderFooter && <Header/>}
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/candles/:id' element={<ProductPage/>}/>
                <Route path='/orders' element={<OrdersPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/cart/details' element={location.state !== null ? location.state.prevPath === '/cart' ? <DetailsPage/> : <Navigate to={'/'}/> : <Navigate to={'/'}/>}/>
                <Route path='/cart/payment' element={location.state !== null ? location.state.prevPath === '/cart/details' ? <PaymentPage/> : <Navigate to={'/'}/> : <Navigate to={'/'}/>}/>
                <Route path='/cart/thanks' element={location.state !== null ? location.state.prevPath === '/cart/payment' ? <ThanksPage/> : <Navigate to={'/'}/> : <Navigate to={'/'}/>}/>
            </Routes>
            {!isWithoutHeaderFooter && <Footer/>}
        </div>
    );
}

export default App;
