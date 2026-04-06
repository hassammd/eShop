import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import {
  decreaseCart,
  increaseCart,
  removeCart,
} from "../RTK/ProductCartSlice/ProductCartSlice";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";

const CartItem = () => {
  const [promoCode, setPromoCode] = useState("");
  const [shipping, setShipping] = useState(10);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoError, setPromoError] = useState("");
  const cartDetails = useSelector((state) => state.productCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("this is data", cartDetails);

  //cart count
  const cartCount = cartDetails.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  //subtotal
  const subTotal = cartDetails.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  const finalTotal = subTotal + Number(shipping) - discountAmount;
  //promo handler
  const promoHandler = () => {
    if (promoCode === "SAVE10") {
      const discount = subTotal * 0.1;
      setDiscountAmount(discount);
      setPromoError("");
    } else {
      setPromoError("Envalid Promo");
      setDiscountAmount(0);
    }
  };

  return (
    <>
      {cartDetails.length > 0 ? (
        <div className="container mx-auto mt-10 p-6">
          <div className="flex flex-col lg:flex-row shadow-lg bg-base-100 rounded-lg overflow-hidden">
            {/* Left Side: Product List */}
            <div className="w-full lg:w-3/4 bg-base-100  px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h2 className="font-bold text-2xl">Shopping Cart</h2>
                <h2 className="font-semibold text-2xl">{cartCount} Items</h2>
              </div>

              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5  ">
                  Total
                </h3>
              </div>

              {/* Example Product Row */}
              {cartDetails &&
                cartDetails.map((items) => {
                  return (
                    <>
                      <div className="flex items-center hover:bg-base-200 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                          <div className="w-20">
                            <img
                              className="rounded"
                              src={items.thumbnail}
                              alt="Product"
                            />
                          </div>
                          <div className="flex flex-col justify-center ml-4 flex-grow">
                            <span className="font-bold text-sm">
                              {items.title}
                            </span>
                            <span
                              onClick={() => dispatch(removeCart(items.id))}
                              className="text-red-500 text-xs cursor-pointer hover:underline"
                            >
                              Remove
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 justify-center w-1/5">
                          <button
                            onClick={() => dispatch(decreaseCart(items.id))}
                            className="btn btn-square"
                          >
                            -
                          </button>
                          <span>{items.quantity}</span>
                          <button
                            onClick={() => dispatch(increaseCart(items.id))}
                            className="btn btn-square"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          ${items.price}
                        </span>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          ${(items.price * items.quantity).toFixed(2)}
                        </span>
                      </div>
                    </>
                  );
                })}

              <Link
                to={"/"}
                className="flex font-semibold text-[#FF7420] text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-[#FF7420] w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            {/* Right Side: Summary */}
            <div
              id="summary"
              className="w-full lg:w-1/4 px-8 py-10 bg-base-200"
            >
              <h2 className="font-bold text-2xl border-b pb-8">
                Order Summary
              </h2>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cartCount}
                </span>
                <span className="font-semibold text-sm">
                  ${subTotal.toFixed(2)}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select
                  onChange={(e) => setShipping(Number(e.target.value))}
                  className="block p-2 border text-gray-600 w-full text-sm outline-none rounded"
                >
                  <option value="10">Standard shipping - $10.00</option>
                  <option value="25">Express shipping - $25.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  onChange={(e) => setPromoCode(e.target.value)}
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full rounded border outline-none"
                />
                <p>{promoError}</p>
              </div>
              <button
                onClick={() => promoHandler()}
                className="bg-red-500 cursor-pointer hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded transition-colors"
              >
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
                <button className="bg-[#FF7420] cursor-pointer font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded transition-colors shadow-md">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex flex-col justify-center items-center gap-11">
            <h2 className="uppercase">Shopping Cart</h2>
            <BsCart3 className="text-6xl text-center" />
            <h1>Your Cart is Currently Empty!</h1>
            <p className="text-center">
              Before proceed to checkout you must add some products to your
              shopping cart, You will find a lot of interesting products on our
              "Shop" page.
            </p>
            <button
              onClick={() => navigate("/")}
              className="btn btn-soft bg-[#FF7420] text-white"
            >
              Return To Shop
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
