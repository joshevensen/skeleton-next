import { PrismaClient } from "@prisma/client";
import Categories from "./seeds/categories";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      emailAddress: "john@acmeblog.com",
      firstName: "John",
      lastName: "Doe",
    },
  });

  await Categories();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
