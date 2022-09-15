import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Gender, Product } from "../../../interfaces";
import { Product as ProductModel } from "../../../models";
import { SHOP_CONSTANTS } from "../../../constants";

type ResponseData =
  | {
      message: string;
    }
  | Product[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

async function getProducts(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { gender = "all" } = req.query;

  let condition = {};

  if (
    gender !== "all" &&
    SHOP_CONSTANTS.validGenders.includes(gender as string)
  ) {
    condition = { gender };
  }

  await db.connect();

  const products = await ProductModel.find(condition)
    .select("title images price inStock slug -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
}
