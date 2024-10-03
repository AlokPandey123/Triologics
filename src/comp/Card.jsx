import React from 'react';

const Card = ({ title, description, buttonText, buttonColor, imgSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-center mb-4">
        <img src={imgSrc} alt={title}  />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-center">
        <button className={`text-white py-2 px-4 rounded-lg ${buttonColor}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
