
import { ADD_POST, GET_POSTS } from './../actions/post.action';

const init= {}

export default function postReducer(state=init, action){
   switch (action.type) {
       case GET_POSTS:
           return action.payload
       case ADD_POST:
           return [action.payload, ...state];
         
       default:
         return  state
   }
}
