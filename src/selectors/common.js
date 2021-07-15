import { createSelector } from "reselect";


export const takeScreenWidthSelector = createSelector(
  state => state.common.screenWidth,
  screenWidth => screenWidth
);
