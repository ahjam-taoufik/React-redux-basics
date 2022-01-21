import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers'
import { getPosts } from "./actions/post.action";
const store=createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
)

//dispatch c-a-d activer l'action , et dans cette cas en 
//a toutes les posts dans l'ouverture de l'application
store.dispatch(getPosts());

ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
