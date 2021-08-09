import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; // for accessing store values. allows us to access a specific part
// whereas useStore is the whole store

const Counter = () => {
  const count = useSelector((state) => state.count); // sets subscription for this component
  const dispatch = useDispatch(); // disptaches an action against our store
  const toggleCounterHandler = () => {};

  function increment() {
    dispatch({ type: 'increment', amount: 5 }); // idenfier used in store
    // amount hard coded but this could be based on user input
  }

  function decrement() {
    dispatch({ type: 'decrement' }); // idenfier used in store
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          AddWohoo
        </button>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Minus</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
