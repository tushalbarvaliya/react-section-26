import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs/promises";

const db = sql("meals.db");
export async function getMeals() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 5000);
  // });
  // throw new Error('no no no')
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
}


export async function saveMeal(meal) {
  if (!meal.image) {
    throw new Error("Image is required");
  }

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const imagePath = `public/images/${fileName}`;

  const bufferImage = Buffer.from(await meal.image.arrayBuffer());
  await fs.writeFile(imagePath, bufferImage);

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES
      (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `).run(meal);
}
