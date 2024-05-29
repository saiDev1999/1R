import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../customHooks/useAxios";
import CircleSpinner from "../spinners/circle-spinner";
import ImageComponent from "../image/image";
import "./index.css"; // Assuming you have a CSS file for styles
import { useDispatch, useSelector } from "react-redux";
import { productListingAction } from "../../../redux/products/action";
import { addToCartAction } from "../../../redux/cart/action";

const UseEffect1 = () => {
  //   const [todos, loading, error] = useAxios("https://dummyjson.com/products");

  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productListingAction());
  }, []);

  if (loading) {
    return <CircleSpinner />;
  }

  //   if (error) {
  //     return <h2>Something went wrong</h2>;
  //   }

  const handleAddToCart = (product) => {
    // Add to cart functionality, you can modify this function as needed
    alert(`Added ${product.title} to cart!`);
    dispatch(addToCartAction(product));
  };

  return (
    <div className="product-list">
      <h2>Use Effect example</h2>
      <div className="products">
        {products?.map((eachTodo) => (
          <div className="product-card" key={eachTodo.id}>
            <h3>{eachTodo.title}</h3>
            <ImageComponent src={eachTodo.thumbnail} />
            <div className="product-details">
              <p>{eachTodo.description}</p>
              <p>Price: ${eachTodo.price}</p>
              <button>
                <Link to={`/${eachTodo.brand}/${eachTodo.id}`}>
                  Click to view product
                </Link>
              </button>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(eachTodo)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect1;
