import { Typography, Box } from "@mui/material";
import { ShopLayout } from "../components/layouts/ShopLayout";

const Custom404 = () => {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="Nothing to show"
      imageFullUrl=""
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        height="calc(100vh - 200px)"
      >
        <Typography variant="h1" fontWeight={200} fontSize={80}>
          404 |
        </Typography>
        <Typography marginLeft={2}>Nothing to see here...</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
