import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../RTK/UsersSlice/UsersSlice";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const { Users, error } = useSelector((state) => state.user);

  console.log(Users, error);

  return (
    <>
      <div className="container">
        <h1>Users Profile</h1>
        {/* {data.map((items) => {
          return <p>{items.name}</p>;
        })} */}
      </div>
    </>
  );
};
export default Users;
