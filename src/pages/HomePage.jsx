import { Box, Container } from '@mui/material';
import ProductItem from 'components/product-item/ProductItem';
import ModalInfo from 'components/ui/modal-info/ModalInfo';
import { Modal } from 'components/ui/modal/Modal';
import { banners } from 'components/ui/slider/banners.data';
import ImageSlider from 'components/ui/slider/ImageSlider';
import SortControls from 'components/ui/sort-controls/SortControls';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { productSelector } from 'redux/products-slice/products-slice';
import { getProductsThunk } from 'redux/products-slice/products-thunk';

const HomePage = () => {
  const { products } = useSelector(productSelector);
  const location = useLocation();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [sortProducts, setSortProducts] = useState();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    setSortProducts(products);
  }, [products]);

  const onModal = () => {
    setShowModal(true);
    if (showModal) return setShowModal(false);
  };

  return (
    <>
      <Box width="100%" height={300} marginBottom={4}>
        <ImageSlider images={banners} bgImgSize="cover" />
      </Box>
      <Container maxWidth="xl">
        <SortControls
          setSortProducts={setSortProducts}
          sortProducts={sortProducts}
        />
        <Box component="ul" display="flex" gap="30px" flexWrap="wrap">
          {sortProducts?.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              location={location}
              setShowModal={setShowModal}
            />
          ))}
        </Box>
        {showModal && (
          <Modal onClose={onModal}>
            <ModalInfo onClose={onModal} />
          </Modal>
        )}
      </Container>
    </>
  );
};

export default HomePage;
