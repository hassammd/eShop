import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../RTK/SingleProductSlice/SingleProductSlice";
import Reviews from "../Components/Reviews";
import { TiTick } from "react-icons/ti";
import { addToCart } from "../RTK/CartSlice/CartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product, loading } = useSelector((state) => state.singleProduct);

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(productId));
    }
  }, [productId, dispatch]);

  if (loading) {
    return (
      <div className="container absolute top-[50%] left-[50%] translate-[-50$ -50%] w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    );
  }
  if (!product) {
    return <h1>Product Not Found</h1>;
  }
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 gap-3 ">
          <div className="bg-base-200">
            <div className="carousel w-full">
              {product.images &&
                product.images.map((img, index) => {
                  return (
                    <div
                      id={`slide${index}`}
                      className="carousel-item relative w-full"
                    >
                      <img src={img} className="w-full" />
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                          href={`#slide${index === product.images.length - 1 ? 0 : index + 1}`}
                          className="btn btn-circle"
                        >
                          ❮
                        </a>
                        <a
                          href={`#slide${index === product.images.length - 1 ? 0 : index + 1}`}
                          className="btn btn-circle"
                        >
                          ❯
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="p-8 flex flex-col gap-3 justify-center">
            <span>{product.brand}</span>
            <h2 className="text-[#FF7420] uppercase">{product.title}</h2>
            <p>{product.description}</p>
            <span className="font-bold">${product.price}</span>
            <div>
              <span>{product.availabilityStatus}: </span>
              <span>{product.stock}</span>
              <span className="flex items-center gap-1">
                <TiTick />
                {product.shippingInformation}
              </span>
            </div>
            <div>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="btn btn-wide bg-[#FF7420] text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section */}

      <div className="container py-15">
        <h1 className="text-center py-8">Customer Reviews</h1>
        <div className=" flex justify-center gap-4 mx-auto">
          {product.reviews &&
            product.reviews.map((items) => {
              return <Reviews details={items} />;
              s;
            })}
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
