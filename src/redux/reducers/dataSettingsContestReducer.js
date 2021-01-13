import {dataSettingsContestInitState} from "../initState";
import {
  SAVE_SETTINGS_CONTEST, RESET_SETTINGS_CONTEST,
  RESET_SETTINGS_STORY, SAVE_SETTINGS_STORY,
  SAVE_SETTINGS_PUBLIC_WALL, RESET_SETTINGS_PUBLIC_WALL,
  SET_FLAG_DISPLAY_BUTTON_START_CONTEST, SET_COUNTRY, SET_CITY
} from "../actions/dataSettingsContestAction";

export function dataSettingsContestReducer(state = dataSettingsContestInitState, action) {
  switch (action.type) {
    case SAVE_SETTINGS_CONTEST:
      return {
        ...state,
        settingsContest: action.payload.settingsContest,
      }
    case SAVE_SETTINGS_STORY:
      return {
        ...state,
        settingsStory: action.payload.settingsStory,
      }
    case SAVE_SETTINGS_PUBLIC_WALL:
      return {
        ...state,
        settingsPublicWall: action.payload.settingsPublicWall,
      }
    case RESET_SETTINGS_CONTEST:
      return dataSettingsContestInitState
    case RESET_SETTINGS_STORY:
      return {
        ...state,
        settingsStory: false,
      }
    case RESET_SETTINGS_PUBLIC_WALL:
      return {
        ...state,
        settingsPublicWall: false,
      }
    case SET_FLAG_DISPLAY_BUTTON_START_CONTEST:
      return {
        ...state,
        flagDisplayButton: action.payload.flag,
      }
    case SET_COUNTRY:
      return {
        ...state,
        region: {...state.region, country: action.payload.country}
      }
    case SET_CITY:
      return {
        ...state,
        region: {...state.region, city: action.payload.city}
      }
    default:
      return state
  }
}
