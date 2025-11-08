import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "email et password requis" });

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, passwordHash: hash },
    });
    return res.json({ success: true, id: user.id });
  } catch (e) {
    return res
      .status(400)
      .json({ error: "Impossible de créer utilisateur (email déjà utilisé)" });
  }
}
