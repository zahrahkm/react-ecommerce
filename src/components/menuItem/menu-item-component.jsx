import React from 'react';
import "./menu-item.style.css"


const MenuItem =({id,title,imageUrl,size})=>(
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{backgroundImage:`url(${imageUrl } )`}}></div>
        <span className='content'>
            <h1 className='image-title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </span>
    </div>
)
export default MenuItem;
