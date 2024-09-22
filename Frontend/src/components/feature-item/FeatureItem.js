import React from 'react';
import './feature-item.css'

const FeatureItem = ({ iconSrc, altText, title, children }) => {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt={altText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p className='feature-item-paragraph'>{children}</p>
    </div>
  );
};

export default FeatureItem;
