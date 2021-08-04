import React from "react";
import TextField from '@material-ui/core/TextField';
import './sign-in-style.css'
import CustomButton from "../custom-button/custom-button-component";
import {signInWithGoogle} from "../../firebase/firebase.utils"
export default class SignIN extends React.Component{
    constructor() {
        super();
        this.state={
            email:'',
            password:''
        }
    }


    handeleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }


    render() {
        return(
            <div className='sign-in'>
                <h1>already have an account</h1>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit} className='sign-in-form'>
                    <TextField name='email' value={this.state.email} onChange={this.handeleChange} label="Email" type="email" className='sign-in-form-item' required/>
                    <TextField name='password' value={this.state.password} onChange={this.handeleChange} label="Password" type="password" className='sign-in-form-item' required/>
                    <div className="sign-in-form-button">
                        <CustomButton type="submit" >sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}