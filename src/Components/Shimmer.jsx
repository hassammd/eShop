const Shimmer = () => {
  return (
    <>
      <div className="flex w-74 flex-col gap-4 border border-base-200">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-2 w-28  "></div>
        <div className="skeleton h-2 w-full  "></div>
        <div className="skeleton h-2 w-full  "></div>
      </div>
    </>
  );
};
export default Shimmer;
