import React from 'react';
import './BodyCard.scss';

const BodyCard = ({ ImageUrl, ImageAlt, Description, color }) => {
  const Style = { background: `${color}` };
  return (
    <div className='bodycard'>
      <div className='bodycard__image' style={Style}>
        <img src={ImageUrl} alt={ImageAlt} />
      </div>
      <div className='bodycard__description'>{Description}</div>
    </div>
  );
};

export default BodyCard;
