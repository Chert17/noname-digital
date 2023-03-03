import axios from 'axios';

const productApi = axios.create({
  baseURL: 'https://dummyjson.com/products',
  params: {
    limit: 8,
  },
});

export const getProductsService = async () => {
  const { data } = await productApi.get();
  return data;
};

export const getProductByIdService = async id => {
  const { data } = await productApi.get(`/${id}`);
  return data;
};
