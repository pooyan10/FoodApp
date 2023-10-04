import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";

function FoodDetails({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading Page ...</h2>;
  }

  return <DetailsPage {...data} />;
}

export default FoodDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: { foodId: food.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const {
    params: { foodId },
  } = context;

  console.log({ foodId });
  const res = await fetch(`${process.env.BASE_URL}/data/${foodId}`);
  const data = await res.json();

  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
};
