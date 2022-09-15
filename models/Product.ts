import mongoose, { Schema, Model, model } from "mongoose";
import { Product } from "../interfaces";

const ProductSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "{VALUE} is not a valid size",
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String },
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} is not a valid gender",
      },
    },
    gender: [
      {
        type: String,
        enum: {
          values: ["men", "women", "kid", "unisex"],
          message: "{VALUE} is not a valid gender",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ title: "text", tags: "text" });

const Product: Model<Product> =
  mongoose.models.Product || model("Product", ProductSchema);

export default Product;
