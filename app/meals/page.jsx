import React, { Suspense } from "react";
import Link from "next/link";

import style from "./page.module.css";
import MealsGrid from "./meals-grid";
import { getMeals } from "@/lib/meals";

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const page = async () => {
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
        <Suspense fallback={<p className={style.loading}>Loading The Meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default page;
