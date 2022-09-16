import React from "react";

import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const CategoryPage = () => {
  const { products, isLoading } = useProducts(`/products?gender=kid`);

  return (
    <ShopLayout
      title={"Category page"}
      pageDescription={"desc"}
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Category page
      </Typography>

      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        All products
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default CategoryPage;
