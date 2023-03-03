import { useEffect } from 'react';

import { createPortal } from 'react-dom';
import { useCallback } from 'react';
import { Box } from '@mui/material';
import { ModalStyles } from './modal.styles';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const { overlay, modalContent } = ModalStyles;

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <>
      <Box onClick={handleBackdropClick} component="div" sx={overlay}>
        <Box sx={modalContent} component="div">
          {children}
        </Box>
      </Box>
    </>,
    modalRoot
  );
};
