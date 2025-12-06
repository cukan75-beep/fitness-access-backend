import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { token } = req.query;

  const filePath = path.join(process.cwd(), "tokens.json");

  if (!fs.existsSync(filePath)) {
    return res.status(400).send("Ссылка недействительна.");
  }

  const tokens = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (!tokens[token]) {
    return res.status(400).send("Ссылка недействительна или устарела.");
  }

  if (tokens[token].used) {
    return res.status(400).send("Ссылка уже была использована.");
  }

  tokens[token].used = true;
  fs.writeFileSync(filePath, JSON.stringify(tokens), "utf8");

  return res.redirect("https://cukan75-beep.github.io/fitness-site/chat.html");
}
