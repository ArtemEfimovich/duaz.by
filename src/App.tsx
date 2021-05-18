import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Rentals} from "./components/Rentals/Rentals";
import { Catalog } from './components/Catalog/Catalog';
import { Services } from './components/Services/Services';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path="/rentals" render={() => <Rentals/>}/>
                <Route path="/service" render={() => <Services/>}/>
                <Route path="/catalog" render={() => <Catalog/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
