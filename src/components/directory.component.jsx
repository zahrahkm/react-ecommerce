import React from "react";
import MenuItem from "./menuItem/menu-item-component";
import Grid from "@material-ui/core/Grid";


class Directory extends React.Component{
    constructor() {
        super();
        this.state={
            sections:[
                {
                    title: 'hats',
                    imageUrl: './images/banner/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: './images/banner/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: './images/banner/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: './images/banner/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: './images/banner/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }




    render() {
        return(
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                {this.state.sections.map(({id,...otherSectionProps})=> {
                    if(id <= 3)
                        return <Grid item lg={4}  md={4} sm={12} xs={12} key={id}>
                                  <MenuItem key={id} {...otherSectionProps}/>
                               </Grid>
                    else
                        return <Grid item lg={6} md={6} sm={12} xs={12} key={id}>
                                 <MenuItem key={id} {...otherSectionProps} />
                               </Grid>
                })}
            </Grid>
            )
    }
}
export default Directory;