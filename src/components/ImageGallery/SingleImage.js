import React from 'react';
import './ImageGallary.css';

const SingleImage = (props) => {
    const { src, name } = props.data;
    return (
        <div className="single-image">
            <img src={src} alt="" />
            <div className="img-overlay">
                <p className="img-text">{name}</p>
            </div>
        </div>
    );
};

export default SingleImage;