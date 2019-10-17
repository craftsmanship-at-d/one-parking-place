import { DISPLAY_BUILDING_DETAILS} from "./action-types";

export const setDisplayBuildingDetails = building => ({
  type: DISPLAY_BUILDING_DETAILS,
  payload: building
});