import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ThemeController from "./ThemeController ";

const Navbar = () => {
  const cartData = useSelector((state) => state.productCart.cart);
  const dispatch = useDispatch();

  const cartCount = cartData.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  const subtotal = cartData.reduce((acc, current) => {
    return acc + current.quantity * current.price;
  }, 0);

  const categories = useSelector((state) => state.categories.categories);
  const data = useSelector((state) => state.categories.categories);
  console.log("categories", data);

  return (
    <>
      <div className="bg-base-100 shadow-sm sticky top-0 z-10">
        <div className="container">
          <div className="navbar  ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? "bg-[#FF7420] text-white" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <details>
                      <summary>Parent</summary>
                      <ul className="p-2 bg-base-100 w-40 z-1">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-[#FF7420] text-white" : ""
                      }
                      to={"/products"}
                    >
                      Products
                    </NavLink>
                  </li>
                </ul>
              </div>
              <Link className="text-xl" to={"/"}>
                eShop
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu gap-2 menu-horizontal px-1">
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "bg-[#FF7420] text-white" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <details>
                    <summary>Categories</summary>
                    <ul className="p-2 bg-base-100 w-40 z-1">
                      {categories.slice(0, 5).map((items, index) => {
                        return (
                          <li key={items.slug || index}>
                            <Link to={`/category/${items.slug}`}>
                              {items.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-[#FF7420] text-white" : ""
                    }
                    to={"/users"}
                  >
                    Users
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end gap-5">
              <ThemeController />
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm rounded-2xl indicator-item bg-[#FF7420] text-white p-1.5">
                      {cartCount}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">{cartCount} Items</span>
                    <span className="text-info">
                      Subtotal: ${subtotal.toFixed(2)}
                    </span>
                    <div className="card-actions">
                      <Link
                        to={"/cart"}
                        className="btn bg-[#FF7420] btn-block text-white"
                      >
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
