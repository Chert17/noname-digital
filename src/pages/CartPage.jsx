import { Box, Button, Container, List, Typography } from '@mui/material';
import ProductCastItem from 'components/product-cast-item/ProductCastItem';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { castSelector, clearCast } from 'redux/cast-slice/cast-slice';

const CartPage = () => {
  const products = useSelector(castSelector);
  const dispatch = useDispatch();

  const total = products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container maxWidth="xl">
      <Box margin="auto" width={500} paddingTop={4}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography>Total: {total}</Typography>
          <Button
            onClick={() => dispatch(clearCast())}
            variant="outlined"
            color="warning"
          >
            clear cast
          </Button>
        </Box>
        {products.length > 0 ? (
          <List>
            {products?.map(product => (
              <ProductCastItem key={product.id} product={product} />
            ))}
          </List>
        ) : (
          <Typography variant="h5" textAlign="center" paddingTop={6}>
            Cast is empty
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default CartPage;
