import Card from "../modules/Card";

function MenuPage({ data }) {
  return (
    <div>
      <h2 className="underline  underline-offset-4 decoration-green-500 decoration-4 text-2xl font-bold ml-6 mt-28 mb-10">
        Menu
      </h2>
      <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3">
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
