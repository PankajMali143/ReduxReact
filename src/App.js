import { connect } from "react-redux";
import { increaseCountAction, decreaseCountAction } from "./count/actions";
import "./styles.css";

const App = (props) => {
  const { count, increaseCount, decreaseCount } = props;
  console.log({ props });

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => increaseCount(count)}>Up</button>
      <button onClick={() => decreaseCount(count)}>Dwon</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    count: state.count123,
    random: "Random"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: (count) => dispatch(increaseCountAction(count)),
    decreaseCount: (count) => dispatch(decreaseCountAction(count))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
