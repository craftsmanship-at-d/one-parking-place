import { DISPLAY_BUILDING_DETAILS} from "../store/action-types";


export default (state = null, action) => {
    switch (action.type) {
      case DISPLAY_BUILDING_DETAILS:
        return action.payload;
      default:
        return state;
    }
  }