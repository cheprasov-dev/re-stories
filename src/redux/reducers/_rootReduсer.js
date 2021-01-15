import { combineReducers } from 'redux'
import { errorsReducer } from './errorsReducer'
import { dataUserReducer } from './dataUserReducer'
import { otherDataReducer } from './otherDataReducer'
import { dataContestsReducer } from './dataContestsReducer'
import { flagsReducer } from './flagsReducer'
import { adsReducer } from './adsReducer'

export const rootReducer = combineReducers({
    errors: errorsReducer,
    dataUser: dataUserReducer,
    dataContests: dataContestsReducer,
    otherData: otherDataReducer,
    flags: flagsReducer,
    ads: adsReducer
})
