// reducers.ts
import { combineReducers } from "redux";
import pageReducer from "@redux/slices/pageSlice";
import navReducer from "@redux/slices/navSlice";
import languageReducer from "@redux/slices/languageSlice";
import colorModeReducer from "@redux/slices/colorModeSlice";

const rootReducer = combineReducers({
  pages: pageReducer,
  nav: navReducer,
  lang: languageReducer,
  colorMode: colorModeReducer,
});

export default rootReducer;
