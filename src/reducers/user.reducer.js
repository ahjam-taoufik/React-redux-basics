
import { GET_USER } from './../actions/user.action';

const init= {}

export default function userReducer(state=init, action){
   switch (action.type) {
       case GET_USER:
           return action.payload
         
       default:
         return  state
   }
}
