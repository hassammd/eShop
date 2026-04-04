import { Link } from "react-router-dom";

const Categories = ({ details }) => {
  return (
    <>
      <Link to={`/category/${details.slug}`}>
        <div className="hover-3d cursor-pointer bg-base-100 shadow-sm">
          {/* content */}
          <div className="flex items-center justify-center flex-col py-4">
            <figure className=" w-60 rounded-2xl">
              <img src={details.image} alt="Tailwind CSS 3D card" />
            </figure>
            <h3>{details.name}</h3>
          </div>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Link>
    </>
  );
};

export default Categories;
