import { otherDataInitState } from "../initState";
import { SET_TEXT_HEADER, UPGRADE_TEXT_SEARCH_FOR_MODAL } from "../actions/otherDataAction";

export function otherDataReducer (state=otherDataInitState, action) {
    switch (action.type) {
        case SET_TEXT_HEADER:
            return {
                ...state,
                textHeader: action.payload.textHeader,
            }
        case UPGRADE_TEXT_SEARCH_FOR_MODAL:
            return {
                ...state,
                textSearchForModal: action.payload.value
            }
        default:
            return state
    }
}
