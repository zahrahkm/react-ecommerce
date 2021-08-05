import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage-component";
import Shop from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-copmonent";
import {Container} from "@material-ui/core";
import {auth ,createUserProfileDocument} from "./firebase/firebase.utils";

class App  extends React.Component{
    constructor() {
        super();
        this.state={
            currentUser: null
        }
    }

    unSubscribeFromAuth=null;

    componentDidMount() {
        this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
            if(userAuth){
                const userRef1=await createUserProfileDocument(userAuth);
                userRef1.onSnapshot(snapshot =>{
                    console.log(snapshot.data());
                    console.log(snapshot);

                    this.setState(
                        {currentUser: {
                                id:snapshot,
                                ...snapshot.data()
                            }}
                        ,()=>{
                            console.log(this.state)
                        })

                })
            }
            this.setState({currentUser:userAuth})
            console.log(this.state)
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
