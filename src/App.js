import React from 'react';
import './App.css';
import {Switch,Route,Redirect } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage-component";
import Shop from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-copmonent";
import {Container} from "@material-ui/core";
import {auth ,createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user-actions";

class App  extends React.Component{

    unSubscribeFromAuth=null;

    componentDidMount() {
        this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
            if(userAuth){
                const userRef1=await createUserProfileDocument(userAuth);
                userRef1.onSnapshot(snapshot =>{
                    console.log(snapshot.data());
                    console.log(snapshot);

                    this.props.setCurrentUser(
                        {
                            id:snapshot,
                            ...snapshot.data()
                        }
                        ,()=>{
                            console.log(this.props.setCurrentUser)
                        })
                })
            }
            this.props.setCurrentUser(userAuth)
            console.log(this.props.setCurrentUser)
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <Container maxWidth='xl' >
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={Shop} />
                    <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' /> ) : <SignInAndSignUpPage /> } />
                </Switch>
            </Container>
        );
    }
}

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
});
const mapDispatchToProps=dispatch=>({
    setCurrentUser: user=> dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);