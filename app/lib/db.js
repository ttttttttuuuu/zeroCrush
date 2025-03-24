import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "visitor-count.json");

// 确保数据目录存在
const ensureDbExists = () => {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ count: 0 }));
  }
};

export const getVisitorCount = () => {
  ensureDbExists();
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
  return data.count;
};

export const incrementVisitorCount = () => {
  ensureDbExists();
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
  data.count += 1;
  fs.writeFileSync(DB_PATH, JSON.stringify(data));
  return data.count;
};
