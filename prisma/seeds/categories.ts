import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Categories() {
  // Food
  await prisma.category.create({
    data: {
      name: "Food",
      slug: "food",
    },
  });

  // Games
  await prisma.category.create({
    data: {
      name: "Games",
      slug: "games",
    },
  });
}
