
import React from 'react';


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: 'rgba(168, 194, 206, 0.364)', borderRadius: '50%' }}
            onClick={onClick}
        >
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,  background: 'rgba(168, 194, 206, 0.364)', borderRadius: '50%' }}
            onClick={onClick}
        ></div>
    );
};

export { SampleNextArrow, SamplePrevArrow };
