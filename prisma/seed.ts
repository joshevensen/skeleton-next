import { PrismaClient, UserRole } from "@prisma/client";
import categories from "./seeds/categories";
import posts from "./seeds/posts";

const prisma = new PrismaClient();

async function main() {
  const account = await prisma.account.create({
    data: {
      name: "Acme Blog",
    },
  });

  const user = await prisma.user.create({
    data: {
      emailAddress: "john@acmeblog.com",
      firstName: "John",
      lastName: "Doe",
      role: UserRole.Admin,
      account: { connect: account },
    },
  });

  await categories(account);
  await posts(account, user);
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
