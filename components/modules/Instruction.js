import React from "react";

function Instruction() {
  return (
    <div>
      <h3 className="font-bold text-uigreen  p-4">How To Order?</h3>
      <ul className="space-y-2 pl-7 list-disc marker:text-green-800/80">
        <li>Sign in (or create an account) and set your delivery address.</li>
        <li>Choose the restaurant you want to order from.</li>
        <li>Select your items and tap “Add to Cart”.</li>
        <li>To place your order, select “View cart” or “Checkout”.</li>
        <li>Review your order and tap “Place Order”...</li>
        <li>Track your order progress.</li>
      </ul>
    </div>
  );
}

export default Instruction;
