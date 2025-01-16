import React from 'react';

const BackButton: React.FC = () => {
    const handleClick = () => {
        window.location.href = "https://www.warisul.com/";
    };

    return (
        <button onClick={handleClick} className="back-button">
            Go Back
        </button>
    );
};

export default BackButton;