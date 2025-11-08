import { serialize } from "cookie";

export default function handler(req, res) {
  const cookie = serialize("auth_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: -1,
  });
  res.setHeader("Set-Cookie", cookie);
  res.json({ success: true });
}
