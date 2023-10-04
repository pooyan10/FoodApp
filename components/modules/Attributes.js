import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

function Attributes() {
  return (
    <div>
      <h3 className="font-bold text-uigreen p-4 mt-24">Why Us?</h3>
      <div className="flex flex-wrap justify-evenly ">
        <div className="flex flex-col items-center justify-center text-center w-40 h-40 m-4  sm:w-50  shadow-xl shadow-uigreen/30 rounded-lg">
          <Fast />
          <p className="mt-5">Fast</p>
        </div>
        <div className="flex flex-col items-center justify-center  text-center w-40 h-40 m-4  sm:w-50  shadow-xl shadow-uigreen/30 rounded-lg">
          <Food />
          <p className="mt-5">Food</p>
        </div>
        <div className="flex flex-col items-center justify-center  text-center w-40 h-40 m-4  sm:w-50 shadow-xl shadow-uigreen/30 rounded-lg">
          <Choice />
          <p className="mt-5">Your Choice</p>
        </div>
        <div className="flex flex-col items-center justify-center  text-center w-40 h-40 m-4 sm:w-50  shadow-xl shadow-uigreen/30 rounded-lg">
          <Clock />
          <p className="mt-5">24/7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
