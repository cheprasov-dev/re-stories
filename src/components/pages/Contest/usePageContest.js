import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setAnalyticsContestAPI } from '../../../modules/API/server/setAnalyticsContestAPI'
import { getConditionsStatusesAPI } from '../../../modules/API/server/getConditionsStatusesAPI'
import {
  resetConditionsStatuses,
  setConditionsStatuses,
  setDataActiveContest, setIdActiveContest
} from '../../../redux/actionCreators/dataContestsActionCreators'
import { getDataContestAPI } from '../../../modules/API/server/getDataContestAPI'
import { useParams } from '@happysanta/router'
import { getAdsBridge } from '../../../modules/API/bridge/getAdsBridge'
import { setBlocksAd } from '../../../redux/reducers/adsReducer'
import { setMainError } from '../../../redux/reducers/errorsReducer'
import { getDataGroupBridge } from '../../../modules/API/bridge/getDataGroupBridge'

export default function usePageContest () {
  const { id: idActiveContest } = useParams()
  let source = useSelector(state => state.dataUser.source)
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const dispatch = useDispatch()
  const data = useParams()

  useEffect(() => {
    dispatch(setIdActiveContest(idActiveContest))
  }, [])

  useEffect(() => {
    (async function () {
      const device = getUserDevice()
      setAnalyticsContestAPI({
        idUser,
        source: source || sourceIdentification({ data }),
        device,
        idContest: idActiveContest
      })

      try {
        const { data: { error, contest } } = await getDataContestAPI({ idContest: idActiveContest, idUser })
        const { data: { error: errorCond, conditionStatus } } = await getConditionsStatusesAPI(idUser, idActiveContest)
        if (!error && !errorCond) {
          const dataGroup = await getDataGroupBridge(contest.idGroup)
          dispatch(setDataActiveContest({ ...contest, dataGroup: { ...dataGroup } }))
          dispatch(setConditionsStatuses(conditionStatus))
          const blocksAd = await getAdsBridge()
          dispatch(setBlocksAd(blocksAd))
        } else dispatch(setMainError(error))
      } catch (error) {
        console.log(error)
        dispatch(setMainError(true))
      }
    })()

    return () => {
      dispatch(resetConditionsStatuses())
    }
  }, [])
}

function sourceIdentification ({ data }) {
  let source
  if (data.r) source = data.r
  else source = 'other'
  return source
}

function getUserDevice () {
  const search = new URLSearchParams(window.location.search)
  return search.get('vk_platform')
}
