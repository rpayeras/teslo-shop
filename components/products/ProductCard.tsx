import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentImage = isHovered ? product.images[1] : product.images[0];

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`/products/${currentImage}`}
            alt={product.title}
          />
        </CardActionArea>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
