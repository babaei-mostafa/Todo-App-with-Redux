import { FILTER_ACTIONS } from "./filterTypes";

const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case FILTER_ACTIONS.SHOW_ALL:
      return "all";
    case FILTER_ACTIONS.SHOW_COMPLETE:
      return "complete";
    case FILTER_ACTIONS.SHOW_INCOMPLETE:
      return "incomplete";
    default:
      return "all";
  }
};

export default filterReducer;
