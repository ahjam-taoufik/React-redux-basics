import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
// export const EDIT_POST = "EDIT_POST";
// export const DELETE_POST = "DELETE_POST";
// export const ADD_LIKE = "ADD_LIKE";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3000/posts?_sort=id&_order=desc`)
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3000/posts`, data)
      .then(() => {
        dispatch({ type: ADD_POST, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

