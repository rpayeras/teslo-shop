import { FC } from "react";

import { Product } from "../../interfaces";
import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </Grid>
  );
};
