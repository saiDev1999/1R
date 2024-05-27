import React from "react";
import NavBar from "../components/functional/navBar/navBar";
import { useSelector } from "react-redux";

function BlogScreen() {
  const { bookCount } = useSelector((state) => state);
  return (
    <div>
      <NavBar />
      <h1>Book count {bookCount} </h1>
    </div>
  );
}

export default BlogScreen;
