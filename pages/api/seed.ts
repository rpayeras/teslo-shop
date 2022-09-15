import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "../../database";
import { Product } from "../../models";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { initialData } = seedDatabase;
  const { products } = initialData;

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(products);
  await db.disconnect();

  res.status(200).json({ name: "Database seedDatabase" });
}
