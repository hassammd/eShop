import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseCart,
  increaseCart,
  removeCart,
} from "../RTK/CartSlice/CartSlice";
import { useState } from "react";

const CartItem = () => {
  const cartData = useSelector((state) => state.cart.cartItems);
  //cart count
  const cartCount = cartData.reduce(
    (acc, current) => acc + current.quantity,
    0,
  );

  //subtotel
  const subtotal = cartData.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);
  const [shipping, setShipping] = useState(10);
  const dispatch = useDispatch();

  const [promoCode, setPromoCode] = useState(""); // user input
  const [discount, setDiscount] = useState(10); //for discount Amount
  const [error, setError] = useState(""); // for Error Message

  const handleApplyPromo = () => {
    if (promoCode === "SAVE10") {
      const discountAmount = subtotal * 0.1;
      setDiscount(discountAmount);
      setError("");
      alert("Promo Code Applied");
    } else {
      setError("Enter Valid Promo Code");
      setDiscount(0);
    }
  };

  return (
    <>
      {cartData.length > 0 ? (
        <div className="container mx-auto mt-10 p-6">
          <div className=" flex flex-col lg:flex-row shadow-lg bg-base-100 rounded-lg overflow-hidden">
            <div className="w-full lg:w-3/4 bg-,white px-10 py-10">
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
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-right">
                  Total
                </h3>
              </div>

              {cartData.map((items) => {
                return (
                  <>
                    <div className="flex items-center hover:bg-base-200  -mx-8 px-6 py-5">
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img
                            className="  rounded"
                            src={items.image}
                            alt="Product"
                          />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">
                            {items.name}
                          </span>
                          <span
                            onClick={() => dispatch(removeCart(items.id))}
                            className="text-blue-500 text-xs cursor-pointer hover:underline"
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 justify-center w-1/5">
                        <button
                          className="btn btn-square"
                          onClick={() => dispatch(decreaseCart(items.id))}
                        >
                          -
                        </button>
                        <span>{items.quantity}</span>
                        <button
                          className="btn btn-square"
                          onClick={() => dispatch(increaseCart(items.id))}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        $ {items.price}
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
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>
            <div
              id="summary"
              className="w-full lg:w-1/4 px-8 py-10 bg-bg-base-300"
            >
              <h2 className="font-bold text-2xl border-b pb-8">
                Order Summary
              </h2>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cartCount}
                </span>
                <span className="font-semibold text-sm">
                  $ {subtotal.toFixed(2)}
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
                  <option>Standard shipping - $10.00</option>
                  <option>Express shipping - $25.00</option>
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
                  onChange={(e) => setPromoCode(e.target.value)}
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full rounded border outline-none"
                />
                <p className="text-red-500">{error}</p>
              </div>
              <button
                onClick={handleApplyPromo}
                className="bg-red-500 cursor-pointer hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded transition-colors"
              >
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${(shipping + subtotal - discount).toFixed(2)}</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded transition-colors shadow-md">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </>
  );
};
export default CartItem;
