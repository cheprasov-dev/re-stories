import {
  SAVE_SETTINGS_CONTEST, RESET_SETTINGS_CONTEST,
  SAVE_SETTINGS_STORY, RESET_SETTINGS_STORY,
  SAVE_SETTINGS_PUBLIC_WALL, RESET_SETTINGS_PUBLIC_WALL,
  SET_FLAG_DISPLAY_BUTTON_START_CONTEST, SET_COUNTRY, SET_CITY,
} from '../actions/dataSettingsContestAction'

export const saveSettingsContest = (settingsContest) => ({type: SAVE_SETTINGS_CONTEST, payload: {settingsContest}})

export const saveSettingsStory = (settingsStory) => ({
  type: SAVE_SETTINGS_STORY, payload: {settingsStory}
})

export const saveSettingsPublicWall = (settingsPublicWall) => ({
  type: SAVE_SETTINGS_PUBLIC_WALL, payload: {settingsPublicWall}
})

export const resetSettingsContest = () => ({type: RESET_SETTINGS_CONTEST})

export const resetSettingsStory = () => ({type: RESET_SETTINGS_STORY})

export const resetSettingsPublicWall = () => ({type: RESET_SETTINGS_PUBLIC_WALL})

export const setFlagDisplayButton = (flag) => ({type: SET_FLAG_DISPLAY_BUTTON_START_CONTEST, payload: {flag}})

export const setCountry = (country) => ({type: SET_COUNTRY, payload: {country}})
export const setCity = (city) => ({type: SET_CITY, payload: {city}})
