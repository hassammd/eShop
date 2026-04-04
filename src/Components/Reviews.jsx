import { FaUserTie } from "react-icons/fa";
const Reviews = ({ details }) => {
  return (
    <>
      <div classNameName="container">
        <div className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 flex items-center justify-center bg-[#FF7420] text-white text-lg font-semibold rounded-full">
              <FaUserTie />
            </div>
            <div>
              <div classNameName="text-gray-900 font-medium">
                {details.reviewerName}
              </div>
              <div className="text-gray-600 text-sm">
                {details.reviewerEmail}
              </div>
            </div>
          </div>

          <div className="flex text-[#FF7420] text-xl">★★★★★</div>

          <p className="text-gray-700">{details.comment}</p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
