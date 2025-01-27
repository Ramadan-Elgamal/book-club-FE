/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import _ from "base/core/lodash";
import navigationConfig from "~/app/configs/navigationConfig";
import CoreUtils from "base/utils";
import i18next from "i18next";

const navigationAdapter = createEntityAdapter();
const emptyInitialState = navigationAdapter.getInitialState();
const initialState = navigationAdapter.upsertMany(
  emptyInitialState,
  navigationConfig
);

export const {
  selectAll: selectNavigationAll,
  selectIds: selectNavigationIds,
  selectById: selectNavigationItemById,
} = navigationAdapter.getSelectors(({ app }: any) => app.navigation);

const navigationSlice = createSlice({
  name: "navigation",
  initialState: { role: null, ...initialState },
  reducers: {
    setRoles: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRoles } = navigationSlice.actions;

const getUserRole = (state: any) => state.app.navigation.role;

export const selectNavigation = createSelector(
  [selectNavigationAll, ({ i18n }) => i18n?.language, getUserRole],
  (navigation, _language, userRole) => {
    function setTranslationValues(data: any) {
      return data.map((item: any) => {
        if (item.translate && item.title) {
          item.title = i18next.t(`navigation:${item.translate}`);
        }
        if (item.children) {
          item.children = setTranslationValues(item.children);
        }
        return item;
      });
    }

    return setTranslationValues(
      _.merge(
        [],
        filterRecursively(navigation, (item: any) =>
          CoreUtils.hasPermission(item.auth, userRole)
        )
      )
    );
  }
);

function filterRecursively(arr: any[], predicate: any) {
  return arr.filter(predicate).map((item: any) => {
    item = { ...item };
    if (item.children) {
      item.children = filterRecursively(item.children, predicate);
    }
    return item;
  });
}

export const selectFlatNavigation = createSelector(
  [selectNavigation],
  (navigation) => CoreUtils.getFlatNavigation(navigation)
);

export default navigationSlice.reducer;
