import React from 'react';
import './index.scss'

const Avatar = ({img, size, alt = "avatar"}) => (
    <div className="avatar" style={{ height: size, width: size }}>
        {img 
            ? <img style={{ height: size }} src={img} alt={alt} /> 
            : <span style={{ fontSize: `calc(${size} * .8)` }}>?</span>
        }
    </div>
)

export default Avatar;