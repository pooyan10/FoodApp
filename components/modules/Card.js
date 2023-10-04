import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

function Card(props) {
  const { id, name, price, details, discount } = props;
  return (
    <div className="relative m-2 mb-8 flex flex-col gap-1 rounded-lg border-l-2 border-r-2 border-green-100/40 p-1 shadow-lg shadow-green-800/50">
      <img src={`/images/${id}.jpeg`} alt={name} className="rounded-lg " />
      <div className="flex justify-between px-2 py-4">
        <h4 className="overflow-hidden">{name}</h4>
        <div className="flex items-center gap-1 pr-1">
          <Location />
          {details[0].Cuisine}
        </div>
      </div>

      <div className="-mt-1 flex">
        <Dollar />
        {discount ? (
          <span className="text-red-700">
            {(price * (100 - discount)) / 100} $
          </span>
        ) : (
          <span>{price} $</span>
        )}
        {discount ? (
          <div className="absolute left-3 top-3 rounded-lg border-4 border-white bg-red-600 p-2 text-lg text-white ">
            {discount} %
          </div>
        ) : null}
      </div>
      <Link
        href={`/menu/${id}`}
        className=" mb-0.5 mt-4 flex items-center justify-center rounded-md bg-uigreen py-1 text-white hover:bg-green-600"
      >
        See Details
      </Link>
    </div>
  );
}

export default Card;
