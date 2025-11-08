import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@example.com";
  const password = "admin123";
  const hash = await bcrypt.hash(password, 10);

  const exists = await prisma.user.findUnique({ where: { email } });
  if (!exists) {
    await prisma.user.create({
      data: { email, passwordHash: hash },
    });
    console.log(`✅ Admin créé: ${email} / ${password}`);
  } else {
    console.log("ℹ️ Admin déjà existant");
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
