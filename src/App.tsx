import React from 'react';

import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import PaymentPage from "./pages/PaymentPage";
import ThanksPage from "./pages/ThanksPage";

const App: React.FC = () => {
    return (
        <div>
            {/*<Header/>*/}
            {/*<MainPage />*/}
            {/*<ProductPage/>*/}
            {/*<CartPage/>*/}
            {/*<DetailsPage/>*/}
            {/*<PaymentPage/>*/}
            <ThanksPage/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
