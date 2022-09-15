import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Product } from "../../../interfaces";
import { Product as ProductModel } from "../../../models";

type ResponseData =
  | {
      message: string;
    }
  | Product;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  switch (req.method) {
    case "GET":
      return getProductBySlug(req, res);
    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

async function getProductBySlug(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { slug } = req.query;

  let condition = { slug };

  console.log(condition);

  await db.connect();

  const data = await ProductModel.findOne(condition).lean();

  if (!data)
    return res.status(404).json({
      message: "Product not found",
    });

  await db.disconnect();

  return res.status(200).json(data);
}
