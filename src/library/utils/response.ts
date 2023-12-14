import { NextApiResponse } from "next";
import { HttpStatusCodes } from "../enums";

function created(response: NextApiResponse, data: any) {
  return response
    .status(HttpStatusCodes.Created)
    .json({ message: "Created", data });
}

function destroyed(response: NextApiResponse) {
  return response.status(HttpStatusCodes.OK).json({ message: "Deleted" });
}

function error(
  response: NextApiResponse,
  status = HttpStatusCodes.ServerError,
  message = "Whoops! Something went wrong."
) {
  return response.status(status).json({ message: message });
}

function notImplemented(response: NextApiResponse) {
  return response
    .status(HttpStatusCodes.NotImplemented)
    .json("Not Implemented");
}

function notAllowed(response: NextApiResponse) {
  return response
    .status(HttpStatusCodes.MethodNotAllowed)
    .json({ message: "Method Not Allowed" });
}

function success(response: NextApiResponse, data: any) {
  return response.status(HttpStatusCodes.OK).json({ message: "Success", data });
}

function updated(response: NextApiResponse, data: any) {
  return response.status(HttpStatusCodes.OK).json({ message: "Updated", data });
}

const response = {
  created,
  destroyed,
  error,
  notAllowed,
  notImplemented,
  success,
  updated,
};

export default response;
