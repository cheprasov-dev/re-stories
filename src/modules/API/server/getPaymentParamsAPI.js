import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";
import {getSearch} from "../../functions/getSearch";

export async function getPaymentParamsAPI ({idGroup, idPayment}) {
  const dataQuery = new FormData()
  dataQuery.append('search', getSearch())
  dataQuery.append('idPayment', idPayment)
  dataQuery.append('idGroup', idGroup)
  return await axios.post(getQueryURL('getPaymentParams'), dataQuery)
}
