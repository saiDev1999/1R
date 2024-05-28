import axios from "axios";

export const productListingAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "PRODUCTS_RETRIEVE_LOADING",
      });
      const response = await axios.get("https://dummyjson.com/products");

      dispatch({
        type: "PRODUCTS_RETRIEVE_SUCCESS",
        payload: response.data.products,
      });
    } catch (err) {
      dispatch({
        type: "PRODUCTS_RETRIEVE_ERROR",
      });
    }
  };
};
