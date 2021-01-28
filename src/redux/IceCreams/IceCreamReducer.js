import { ADD_ICECREAM, BUY_ICECREAM } from "./IceCreamTypes";
const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case ADD_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
