import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const token = Math.random().toString(36).substring(2, 10);

  const filePath = path.join(process.cwd(), "tokens.json");

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}), "utf8");
  }

  const tokens = JSON.parse(fs.readFileSync(filePath, "utf8"));
  tokens[token] = { used: false };
  fs.writeFileSync(filePath, JSON.stringify(tokens), "utf8");

  return res.send({
    link: `https://${req.headers.host}/api/access/${token}`
  });
}
