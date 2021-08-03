import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage-component";
import Shop from './pages/shop/shop-component';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header-component';


  function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/shop' component={Shop}></Route>
        </Switch>
    </div>
  );
}

export default App;
