import { useParams } from "react-router-dom";
import ProductsCard from "../Components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductCategory } from "../RTK/ProductCategorySlice/ProductCategorySlice";
import Shimmer from "../Components/Shimmer";
import BackBtn from "../Components/BackBtn";

const Catagory = () => {
  const { categoryName } = useParams();
  const data = useSelector((state) => state);
  const category = data.productCategory.categoryItems;
  const loading = data.productCategory.loading;
  console.log("this is loading", loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCategory(categoryName));
  }, []);

  return (
    <>
      <div className="container">
        <div className="py-12 flex justify-between items-center">
          <h3>SHOP BY CATEGORY</h3>
          <BackBtn />
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {loading
            ? [...Array(10)].map((items) => {
                return <Shimmer />;
              })
            : category.map((items) => {
                return <ProductsCard details={items} />;
              })}
        </div>
      </div>
    </>
  );
};
export default Catagory;
