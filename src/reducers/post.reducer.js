
import { GET_POSTS } from './../actions/post.action';

const init= {}

export default function postReducer(state=init, action){
   switch (action.type) {
       case GET_POSTS:
           return action.payload
         
       default:
         return  state
   }
}
