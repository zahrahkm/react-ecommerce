import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage-component";
import Shop from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-copmonent";
import {Container} from "@material-ui/core";
import {auth} from "./firebase/firebase.utils";

class App  extends React.Component{
    constructor() {
        super();
        this.state={
            currentUser: null
        }
    }

    unSubscribeFromAuth=null;

    componentDidMount() {
        this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
            this.setState({currentUser:user})
            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <Container maxWidth='xl' >
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/shop' component={Shop}></Route>
                    <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
                </Switch>
            </Container>
        );
    }
}

export default App;
