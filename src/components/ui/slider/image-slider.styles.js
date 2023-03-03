export const ImageSliderStyle = {
  slideStyles: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  rightArrowStyles: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#000',
    zIndex: 1,
    cursor: 'pointer',
  },

  leftArrowStyles: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#000',
    zIndex: 1,
    cursor: 'pointer',
  },

  sliderStyles: {
    position: 'relative',
    height: '100%',
  },
};
