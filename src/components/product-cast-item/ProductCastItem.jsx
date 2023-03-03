import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import {
  addProductToCast,
  decrementQuantityProduct,
  deleteProductFromCast,
} from 'redux/cast-slice/cast-slice';
import { useDispatch } from 'react-redux';

const ProductCastItem = ({ product }) => {
  const dispatch = useDispatch();

  const { title, thumbnail, price, quantity, id } = product;

  return (
    <ListItem
      secondaryAction={
        <Box display="flex" gap={4}>
          <IconButton
            onClick={() =>
              dispatch(addProductToCast({ ...product, quantity: 1 }))
            }
            edge="end"
            aria-label="add"
            color="primary"
          >
            <AddIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch(decrementQuantityProduct(id))}
            edge="end"
            aria-label="remove"
            color="primary"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch(deleteProductFromCast(id))}
            edge="end"
            aria-label="delete"
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <img src={thumbnail} alt={title} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={`Price: ${price} Quantity: ${quantity}`}
      />
    </ListItem>
  );
};

export default ProductCastItem;
