import React from 'react';
import {Container} from "@material-ui/core";
import Directory from "../../components/directory.component";


const HomePage=(props)=>{
    console.log(props)
    return(
        <Container maxWidth='xl' >
            <Directory />
        </Container>
    )
}
export default HomePage;