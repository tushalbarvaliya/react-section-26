import React from "react";
import Link from "next/link";

import style from "./page.module.css";
import MealsGrid from "./meals-grid";
import { getMeals } from "@/lib/meals";

const page = () => {
  const meals = getMeals();
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals , created
          <span className={style.highlight}> by you</span>
        </h1>
        <p>
          choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={style.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={style.main}>
        <MealsGrid meals={mealsgit } />
      </main>
    </>
  );
};

export default page;
