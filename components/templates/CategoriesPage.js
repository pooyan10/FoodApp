import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../modules/Card";

function CategoriesPage({ data }) {
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  const router = useRouter();

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.difficulty !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };
  return (
    <div className="sm:mx-3">
      <h2 className="underline-offset-6 mb-12 ml-2 mt-24 text-2xl font-bold underline decoration-green-500 decoration-4">
        Categories
      </h2>
      <div className="">
        <div className="">
          <select
            name="difficulty"
            id=""
            value={query.difficulty}
            className=" mr-3 rounded-lg border border-green-900/20 p-2 text-green-900 shadow-md shadow-uigreen/40"
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            name="time"
            id=""
            value={query.time}
            className="mr-3 rounded-lg border border-green-900/20 p-2 text-green-900 shadow-md shadow-uigreen/40"
            onChange={changeHandler}
          >
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button
            className="rounded-md bg-uigreen px-3 py-1.5 text-white shadow-md"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <div className="mt-10 flex grid-cols-2 flex-col  sm:grid md:grid-cols-3">
          {!data.length ? (
            <div className="grid justify-center sm:col-span-2 md:col-span-3">
              <img src="/images/search.png" alt="category" className=" " />
            </div>
          ) : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
