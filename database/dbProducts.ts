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

export const getProductsByTerm = async (term: string): Promise<Product[]> => {
  term = term.toString().toLowerCase();

  await db.connect();

  const products = await Model.find({
    $text: { $search: term },
  })
    .select("title images price inStock slug -_id")
    .lean();

  await db.disconnect();

  return products;
};

export const getAllProducts = async (): Promise<Product[]> => {
  await db.connect();
  const products = await Model.find()
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();

  return products;
};
