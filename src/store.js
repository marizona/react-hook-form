import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { chooseIngredients, chooseToppings } from "./components/reducers/ingredientsReducer";


const reducer = combineReducers({
  ingredients: chooseIngredients,
  toppings:chooseToppings
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

console.log(store);
export default store;
