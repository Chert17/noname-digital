import React, { useState } from 'react';
import { ImageSliderStyle } from './image-slider.styles';

const ImageSlider = ({ images, bgImgSize = 'contain' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slideStyles, rightArrowStyles, leftArrowStyles, sliderStyles } =
    ImageSliderStyle;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${images?.[currentIndex]})`,
  };

  return (
    <>
      <div style={sliderStyles}>
        <div>
          <div onClick={goToPrevious} style={leftArrowStyles}>
            ❰
          </div>
          <div onClick={goToNext} style={rightArrowStyles}>
            ❱
          </div>
        </div>
        <div
          style={{ ...slideStylesWidthBackground, backgroundSize: bgImgSize }}
        ></div>
      </div>
    </>
  );
};

export default ImageSlider;
