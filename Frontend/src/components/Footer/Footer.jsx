import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-40 w-full border-t-2 py-20">
      <div className="flex justify-between">
        <div className="">
          <h4 className="font-semibold">FRUIT &amp; VEGETABLES</h4>
          <div className="">
            <ul className="flex flex-col gap-3 mt-2 text-gray-600">
              <li>
                <Link>Fresh Vegetables</Link>
              </li>
              <li>
                <Link>Fresh Fruits</Link>
              </li>
              <li>
                <Link>Cuts &amp; Sprouts</Link>
              </li>
              <li>
                <Link>Exotic Fruits &amp; Veggies</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <h4 className="font-semibold">Breakfast &amp; Dairy</h4>
          <div className="">
            <ul className="flex flex-col gap-3 mt-2 text-gray-600">
              <li>
                <Link>Milk &amp; Flavoured Milk</Link>
              </li>
              <li>
                <Link>Butter and Margarine</Link>
              </li>
              <li>
                <Link>Cheese</Link>
              </li>
              <li>
                <Link>Eggs Substitutes</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <h4 className="font-semibold">Meat &amp; Seafood</h4>
          <div className="">
            <ul className="flex flex-col gap-3 mt-2 text-gray-600">
              <li>
                <Link>Milk &amp; Flavoured Milk</Link>
              </li>
              <li>
                <Link>Butter and Margarine</Link>
              </li>
              <li>
                <Link>Cheese</Link>
              </li>
              <li>
                <Link>Eggs Substitutes</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h4 className="font-semibold">Beverages</h4>
          <div className="">
            <ul className="flex flex-col gap-3 mt-2 text-gray-600">
              <li>
                <Link>Milk &amp; Flavoured Milk</Link>
              </li>
              <li>
                <Link>Butter and Margarine</Link>
              </li>
              <li>
                <Link>Cheese</Link>
              </li>
              <li>
                <Link>Eggs Substitutes</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h4 className="font-semibold">Breads &amp; Bakery</h4>
          <div className="">
            <ul className="flex flex-col gap-3 mt-2 text-gray-600">
              <li>
                <Link>Milk &amp; Flavoured Milk</Link>
              </li>
              <li>
                <Link>Butter and Margarine</Link>
              </li>
              <li>
                <Link>Cheese</Link>
              </li>
              <li>
                <Link>Eggs Substitutes</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
