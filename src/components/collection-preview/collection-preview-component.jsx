
import React from "react";
import Grid from "@material-ui/core/Grid";
import CollectionItem from "../collection-item/collection-item-component";


const CollectionPreview=({id,title,items})=>(
    <div>
        <h1>{title}</h1>
        <Grid container spacing={3} direction="row" alignItems="center">
            {items.filter((item,index)=>index < 4).map(({id,...otherItemProps})=>(
            <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </Grid>
    </div>

)


export default CollectionPreview;