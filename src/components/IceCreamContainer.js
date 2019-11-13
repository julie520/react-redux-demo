import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer({ numOfIceCream, buyIceCream }) {
  return (
    <div>
      <h2>Number of icecreams : {numOfIceCream}</h2>
      <button onClick={buyIceCream}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => ({
  numOfIceCream: state.iceCream.numOfIceCream
});

const mapDispatchToProps = dispatch => ({
  buyIceCream: () => dispatch(buyIceCream())
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
