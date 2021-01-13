import { dataGroupsInitState } from "../initState";
import {
    UPDATE_DATA_CONNECTED_GROUPS,
    SET_ACTIVE_GROUP,
    UPDATE_DATA_GROUPS_TO_CONNECT,
    ADD_GROUP_TO_CONNECTED,
    DELETE_GROUP_TO_CONNECT,
    SET_VALUE_PAID_CONTESTS
} from "../actions/dataGroupsAction";


export function dataGroupsReducer (state=dataGroupsInitState, action) {
    switch (action.type) {
        case UPDATE_DATA_CONNECTED_GROUPS:
            let dataConnectedGroups = action.payload.dataConnectedGroups;
            let idsGroupsUserAdmin = action.payload.idsGroupsUserAdmin;
            let idsGroupsConnected = action.payload.idsGroupsConnected;
            let idsGroupsToConnect = action.payload.idsGroupsToConnect;
            return {
                ...state,
                dataConnectedGroups,
                idsGroupsUserAdmin,
                idsGroupsConnected,
                idsGroupsToConnect,
            }
        case UPDATE_DATA_GROUPS_TO_CONNECT: {
            return {
                ...state,
                dataGroupsToConnect: action.payload.dataGroupsToConnect,
            }
        }
        case SET_ACTIVE_GROUP:
            return {
                ...state,
                idActiveGroup: action.payload.idActiveGroup,
            }
        case ADD_GROUP_TO_CONNECTED:
            return {
                ...state,
                dataConnectedGroups: action.payload.dataWithNewGroups
            }
        case DELETE_GROUP_TO_CONNECT:
            return {
                ...state,
            }
        case SET_VALUE_PAID_CONTESTS:
            return {
                ...state,
                valuePaidContests: action.payload.value
            }
        default:
            return state
    }
}
