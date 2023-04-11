import React from 'react';
import './AboutFeature.css';

const AboutFeature = ({ children, src, alt, imageAlignment }) => {
    const imageOrder = imageAlignment === 'left' ? 'order-0' : 'order-2';
    return (
        <div className={`--about-feature --about-img-${imageAlignment}`}>
            <img className={`--about-img ${imageOrder}` }src={src} alt={alt} />
            <p className='order-1'>{ children }</p>
        </div>
    );
}

export default AboutFeature;
