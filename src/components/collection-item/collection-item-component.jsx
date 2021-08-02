import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import '../collection-item/collection-item-style.css'


const CollectionItem=({id,imageUrl,name,price})=>(
    <Grid item lg={3}  md={3} sm={12} xs={12} key={id}>
        <Card className='collection-item'>
            <CardMedia  className='media' image={`${imageUrl}`} title={`${name}`}>
                <div className='button-parent'>
                    <button className='card-button' variant="contained">ADD TO CART</button>
                </div>
            </CardMedia>
            <CardContent className='collection-footer'>
                <Typography  variant="overline">{name}</Typography>
                <Typography  variant="overline">${price}</Typography>
            </CardContent>
        </Card>
    </Grid>
)


export default CollectionItem;