import React from 'react';

import MainPage from "./pages/MainPage";
import Header from "./components/Header";

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <MainPage />
        </div>
    );
}

export default App;
