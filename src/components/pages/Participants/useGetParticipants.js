import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetDataParticipants,
  setCountParticipants,
  setDataParticipants,
  setPageParticipants
} from '../../../redux/actionCreators/dataContestsActionCreators'
import { getParticipantsAPI } from '../../../modules/API/server/getParticipantsAPI'
import { requestWrapper } from '../../../modules/functions/requestWrapper'
import { setMainError } from '../../../redux/reducers/errorsReducer'

export function useGetParticipants () {
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const idActiveContest = useSelector(state => state.dataContests.idActiveContest)
  const pageParticipants = useSelector(state => state.dataContests.pageParticipants)
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      const {
        data: { participants, countParticipants, error },
        catchError: { isError }
      } = await requestWrapper(getParticipantsAPI, { idUser, idContest: idActiveContest, page: pageParticipants })
      if (isError || error) {
        dispatch(setMainError(error))
      } else {
        dispatch(setDataParticipants(participants))
        dispatch(setCountParticipants(countParticipants))
      }
    }())
  }, [pageParticipants])

  useEffect(() => {
    return () => {
      dispatch(setMainError(null))
      dispatch(resetDataParticipants(false))
      dispatch(setPageParticipants(1))
    }
  }, [])
}
