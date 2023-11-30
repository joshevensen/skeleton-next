import { Account, Post, PostStatus, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const ideasCount = 25;
const writingCount = 15;
const futureCount = 3;
const publishedCount = 12;

export default async function posts(account: Account, author: User) {
  type NewPost = Pick<
    Post,
    "title" | "slug" | "status" | "accountId" | "authorId"
  >;

  const posts: NewPost[] = [];

  for (let i = 0; i < ideasCount; i++) {
    posts.push({
      title: `Idea #${i + 1}`,
      slug: `idea-${i + 1}`,
      status: PostStatus.Ideas,
      accountId: account.id,
      authorId: author.id,
    });
  }

  for (let i = 0; i < writingCount; i++) {
    posts.push({
      title: `Writing #${i + 1}`,
      slug: `writing-${i + 1}`,
      status: PostStatus.Writing,
      accountId: account.id,
      authorId: author.id,
    });
  }

  for (let i = 0; i < futureCount; i++) {
    posts.push({
      title: `Future #${i + 1}`,
      slug: `future-${i + 1}`,
      status: PostStatus.Future,
      accountId: account.id,
      authorId: author.id,
    });
  }

  for (let i = 0; i < publishedCount; i++) {
    posts.push({
      title: `Published #${i + 1}`,
      slug: `published-${i + 1}`,
      status: PostStatus.Published,
      accountId: account.id,
      authorId: author.id,
    });
  }

  await prisma.post.createMany({
    data: posts,
  });
}
