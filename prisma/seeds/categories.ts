import { Account, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function categories(account: Account) {
  // Food
  await prisma.category.create({
    data: {
      name: "Food",
      slug: "food",
      account: {
        connect: { id: account.id },
      },
    },
  });

  // Games
  await prisma.category.create({
    data: {
      name: "Games",
      slug: "games",
      account: {
        connect: { id: account.id },
      },
    },
  });
}
