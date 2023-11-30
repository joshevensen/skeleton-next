import dateService from "./date.service";
import dbService from "./db.service";
import enumService from "./enum.service";
import httpService from "./http.service";
import swrService from "./swr.service";

export default {
  date: dateService,
  db: dbService,
  // NOTE: Can't use emailService without a valid Postmark key
  // email: emailService,
  enum: enumService,
  http: httpService,
  swr: swrService,
};
