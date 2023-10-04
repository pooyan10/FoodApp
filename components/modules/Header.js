import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between m-5 items-center">
      <div className="text-uigreen font-bold text-2xl">
        <Link href="/">FoodApp</Link>
      </div>
      <div className="space-x-5">
        <Link href="/menu">Menu</Link>
        <Link href="/categories">Categories</Link>
      </div>
    </div>
  );
}

export default Header;
