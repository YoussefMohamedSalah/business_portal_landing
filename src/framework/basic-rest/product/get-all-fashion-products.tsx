import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import shuffle from "lodash/shuffle";

export const fetchFashionProducts = async (id: number) => {
  const { data } = await http.get(API_ENDPOINTS.FASHION_PRODUCTS);
  return shuffle(data) as Product[];
};

export const usefashionProductsQuery = (activeProject:number ) => {
  return useQuery(["project", activeProject], () => fetchFashionProducts(activeProject)
  );
};