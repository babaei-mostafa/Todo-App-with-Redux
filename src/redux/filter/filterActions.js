import { FILTER_ACTIONS } from "./filterTypes";

export const showAll = () => {
  return {
    type: FILTER_ACTIONS.SHOW_ALL,
  };
};

export const showComplete = () => {
  return {
    type: FILTER_ACTIONS.SHOW_COMPLETE,
  };
};

export const showIncomplete = () => {
  return {
    type: FILTER_ACTIONS.SHOW_INCOMPLETE,
  };
};
