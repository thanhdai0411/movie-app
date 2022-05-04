import React from 'react';

function Button(props) {
    // { bgc, width, height, radius, onClick, children }

    const { bgc,color, width, height, radius, onClick, children } = props;


    const styleButton = {
        backgroundColor: bgc,
        color, 
        width,
        height,
        borderRadius: radius, 

    };

    return (
        <>
            <button
                className=''
                style={({ outline: 'none', border: 'none' }, { ...styleButton })}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
