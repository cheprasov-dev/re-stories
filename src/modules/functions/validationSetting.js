import {isNumber, isOldDate, minLength10, minLength150, minLength5, required} from "./validate";

export function validationSettingsContest({settingsContest, settingsStory, settingsPublicWall}) {
  const {
    conditionsPostStory, nameContest, titleContest, idTopic,
    descriptionContest, namesPrizes, directoryIcon, contestBanner,
    conditionsPostWall, dateEndContest
  } = settingsContest

  const {backgroundStory, buttonStory} = settingsStory
  const {backgroundWall} = settingsPublicWall

  if (required(nameContest)) return {error: true, parameterError: 'nameContestRequired'}
  else if (minLength10(nameContest)) return {error: true, parameterError: 'nameContestMinLength'}
  else if (isNumber(idTopic)) return {error: true, parameterError: 'idTopicRequired'}
  else if (isOldDate(dateEndContest)) return {error: true, parameterError: 'dateEndContestIsOldDate'}
  else if (required(titleContest)) return {error: true, parameterError: 'titleContestRequired'}
  else if (minLength10(titleContest)) return {error: true, parameterError: 'titleContestMinLength'}
  else if (required(descriptionContest)) return {error: true, parameterError: 'descriptionContestRequired'}
  else if (minLength150(descriptionContest)) return {error: true, parameterError: 'descriptionContestMinLength'}
  else if (required(namesPrizes.length)) return {error: true, parameterError: 'namesPrizesRequired'}
  const checkNamePrizeRequired = namesPrizes.some(elem => required(elem) === false)
  if (!checkNamePrizeRequired) return {error: true, parameterError: 'namePrizeRequired'}
  const checkNamePrizeMinLength = namesPrizes.some(elem => minLength5(elem) === false)
  if (!checkNamePrizeMinLength) return {error: true, parameterError: 'namePrizeMinLength'}
  else if (required(directoryIcon)) return {error: true, parameterError: 'directoryIconRequired'}
  else if (required(contestBanner)) return {error: true, parameterError: 'contestBannerRequired'}
  else if (conditionsPostStory && !settingsStory) return {error: true, parameterError: 'settingsStoryRequired'}
  else if (!backgroundStory && conditionsPostStory) return {error: true, parameterError: 'backgroundStoryRequired'}
  else if (!buttonStory && conditionsPostStory) return {error: true, parameterError: 'buttonStoryRequired'}
  else if (conditionsPostWall && !settingsPublicWall) return {error: true, parameterError: 'settingsPublicWallRequired'}
  else if (!backgroundWall && conditionsPostWall) return {error: true, parameterError: 'settingsPublicWallRequired'}
  else return {error: false}
}

export function validationSettingsStory({settingsStory}) {
  const { backgroundStory, buttonStory } = settingsStory

  if (required(backgroundStory)) return {error: true, parameterError: 'backgroundStoryRequired'}
  else if (required(buttonStory)) return {error: true, parameterError: 'buttonStoryRequired'}
  else return {error: false}
}

export function validationSettingsPublicWall({settingsPublicWall}) {
  const { backgroundWall } = settingsPublicWall
  if (required(backgroundWall)) return {error: true, parameterError: 'backgroundWallRequired'}
  else return {error: false}
}
