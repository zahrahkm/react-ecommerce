import React from "react";
import SignIN from "../../components/sign-in/sign-in-component";
import SignUp from "../../components/sign-up/sign-up-component";
import Grid from "@material-ui/core/Grid";


const SignInAndSignUpPage=()=>(

     <div className='sign-in-and-sign-up'>
        <Grid container spacing={3} justifyContent='center' direction="row">
            <Grid item lg={4}  md={6} sm={12} xs={12} >
                <SignIN />
            </Grid>
            <Grid item lg={4}  md={6} sm={12} xs={12}>
                <SignUp />
            </Grid>
        </Grid>
    </div>


);

export default SignInAndSignUpPage;