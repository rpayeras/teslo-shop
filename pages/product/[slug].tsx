import { Box, Button, Grid, Typography } from "@mui/material";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";

import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow } from "../../components/products";
import { SizeSelector } from "../../components/products/SizeSelector";
import { ItemCounter } from "../../components/ui";
import { Product } from "../../interfaces";
import { dbProducts } from "../../database";
import { ParsedUrlQuery } from "querystring";

interface Props {
  product: Product;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  // const { query } = useRouter();

  // const { products: product, isLoading } = useProducts(
  //   `/products/${query.slug}`
  // );

  return (
    <ShopLayout
      title={product.title}
      pageDescription={product.description}
      imageFullUrl=""
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ProductSlideshow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column">
            {/* titles */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h1">
              {`$${product.price}`}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Quantity</Typography>
              <ItemCounter />
              <SizeSelector
                selectedSize={product.sizes[0]}
                sizes={product.sizes}
              />
            </Box>

            {/* Add to cart */}

            <Button color="secondary" className="circular-btn">
              Add to cart
            </Button>

            {/* <Chip label="Without stock" color="error" variant="outlined" /> */}

            {/* Description */}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Description</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

type StaticProps = {
  props: {
    product: Product;
  };
};

interface StaticParams extends ParsedUrlQuery {
  slug?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await dbProducts.getAllProductSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: any = async ({ params }: any) => {
  const { slug } = params;
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      destination: "/",
      permanent: false,
    };
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24,
  };
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug } = params as { slug: string };

//   const product = await dbProducts.getProductBySlug(slug);

//   if (!product) {
//     return {
//       destination: "/",
//       permanent: false,
//     };
//   }

//   return {
//     props: { product },
//   };
// };

export default ProductPage;
