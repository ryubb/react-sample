import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// ActionCreator
export interface State {
  price: number;
  test: string;
}
interface Test {
  type: string;
  test: string;
}
interface ActionType extends Test {
  type: string;
  price: number;
}
const ADDTAX = "ADDTAX";
const TEST = "TEST";

//state初期化
const initialState: State = {
  price: 0,
  test: "",
};
// Reducer
function appReducer(state: State = initialState, action: ActionType) {
  switch (action.type) {
    case ADDTAX:
      return { ...state, price: action.price };
    case TEST:
      return { ...state, test: action.test };
    default:
      return state;
  }
}

// const combinedReducer = combineReducers<State>({
//   appReducer,
//   // reducer が増えたら足していく
// });

//store作成
const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
