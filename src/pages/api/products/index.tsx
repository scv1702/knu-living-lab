// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import csv from "csv-parser";
import { Product } from "../../../types/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results: Product[] = [];
  fs.createReadStream("data/products.csv")
    .pipe(csv())
    .on("data", (data: Product) => results.push(data))
    .on("end", () => {
      res.status(200).json(results);
    });
}
