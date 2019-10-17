import buildings from "./building";
import currentBuilding from "./currentBuilding";
import resources from "./resources";

import { combineReducers } from "redux";

export default combineReducers({
    buildings,
    currentBuilding,
    resources,
  });
