import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

function DetailsPage(props) {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;
  return (
    <div className="flex flex-col sm:px-4">
      <h1 className="underline underline-offset-4 decoration-green-500 decoration-4 text-2xl font-bold ml-2 mt-24 mb-12">
        Details
      </h1>
      <div className="flex flex-col mb-4 sm:grid grid-cols-6 space-x-4">
        <img
          src={`/images/${id}.jpeg`}
          alt={name}
          className="mx-2 rounded-lg col-span-3"
        />
        <div className="flex flex-col col-span-2 sm:">
          <div className="flex items-center mt-4 mx-4 justify-between sm:flex-col sm:items-start sm:mt-0 space-y-3">
            <h3 className="text-uigreen font-bold text-xl">{name}</h3>
            <span className="flex items-center ">
              <Location />
              {details[0].Cuisine}
            </span>
          </div>

          <span className="flex mt-4 ml-2">
            <Dollar />
            {discount ? (price * (100 - discount)) / 100 : price}$
          </span>
          {discount ? (
            <span className="mt-4 mx-2 mr-6 text-center bg-red-600 rounded-md text-white font-light">
              {discount}$ OFF
            </span>
          ) : null}
        </div>
      </div>
      <div className="p-2 mt-10">
        <p className="text-gray-900">{introduction}</p>
      </div>
      <div className="">
        {/* //Details******-------------- */}
        <h4 className="font-bold text-uigreen p-2 mb-2  mt-10 text-xl">
          Details
        </h4>
        <ul className="list-disc marker:text-uigreen pl-7 space-y-1">
          {details.map((detail, index) => (
            <li key={index}>
              <div className="flex">
                <p className="font-semibold">{Object.keys(detail)[0]}: </p>
                <span className="pl-1 text-slate-500 font-light">
                  {Object.values(detail)[0]}{" "}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* //Ingredients******-------------- */}
      <h4 className="font-bold text-uigreen p-2 mb-2  mt-10 text-xl">
        Ingredients
      </h4>
      <ul className="list-disc marker:text-uigreen pl-7 space-y-1">
        {ingredients.map((item, index) => (
          <li key={index}>
            <p className="font-semibold">{item}</p>
          </li>
        ))}
      </ul>

      {/* Recipe******----------------- */}
      <h4 className="font-bold text-uigreen p-2 mb-2  mt-10 text-xl">Recipe</h4>
      <ol className=" bg-[#e8ffdb]">
        {recipe.map((item, index) => (
          <li
            className="odd:bg-[#bcff93] p-6 flex items-center space-x-3"
            key={index}
          >
            <div className="text-3xl mr-2.5 text-green-800">{index + 1}</div>
            <p>{item}</p>
          </li>
        ))}
      </ol>

      <button className="mt-16 bg-uigreen py-2 rounded-md text-white">
        Add to Cart
      </button>
    </div>
  );
}

export default DetailsPage;
