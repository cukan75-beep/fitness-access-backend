import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { token } = req.query;

  const filePath = path.join(process.cwd(), "tokens.json");

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Token storage not found" });
  }

  const tokens = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (!tokens[token]) {
    return res.status(404).json({ error: "Invalid or expired token" });
  }

  if (tokens[token].used) {
    return res.status(403).json({ error: "Token already used" });
  }

  tokens[token].used = true;
  fs.writeFileSync(filePath, JSON.stringify(tokens), "utf8");

  return res.json({
    link: "https://chatbase.co/YOUR-CHATBASE-ASSISTANT-LINK"
  });
}
