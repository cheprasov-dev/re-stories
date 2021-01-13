import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
  resetDataParticipants,
  setCountParticipants,
  setDataParticipants,
  setPageParticipants
} from "../../../redux/actionCreators/dataContestsActionCreators";
import {
  resetErrorGetDataParticipants,
  setErrorGetDataParticipants
} from "../../../redux/actionCreators/errorsActionCreators";
import {getParticipantsAPI} from "../../../modules/API/server/getParticipantsAPI";
import {requestWrapper} from "../../../modules/functions/requestWrapper";
import _isNull from 'lodash/isNull'

export function useGetParticipants() {
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const idActiveContest = useSelector(state => state.dataContests.idActiveContest)
  const dataParticipants = useSelector(state => state.dataContests.dataParticipants)
  const pageParticipants = useSelector(state => state.dataContests.pageParticipants)
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      const {
        data: {participants, countParticipants, error},
        catchError: {isError}
      } = await requestWrapper(getParticipantsAPI, {idUser, idContest: idActiveContest, page: pageParticipants})
      // console.log(participants)
      if (isError) {
        dispatch(setErrorGetDataParticipants(error))
      } else {
        if (error) dispatch(setErrorGetDataParticipants(error))
        else {
          dispatch(setDataParticipants(participants))
          dispatch(setCountParticipants(countParticipants))
        }
      }
    }())
  }, [pageParticipants])

  useEffect(() => {
    return () => {
      dispatch(resetErrorGetDataParticipants())
      dispatch(resetDataParticipants(false))
      dispatch(setPageParticipants(1))
    }
  }, [])
}
