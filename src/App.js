import React from "react";
import {Routes, Route} from 'react-router-dom'
import CustomProvider from "./contexts/CartContext";


//Styles
import  "./App.css"
import "./css/header.css"


//Components
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import NavBar from "./components/NavBar";
import Cart from './components/Cart'
import Error from './components/Error'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const greeting = "We are SKY, the number one geek store in Atlanta."
  const userName = "John Doe"


  return (
    <>
        <CustomProvider>
          <NavBar />
          <Routes>
            <Route
              path='/'
              element={<ItemListContainer greeting={greeting} userName={userName} />}
            />
            <Route
              path='/category/:category'
              element={<ItemListContainer greeting={greeting} userName={userName} />}
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
