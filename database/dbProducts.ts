import { db } from "./";
import { Product as Model } from "../models";
import { Product } from "../interfaces";

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  await db.connect();
  const product = await Model.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlug {
  slug: string;
}

export const getAllProductSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Model.find().select("slug -_id").lean();
  await db.disconnect();

  return slugs;
};
