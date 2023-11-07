import { Post } from "@prisma/client";

/**
 * Page
 */
export interface IPostField {
  title: string;
  description?: string;
}

export interface IPageSection {
  order: number;
  variation: number;
  content: any;
}

/**
 * Post
 */
export type NewPost = Omit<
  Post,
  | "id"
  | "slug"
  | "status"
  | "content"
  | "excerpt"
  | "publishAt"
  | "createdAt"
  | "updatedAt"
  | "deletedAt"
  | "allowcomments"
>;

declare global {
  namespace PrismaJson {
    type PostField = IPostField;
  }
}
