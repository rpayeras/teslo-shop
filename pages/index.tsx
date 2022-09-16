import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { Typography } from "@mui/material";
import { ProductList } from "../components/products";
import { useProducts } from "../hooks";
import { FullScreenLoading } from "../components/ui";

const Home: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout
      title={"Teslo shop - Home"}
      pageDescription={"Best products of Teslo"}
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Shop
      </Typography>

      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        All products
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default Home;
