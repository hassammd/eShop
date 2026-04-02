import { useDispatch } from "react-redux";
import { addToCart } from "../RTK/CartSlice/CartSlice";

const ProductsCard = ({ details }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card bg-base-100 w-74 shadow-sm">
        <figure>
          <img className=" " src={details.thumbnail} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{details.title}</h2>
          <p>{details.description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(details))}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsCard;
