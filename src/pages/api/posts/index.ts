import enums from "@/enums";
import utils from "@/library/utils";
import Post from "@/types/post";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let payload: Post = req.body;
  let query = req.query;

  switch (req.method) {
    case "GET":
      const post = await utils.db.post.findMany();
      res
        .status(enums.HttpStatusCodes.OK)
        .json({ message: "Success", data: post });
      break;
    case "POST":
      const card = await utils.db.post.create({ data: payload });
      res
        .status(enums.HttpStatusCodes.Created)
        .json({ message: "Success", data: card });
      break;
    default:
      res
        .status(enums.HttpStatusCodes.MethodNotAllowed)
        .json({ message: "Method Not Allowed" });
  }
}
