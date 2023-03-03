import { Box, Button, Container, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImageSlider from 'components/ui/slider/ImageSlider';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { productItemSelector } from 'redux/products-slice/products-slice';
import { getProductByIdThunk } from 'redux/products-slice/products-thunk';
import { addProductToCast } from 'redux/cast-slice/cast-slice';

const ProductPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const path = location.state?.from || '/';

  const dispatch = useDispatch();
  const product = useSelector(productItemSelector) ?? {};
  const { title, brand, description, images, price } = product;

  useEffect(() => {
    dispatch(getProductByIdThunk(productId));
  }, [dispatch, productId]);

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
          <Button
            onClick={() =>
              dispatch(addProductToCast({ ...product, quantity: 1 }))
            }
            size="large"
            variant="outlined"
          >
            <AddShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
