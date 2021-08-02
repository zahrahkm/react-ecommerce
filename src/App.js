import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage-component";
import Shop from './pages/shop/shop-component';
import {Switch,Route} from 'react-router-dom'

const HatsPage=(props)=> {
    console.log(props)
    return(
        <div>
            hatss
        </div>
    )

}

  function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/shop' component={Shop}></Route>
            <Route exact path='/shop/jackets' component={HatsPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
