import MenuPage from "@/components/templates/MenuPage";
import React from "react";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export const getStaticProps = async (context) => {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  console.log(data);

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
};
