import { Box, Button, Container, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImageSlider from 'components/ui/slider/ImageSlider';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { productItemSelector } from 'redux/products-slice/products-slice';
import { getProductByIdThunk } from 'redux/products-slice/products-thunk';
import { addProductToCast } from 'redux/cast-slice/cast-slice';
import { tokenSelector } from 'redux/auth-slice/auth-slice';
import { Modal } from 'components/ui/modal/Modal';
import ModalInfo from 'components/ui/modal-info/ModalInfo';

const ProductPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const path = location.state?.from || '/';
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const product = useSelector(productItemSelector) ?? {};
  const { title, brand, description, images, price } = product;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getProductByIdThunk(productId));
  }, [dispatch, productId]);

  const onModal = () => {
    setShowModal(true);
    if (showModal) return setShowModal(false);
  };

  const addProduct = () => {
    if (!token) setShowModal(true);
    else dispatch(addProductToCast({ ...product, quantity: 1 }));
  };

  return (
    <Container maxWidth="xl">
      <Button LinkComponent={Link} to={path}>
        go back
      </Button>
      <Box display="flex" alignItems="center" gap={6} marginTop={6}>
        <Box width={500} height={400}>
          <ImageSlider images={images} />
        </Box>
        <Box>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography gutterBottom>Brand: {brand}</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Typography gutterBottom>Price: {price}</Typography>
          <Button onClick={addProduct} size="large" variant="outlined">
            <AddShoppingCartIcon />
          </Button>
        </Box>
      </Box>
      {showModal && (
        <Modal onClose={onModal}>
          <ModalInfo onClose={onModal} />
        </Modal>
      )}
    </Container>
  );
};

export default ProductPage;
