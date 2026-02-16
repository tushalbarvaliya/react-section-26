import React from "react";

const page = ({ params }) => {
  return (
    <>
      <main>
        <h1 style={{ color: "white", textAlign: "center" }}>{params.slug}</h1>
      </main>
    </>
  );
};

export default page;
