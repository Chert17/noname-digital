import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductId } from 'redux/products-slice/products-slice';
import { tokenSelector } from 'redux/auth-slice/auth-slice';
import { addProductToCast } from 'redux/cast-slice/cast-slice';

const ProductItem = ({ product, location, setShowModal }) => {
  const { title, thumbnail, description, price, id } = product;

  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);

  const addProduct = () => {
    if (!token) setShowModal(true);
    else dispatch(addProductToCast({ ...product, quantity: 1 }));
  };

  return (
    <Box component="li" display="flex">
      <Card
        sx={{
          maxWidth: 270,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <CardMedia
            component="img"
            image={thumbnail}
            title={title}
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography>Price: {price}</Typography>
          </CardContent>
        </div>
        <CardActions>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              onClick={() => dispatch(setProductId(id))}
              component={Link}
              to={`/product/${id}`}
              state={{ from: location }}
            >
              Show more
            </Button>
            <Button onClick={addProduct} size="small">
              <AddShoppingCartIcon />
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductItem;
