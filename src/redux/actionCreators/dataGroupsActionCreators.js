import {SET_VALUE_PAID_CONTESTS} from "../actions/dataGroupsAction";

const {
    UPDATE_DATA_CONNECTED_GROUPS, SET_ACTIVE_GROUP, UPDATE_DATA_GROUPS_TO_CONNECT,
    ADD_GROUP_TO_CONNECTED,
    DELETE_GROUP_TO_CONNECT,
} = require("../actions/dataGroupsAction");

export function updateDataConnectedGroups ( dataConnectedGroups, idsGroupsUserAdmin, idsGroupsConnected, idsGroupsToConnect ) {
    return {
        type: UPDATE_DATA_CONNECTED_GROUPS,
        payload: {
            dataConnectedGroups,
            idsGroupsUserAdmin,
            idsGroupsConnected,
            idsGroupsToConnect,
        }
    }
}

export function updateDataGroupsToConnect (dataGroupsToConnect) {
    return {
        type: UPDATE_DATA_GROUPS_TO_CONNECT,
        payload: {
            dataGroupsToConnect,
        }
    }
}

export function setActiveGroup (id) {
    return {
        type: SET_ACTIVE_GROUP,
        payload: {
            idActiveGroup: id
        }
    }
}

export function setValuePaidContests (value) {
    return {
        type: SET_VALUE_PAID_CONTESTS,
        payload: {
            value
        }
    }
}

export function addDataWithConnectedGroup (dataWithNewGroups) {
    return {
        type: ADD_GROUP_TO_CONNECTED,
        payload: {
            dataWithNewGroups
        }
    }
}

export function deleteGroupToConnect (newDataGroupsToConnect) {
    return {
        type: DELETE_GROUP_TO_CONNECT,
        payload: {
            newDataGroupsToConnect,
        }
    }
}
