import React from 'react'
import './Background.css'
import imageBg from '../../../assets/paisaje.jpg'

export default function Background() {
    return (
        <div className='bgLogin' >
            <img src={imageBg} alt='background' />
        </div>
    )
};
