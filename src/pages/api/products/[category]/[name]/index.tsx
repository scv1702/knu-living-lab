// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("penny-pincher");
  const results = await db
    .collection("products")
    .find({ name: req.query.name })
    .toArray();
  results.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); // order by price ascending
  res.status(200).json(results);
}
