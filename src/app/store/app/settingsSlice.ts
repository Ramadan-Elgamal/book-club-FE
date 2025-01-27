/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defaultSettings,
  getParsedQuerySettings,
} from "base/core/settings/defaultSettings";
import _ from "base/core/lodash/lodash";
import config from "~/app/layouts/admin/LayoutConfig";
import settingsConfig from "~/app/configs/settingsConfig";
import { createSlice } from "@reduxjs/toolkit";

function getInitialSettings() {
  const layout = {
    config: config.defaults,
  };
  return _.merge(
    {},
    defaultSettings,
    { layout },
    settingsConfig,
    getParsedQuerySettings()
  );
}

export function generateSettings(_defaultSettings: any, _newSettings: any) {
  const response = _.merge(
    {},
    _defaultSettings,
    {
      layout: {
        config: config.defaults,
      },
    },
    _newSettings
  );
  return response;
}

const initialSettings = getInitialSettings();

const initialState = {
  initial: initialSettings,
  defaults: _.merge({}, initialSettings),
  current: _.merge({}, initialSettings),
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action) => {
      const current = generateSettings(state.defaults, action.payload);
      return {
        ...state,
        current,
      };
    },
    setInitialSettings: () => {
      return _.merge({}, initialState);
    },
    resetSettings: (state) => {
      return {
        ...state,
        defaults: _.merge({}, state.defaults),
        current: _.merge({}, state.defaults),
      };
    },
  },
});

export const selectCurrentSettings = ({ app }: any) => app.settings.current;
export const selectCurrentLayoutConfig = ({ app }: any) =>
  app.settings.current.layout.config;
export const selectDefaultSettings = ({ app }: any) => app.settings.defaults;
export const selectThemesSettings = ({ app }: any) => app.settings.themes;
export const { resetSettings, setInitialSettings, setSettings } =
  settingsSlice.actions;

export default settingsSlice.reducer;
