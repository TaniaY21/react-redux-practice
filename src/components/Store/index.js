// redux logic here
import { createStore } from 'redux';

// create reducer function
function counterReducer(state = { count: 0 }, action) {
  if (action.type === 'increment') {
    return { count: state.count + action.amount }; // create own property for payload 
  }
  if (action.type === 'decrement') {
    return { count: state.count - 1 };
  } else {
    return state;
  }
}

// point to function to create store
const store = createStore(counterReducer);

export default store;
// provide this store to the react app
// providing the store: means in index/highest level component tree where root is rendered.
// set this store as store value in Provider in index.js
