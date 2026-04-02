import { useDispatch, useSelector } from "react-redux";
import Hero from "../Components/Hero";
import { useEffect } from "react";
import { fetchProductsCategories } from "../RTK/ProductSlice/CategoriesSlice";
import Categories from "../Components/Categories";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.categories);
  const categories = data.categories;

  useEffect(() => {
    dispatch(fetchProductsCategories());
  }, []);
  return (
    <>
      {/* <Hero /> */}

      <div className="container">
        <div className="flex flex-wrap gap-8 justify-center">
          {categories.length > 0 ? (
            categories.map((items) => {
              return <Categories details={items} />;
            })
          ) : (
            <>
              <div className="h-full flex items-center justify-center">
                <span className="loading loading-spinner text-primary"></span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
