import { useParams } from "react-router-dom";
import ProductsCard from "../Components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductCategory } from "../RTK/ProductCategorySlice/ProductCategorySlice";

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
        <div className="py-12">
          <h3>SHOP BY CATEGORY</h3>
        </div>
        <div className="flex flex-wrap gap-4">
          {category.length > 0 ? (
            category.map((items) => {
              return <ProductsCard details={items} />;
            })
          ) : (
            <span className="loading loading-dots loading-2xl"></span>
          )}
        </div>
      </div>
    </>
  );
};
export default Catagory;
