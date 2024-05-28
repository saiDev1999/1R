import React, { useEffect } from "react";
import NavBar from "../components/functional/navBar/navBar";
import { useDispatch, useSelector } from "react-redux";
import { productListingAction } from "../redux/products/action";

function BlogScreen() {
  const { products, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productListingAction());
  }, []);
  return (
    <div>
      <NavBar />
      <h1>Book count </h1>
      {loading ? (
        <h2>...please wait</h2>
      ) : (
        <>
          {products.products?.map((each) => {
            return (
              <>
                <h3>{each.title}</h3>
              </>
            );
          })}
        </>
      )}
    </div>
  );
}

export default BlogScreen;
