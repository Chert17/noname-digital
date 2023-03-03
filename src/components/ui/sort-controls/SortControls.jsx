import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const SortControls = ({ setSortProducts, sortProducts }) => {
  const sortByAscendingPrice = () =>
    setSortProducts(sortProducts.slice().sort((a, b) => a.price - b.price));

  const sortByDescendingPrice = () =>
    setSortProducts(sortProducts.slice().sort((a, b) => b.price - a.price));

  const sortByRating = () =>
    setSortProducts(sortProducts.slice().sort((a, b) => b.rating - a.rating));

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sort by :</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{ display: 'block' }}
      >
        <FormControlLabel
          value="ascending price"
          control={<Radio onChange={sortByAscendingPrice} />}
          label="ascending price"
        />
        <FormControlLabel
          value="descending price"
          control={<Radio onChange={sortByDescendingPrice} />}
          label="descending price"
        />
        <FormControlLabel
          value="by rating"
          control={<Radio onChange={sortByRating} />}
          label="by rating"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default SortControls;
