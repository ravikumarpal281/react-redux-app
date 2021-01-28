import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/CakeActions";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes from Hooks - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake from Hook</button>
    </div>
  );
};

export default HooksCakeContainer;
