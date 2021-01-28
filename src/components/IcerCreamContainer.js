import React from "react";
import { buyIceCream } from "../redux/IceCreams/IceCreamActions";
import { addIceCream } from "../redux/IceCreams/IceCreamActions";
import { connect } from "react-redux";

const IcerCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of ice creams : {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>

      <h2>Number of Ice creams after adding : {props.numberOfIceCreams}</h2>
      <button onClick={props.addIceCream}>Add Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    addIceCream: () => dispatch(addIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcerCreamContainer);
