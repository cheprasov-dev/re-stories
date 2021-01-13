import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setAnalyticsContestAPI } from '../../../modules/API/server/setAnalyticsContestAPI'
import { VIEW_PARTICIPANT } from '../../../redux/constants/routingConstants'
import { getConditionsStatusesAPI } from '../../../modules/API/server/getConditionsStatusesAPI'
import {
  resetConditionsStatuses,
  setConditionsStatuses,
  setDataActiveContest, setIdActiveContest
} from '../../../redux/actionCreators/dataContestsActionCreators'
import { setErrorGetDataContest } from '../../../redux/actionCreators/errorsActionCreators'
import { getDataContestAPI } from '../../../modules/API/server/getDataContestAPI'
import { checkAdminContestAPI } from '../../../modules/API/server/checkAdminContestAPI'
import { setValueIsAdminContest } from '../../../redux/actionCreators/dataUserActionCreators'
import _isNull from 'lodash/isNull'
import { useLocation, useParams } from '@happysanta/router'

export default function usePageContest () {
  const { id: idActiveContest } = useParams()
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const dispatch = useDispatch()
  const data = useParams()

  useEffect(() => {
    dispatch(setIdActiveContest(idActiveContest))
  }, [])

  useEffect(() => {

    (async function () {
      const source = sourceIdentification({ data })
      const device = getUserDevice()

      setAnalyticsContestAPI({
        idUser,
        source,
        device,
        idContest: idActiveContest
      })

      try {
        const { data: { error, contest } } = await getDataContestAPI({ idContest: idActiveContest, idUser })
        if (!error) dispatch(setDataActiveContest(contest))
        else dispatch(setErrorGetDataContest(error))

        if (!error) {
          const { data: { error, conditionStatus } } = await getConditionsStatusesAPI(idUser, idActiveContest)
          if (!error) dispatch(setConditionsStatuses(conditionStatus))
          else dispatch(setErrorGetDataContest(error))
        }

      } catch (error) {
        dispatch(setErrorGetDataContest(error))
      }
    })()

    return () => {
      dispatch(resetConditionsStatuses())
      dispatch(setErrorGetDataContest(false))
    }
  }, [])
}

function sourceIdentification ({ data }) {
  let source
  if (data.r) source = data.r
  else source = 'other'
  return source
}

function getUserDevice() {
  const search = new URLSearchParams(window.location.search)
  return search.get('vk_platform')
}
