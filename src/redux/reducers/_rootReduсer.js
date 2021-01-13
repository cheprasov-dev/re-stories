import { combineReducers } from 'redux';
import { errorsReducer } from './errorsReducer';
import { routingReducer } from './routingReducer';
import { dataUserReducer } from './dataUserReducer';
import { dataGroupsReducer } from './dataGroupsReducer';
import { otherDataReducer } from './otherDataReducer';
import { dataContestsReducer } from './dataContestsReducer';
import { dataSettingsContestReducer } from './dataSettingsContestReducer';
import { alertsReducer } from './alertsReducer'
import { flagsReducer } from './flagsReducer'
import {analyticsReducer} from "./analyticsReducer";

export const rootReducer = combineReducers({
    errors: errorsReducer,
    routing: routingReducer,
    dataUser: dataUserReducer,
    dataGroups: dataGroupsReducer,
    dataContests: dataContestsReducer,
    dataSettingsContest: dataSettingsContestReducer,
    otherData: otherDataReducer,
    alerts: alertsReducer,
    flags: flagsReducer,
    analytics: analyticsReducer,
})
