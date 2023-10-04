import Link from "next/link";

function BannerFood() {
  return (
    <div className="mt-24 px-4 sm:flex">
      <div className="flex flex-col ">
        <h2 className="font-bold text-xl underline decoration-green-700/80 decoration-2 underline-offset-4 my-4">
          FoodApp
        </h2>
        <p className="font-semibold antialiased mb-3">
          Food Delivery and Takeout!
        </p>
        <span className="text-gray-600">
          FoodApp is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link
          className="px-5 py-1.5 rounded-md text-white bg-uigreen w-max mt-6"
          href="/menu"
        >
          See All
        </Link>
      </div>
      <div className="flex justify-center items-end">
        <img className="w-[650px]" src="/images/banner.png" alt="Food image" />
      </div>
    </div>
  );
}

export default BannerFood;
