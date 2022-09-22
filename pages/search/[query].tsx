import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { Typography } from "@mui/material";
import { ProductList } from "../../components/products";
import { dbProducts } from "../../database";
import { Product } from "../../interfaces";

interface Props {
  products: Product[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title={"Teslo shop - Search"}
      pageDescription={"Best products of Teslo"}
      imageFullUrl={""}
    >
      <Typography variant="h1" component="h1">
        Search Product
      </Typography>

      {foundProducts ? (
        <Typography
          variant="h2"
          sx={{ marginBottom: 1 }}
          textTransform="capitalize"
        >
          Term: {query}
        </Typography>
      ) : (
        <Typography
          variant="h2"
          sx={{ marginBottom: 1 }}
          textTransform="capitalize"
        >
          Product not found
        </Typography>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
