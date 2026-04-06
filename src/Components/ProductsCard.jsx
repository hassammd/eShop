import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../RTK/CartSlice/CartSlice";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const ProductsCard = ({ details }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.productCategory);
  console.log(loading);

  const cartHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(details));
    navigate("/cart");
  };

  return (
    <>
      <Link to={`/product/${details.id}`}>
        <div className="card bg-base-100 p-4 w-74 shadow-sm border border-base-200 rounded-2xl ">
          <span class="badge badge-lg bg-[#FF7420] text-white">
            {details.discountPercentage.toFixed(0)}%
          </span>
          <figure className=" ">
            <img className=" " src={details.thumbnail} alt="image" />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title ">{details.title}</h2>
            <p className="line-clamp-2  ">{details.description}</p>
            <div className="flex items-center  justify-between py-2">
              <span>${details.price}</span>
              <span className="border h-8 w-8 border-base-300 flex items-center justify-center rounded-4xl ">
                <IoCartOutline
                  className="text-xl font-semibold text-[#FF7420] cursor-pointer"
                  onClick={cartHandler}
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ProductsCard;
