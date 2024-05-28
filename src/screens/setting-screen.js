import React from "react";
import NavBar from "../components/functional/navBar/navBar";
import { useDispatch, useSelector } from "react-redux";
import { buyBookFunction, returnBookFunction } from "../redux/actions";
import { profileUpdate } from "../redux/profile/action";

function SettingScreen() {
  const dispatch = useDispatch();
  const {
    books: { bookCount },
    profile: { profile },
  } = useSelector((state) => state);
  // console.log("reduxState: ", reduxState);
  const bookBuy = () => {
    dispatch(buyBookFunction());
  };
  const bookReturn = () => {
    dispatch(returnBookFunction());
  };

  const updateProfile = () => {
    dispatch(
      profileUpdate({
        name: "ram",
        email: "ram@gmail.com",
        mobile: 909079,
      })
    );
  };
  return (
    <div>
      <NavBar />
      <button onClick={bookBuy}>BUY BOOK</button>
      <button onClick={bookReturn}>RETURN BOOK</button>
      <h2>Book count in library {bookCount} </h2>

      <h1>Profile info</h1>
      <h3>{profile.name}</h3>
      <h3>{profile.email}</h3>
      <h3>{profile.mobile}</h3>

      <button onClick={updateProfile}>Update profile details</button>
    </div>
  );
}

export default SettingScreen;
