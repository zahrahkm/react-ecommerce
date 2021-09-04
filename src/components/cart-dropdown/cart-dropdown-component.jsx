import React from "react";
import Card from '@material-ui/core/Card';
import CustomButton from "../custom-button/custom-button-component";
import './card-dropdown-style.css'

const CartDropdown=()=>(
   <div className='justify'>
       <Card  variant="outlined" className='card-dropdown'>
           <CustomButton>GO TO CHECKOUT</CustomButton>
       </Card>
   </div>

)
export default CartDropdown;