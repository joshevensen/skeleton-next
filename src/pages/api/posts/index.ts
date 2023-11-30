import enums from "@/enums";
import IPost from "@/features/posts/post.interface";
import services from "@/services";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let payload: IPost = req.body;
  let query = req.query;

  switch (req.method) {
    case "GET":
      const post = await services.db.post.findMany();
      res
        .status(enums.httpStatusCodes.OK)
        .json({ message: "Success", data: post });
      break;
    case "POST":
      const card = await services.db.post.create({ data: payload });
      res
        .status(enums.httpStatusCodes.Created)
        .json({ message: "Success", data: card });
      break;
    default:
      res
        .status(enums.httpStatusCodes.MethodNotAllowed)
        .json({ message: "Method Not Allowed" });
  }
}
