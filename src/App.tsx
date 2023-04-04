import React from 'react';

import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <MainPage />
            <Footer/>
        </div>
    );
}

export default App;
