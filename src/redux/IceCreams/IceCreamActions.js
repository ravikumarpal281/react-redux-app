import { BUY_ICECREAM, ADD_ICECREAM } from "./IceCreamTypes";
export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export const addIceCream = () => {
  return {
    type: ADD_ICECREAM,
  };
};
