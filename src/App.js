import logo from './logo.svg';
import './App.css';
import Header from "./commponent/header/Header";
import Card from "./commponent/Card/Card";
import BrandHistory from "./commponent/BrandHistory/BrandHistory";
import Catalog from "./commponent/Catalog/Catalog";
import Main from "./commponent/Main/Main";
import Footer from './commponent/Footer/Footer'
import {Routes, Route} from "react-router-dom";
import Item from "./commponent/Item/Item";
import ItemContainer from "./commponent/Item/ItemContainer";
import Basket from "./commponent/Basket/Basket";
import RegistrationPage from "./page/RegistrationPage";
import LoginPage from "./page/LoginPage";
import CardProvider from "./Сontext/CardContext";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import PersonalArea from "./commponent/PersonalArea/PersonalArea";
import AdminPanel from "./commponent/Admin/AdminPanel";

function App() {

    return (
<CardProvider>
<div>
            <Header/>

            <Routes>
                <Route path={'/aboutUS'} element={<BrandHistory/>}/>
                <Route path={'/admin'} element={<AdminPanel/>}/>
                <Route path={'/my-account'} element={<PersonalArea/>}/>
                <Route path={'/'} element={<Main/>}/>

                <Route path={'/catalog'} element={<Catalog/>}/>
                <Route path={'/registration'} element={<RegistrationPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/catalogItem'} element={<Basket/>} />
                <Route path={'/item/:cardID'} element={<Item/>}/>
                {/*<Route path={'/bas'} element={<Item/>}/>*/}


            </Routes>
            <Footer/>

            {/*<Main/>*/}
</div>
 </CardProvider>

    );
}

export default App;
