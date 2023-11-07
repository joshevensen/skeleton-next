import { Post } from "@prisma/client";

/**
 * JSON Types
 */
export interface IPostMeta {
  type: "title" | "description";
  content: string;
}

declare global {
  namespace PrismaJson {
    type PostMeta = IPostMeta;
  }
}

/**
 * New Types
 */
export type NewPost = Omit<
  Post,
  | "id"
  | "slug"
  | "status"
  | "content"
  | "excerpt"
  | "createdAt"
  | "updatedAt"
  | "deletedAt"
  | "allowcomments"
>;
