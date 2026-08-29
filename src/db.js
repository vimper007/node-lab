import fs from "fs/promises";

const DB_PATH = new URL("./db.json", import.meta.url);
export const readDb = async () => {
  try {
    const db = await fs.readFile(DB_PATH, "utf-8");
    console.log(db);
    return JSON.parse(db);
  } catch (error) {
    console.error(error.message);
  }
};

export const saveDb = async (data) => {
  try {
    const result = await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const insertDb = async (data) => {
  const db = await readDb();
  db.notes?.push(data);
  const result = await saveDb(db);
  return result;
};
