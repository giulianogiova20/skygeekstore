import React from "react";
import {Routes, Route} from 'react-router-dom'
import CustomProvider from "./contexts/CartContext";


//Styles
import  "./App.css"
import "./css/header.css"


//Components
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from "./components/NavBar";
import Cart from './components/Cart'
import Error from './components/Error'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

function App() { 

  return (
    <>
        <CustomProvider>
          <NavBar />
          <Routes>
            <Route
              path='/'
              element={<ItemListContainer />}
            />
            <Route
              path='/category/:category'
              element={<ItemListContainer />}
            />
            <Route
              path='/item/:id'
              element={<ItemDetailContainer />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
            <Route
              path='*'
              element={<Error />}
            />
          </Routes>
        </CustomProvider>
    </>
  )
}

export default App;
