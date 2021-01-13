import {getPaymentParamsAPI} from "./API/server/getPaymentParamsAPI";
import {requestWrapper} from "./functions/requestWrapper";
import {buyContestBridge} from "./API/bridge/buyContestBridge";

export async function buyContestModule(idGroup) {
  const {catchError: {isError}, data: {error, params}} = await requestWrapper(getPaymentParamsAPI, {idGroup, idPayment: 'A-001'})
  if (!error && !isError) {
    const response = await requestWrapper(buyContestBridge, params)
  }
}
