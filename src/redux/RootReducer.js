import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceCreamReducer from "./IceCreams/IceCreamReducer";

const rootreducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootreducer;
