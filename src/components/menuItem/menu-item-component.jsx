import React from 'react';
import "./menu-item.style.css"
import {withRouter} from "react-router-dom";



const MenuItem =({id,title,imageUrl,size,linkUrl,match,history})=> (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{backgroundImage:`url(${imageUrl } )`}}></div>
            <span className='content'>
                <h1 className='image-title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop Now</span>
            </span>
        </div>

)


export default withRouter(MenuItem);
