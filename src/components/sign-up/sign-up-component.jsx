import React from "react";
import TextField from '@material-ui/core/TextField';
import './sign-up-style.css'
import CustomButton from "../custom-button/custom-button-component";
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";
export default class SignUp extends React.Component{
    constructor() {
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }


    handeleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("passwords don't match ")
            return ;
        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});

            this.setState({email:'',password:'',displayName:'',confirmPassword:''})
        }
        catch (error) {
            console.log(error)

        }


    }


    render() {
        return(
            <div className='sign-up'>
                <h1>already do not have an account</h1>
                <span>Sign up with your Email and Password</span>
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <TextField name='displayName' value={this.state.displayName} onChange={this.handeleChange} label="Display Name" type="text" className='sign-up-form-item' required/>
                    <TextField name='email' value={this.state.email} onChange={this.handeleChange} label="Email" type="email" className='sign-up-form-item' required/>
                    <TextField name='password' value={this.state.password} onChange={this.handeleChange} label="Password" type="password" className='sign-up-form-item' required/>
                    <TextField name='confirmPassword' value={this.state.confirmPassword} onChange={this.handeleChange} label="Confirm Password" type="password" className='sign-up-form-item' required/>
                    <div className="sign-in-form-button">
                        <CustomButton type="submit" >sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}