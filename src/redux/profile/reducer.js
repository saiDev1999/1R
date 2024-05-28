const initialState = {
  profile: {
    name: "hello",
    email: "hello@gmail.com",
    mobile: 89989,
    imag: null,
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_INFO_CHANGE":
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
