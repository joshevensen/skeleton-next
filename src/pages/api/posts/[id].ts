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
      const data = await services.db.post.findUnique({
        where: { id: Number(query.id) },
      });
      res.status(enums.httpStatusCodes.OK).json({ message: "Success", data });
      break;
    case "PUT":
      res
        .status(enums.httpStatusCodes.NotImplemented)
        .json({ message: "Not Setup" });
      break;
    case "DELETE":
      res
        .status(enums.httpStatusCodes.NotImplemented)
        .json({ message: "Not Setup" });
      break;
    default:
      res
        .status(enums.httpStatusCodes.MethodNotAllowed)
        .json({ message: "Method Not Allowed" });
  }
}
