import React from "react";
import NavBar from "../components/functional/navBar/navBar";
import { useSelector } from "react-redux";

function BlogScreen() {
  const reduxState = useSelector((state) => state);
  console.log("reduxState: ", reduxState);
  return (
    <div>
      <NavBar />
      <h1>Book count </h1>
    </div>
  );
}

export default BlogScreen;
