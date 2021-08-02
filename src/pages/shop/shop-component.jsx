import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview-component"
import SHOP_DATA from "./shop-data"
import {Container} from "@material-ui/core";

export default class Shop extends React.Component {
    constructor() {
        super();
        this.state={
            collections:SHOP_DATA
        }
    }

    render() {
        return (
            <Container maxWidth='xl' >
             <h1>collections</h1>
                {this.state.collections.map(({id,...otherCollectionProps})=>(
                 <CollectionPreview key={id} {...otherCollectionProps}/>
                 ))}
            </Container>

        )
    }

}