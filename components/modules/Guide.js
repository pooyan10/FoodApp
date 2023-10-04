import Link from "next/link";
import React from "react";

function Guide() {
  return (
    <div className="mt-24 flex justify-evenly flex-wrap gap-2">
      <Link
        href="/menu"
        className="px-5 py-1.5 border shadow-lg shadow-uigreen/50 rounded-lg"
      >
        Menu
      </Link>
      <Link
        href="/categories"
        className="px-5 py-1.5 border shadow-lg shadow-uigreen/50 rounded-lg"
      >
        Categories
      </Link>
      <Link
        href=""
        className="px-5 py-1.5 border shadow-lg shadow-uigreen/50 rounded-lg"
        rounded-lg
      >
        Discount
      </Link>
    </div>
  );
}

export default Guide;
