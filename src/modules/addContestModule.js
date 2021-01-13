import {addContestAPI} from "./API/server/addContestAPI";
import {mainRoute} from "../redux/actionCreators/rouitingActionCreators";
import {PANEL_CONTEST, PANEL_CONTESTS_GROUP, VIEW_CONTEST, VIEW_ORGANIZER} from "../redux/constants/routingConstants";
import {loadStoryStandardButtonAPI} from "./API/server/loadStoryStandardButtonAPI";
import {getQueryURL} from "./functions/getQueryURL";
import isBase64 from "is-base64";
import {updateContestAPI} from "./API/server/updateContestAPI";
import {errorHandler} from "./functions/errorHandler";
import {resetSettingsContest} from "../redux/actionCreators/dataSettingsContestActionCreators";
import {setDataActiveContest} from "../redux/actionCreators/dataContestsActionCreators";

export async function addContestModule(dispatch, idUser, idGroup, allSettingsContest, moderationStatus, idActiveContest) {
  const {settingsStory: {standardButton, buttonStory}} = allSettingsContest
  try {
    if (standardButton && isBase64(buttonStory, {mimeRequired: true})) {
      const {data: {imageName}} = await loadStoryStandardButtonAPI(buttonStory, idUser)
      allSettingsContest.settingsStory.buttonStory = getQueryURL(`img/${imageName}`)
    }
    if (moderationStatus === -1) {
      const {data: {error}} = await updateContestAPI(idUser, idGroup, allSettingsContest, idActiveContest)
      if (error) console.log(error) // TODO отработать ошибку. Вывести всплывашку "Во время добавления конкурса произошла ошибка"
      else {
        dispatch(resetSettingsContest())
        dispatch(setDataActiveContest(false))
        dispatch(mainRoute(VIEW_CONTEST, PANEL_CONTEST))
      }
    } else {
      const {data: {error, error_type, message}} = await addContestAPI(idUser, idGroup, allSettingsContest)
      if (error) {
        errorHandler({dispatch, error_type, value: message})
      } // TODO отработать ошибку. Вывести всплывашку "Во время добавления конкурса произошла ошибка"
      else {
        dispatch(mainRoute(VIEW_ORGANIZER, PANEL_CONTESTS_GROUP))
        dispatch(resetSettingsContest())
      }
    }
  } catch (error) {
    console.log(error)
    // TODO отработать ошибку. Вывести всплывашку "Во время добавления конкурса произошла ошибка"
  }
}
