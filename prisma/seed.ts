import { PrismaClient, UserRole } from "@prisma/client";
import Categories from "./seeds/categories";

const prisma = new PrismaClient();

async function main() {
  const account = await prisma.account.create({
    data: {
      name: "Acme Blog",
      users: {
        create: {
          emailAddress: "john@acmeblog.com",
          firstName: "John",
          lastName: "Doe",
          role: UserRole.Admin,
        },
      },
    },
  });

  await Categories(account);
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
