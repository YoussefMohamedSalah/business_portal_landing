import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import shuffle from "lodash/shuffle";

export const fetchElectronictablesProducts = async (id: number) => {
  let { data } = await http.get(API_ENDPOINTS.ELETRONIC_PRODUCTS);
  return shuffle(data) as Product[];
};
export const useElectronicProductsQuery = (activeProject:number ) => {
  return useQuery(["project", activeProject], () => fetchElectronictablesProducts(activeProject)
  );
};
