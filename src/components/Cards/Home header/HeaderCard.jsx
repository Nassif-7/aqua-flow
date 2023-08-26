import React from 'react';
import './HeaderCard.scss';

const HeaderCard = ({ title, num, imageUrl, percent, chartImage, color }) => {
  const Style = { background: `${color}` };

  return (
    <div className='card'>
      <div className='card__upper'>
        <div className='card__upper__img' style={Style}>
          <img src={imageUrl} alt='CardImage' />
        </div>
        <div className='card__upper__title'>
          <span className='card__upper__title__txt'>{title}</span>
          <span className='card__upper__title__num'>{num}</span>
        </div>
      </div>

      <div className='card__lower'>
        <div className='card__lower__percent'>
          <span>{percent}</span>
        </div>
        <div className='card__lower__chartimg'>
          <img src={chartImage} alt='ChartImage' />
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
