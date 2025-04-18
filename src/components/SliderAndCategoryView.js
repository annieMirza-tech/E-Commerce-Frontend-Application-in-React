import React from 'react';
import ImageSlider from './ImageSlider';
import CategoryCardView from './CategoryCardView';

const SliderAndCategoryView = ({ onCardClick, showImageSlider, children }) => {
  return (
    <div>
      {showImageSlider && <ImageSlider />}
      <CategoryCardView onCardClick={onCardClick} />
      {children}
    </div>
  );
};

export default SliderAndCategoryView;
