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
      const data = await utils.db.post.findUnique({
        where: { id: Number(query.id) },
      });
      res.status(enums.HttpStatusCodes.OK).json({ message: "Success", data });
      break;
    case "PUT":
      res
        .status(enums.HttpStatusCodes.NotImplemented)
        .json({ message: "Not Setup" });
      break;
    case "DELETE":
      res
        .status(enums.HttpStatusCodes.NotImplemented)
        .json({ message: "Not Setup" });
      break;
    default:
      res
        .status(enums.HttpStatusCodes.MethodNotAllowed)
        .json({ message: "Method Not Allowed" });
  }
}
