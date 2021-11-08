import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
const reducer = (posts = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      console.info("delete", posts, action.payload);
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
export default reducer;
