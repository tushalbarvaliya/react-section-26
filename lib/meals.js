import error from "@/app/meals/error";
import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";

const db = sql("meals.db");
export async function getMeals() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 5000);
  // });
  // throw new Error('no no no')
  return db.prepare("SELECT * FROM meals").all();
}
