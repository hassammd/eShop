import { useDispatch, useSelector } from "react-redux";
import Hero from "../Components/Hero";
import { useEffect } from "react";
import { fetchProductsCategories } from "../RTK/ProductSlice/CategoriesSlice";
import Categories from "../Components/Categories";
import Shimmer from "../Components/Shimmer";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.categories);
  console.log("this is category", data);
  const { loading } = useSelector((state) => state.categories);
  const categories = data.categories;

  useEffect(() => {
    dispatch(fetchProductsCategories());
  }, []);
  return (
    <>
      {/* <Hero /> */}

      <div className="container">
        <div className="py-12">
          <h3>SHOP BY CATEGORY</h3>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {loading
            ? [...Array(8)].map((items, index) => <Shimmer key={index} />)
            : categories.map((items) => {
                return <Categories details={items} />;
              })}
        </div>
      </div>
    </>
  );
};
export default Home;
