import useSWR, { SWRConfiguration } from "swr";
import { Product } from "../interfaces";

// const fetcher = (...args: [key: string]) =>
//   fetch(...args).then((res) => res.json());

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
  //const { data, error } = useSWR<Product[]>(`/api${url}`, fetcher, config);
  const { data, error } = useSWR<Product[]>(`/api${url}`, config);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
