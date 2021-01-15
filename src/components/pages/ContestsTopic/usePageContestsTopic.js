import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {switchIsLoadFlag} from "../../../redux/actionCreators/flagsActionCreators";
import {getContestsAPI} from "../../../modules/API/server/getContestsAPI";
import {
  resetAbridgedDataContests,
  setAbridgedDataContests
} from "../../../redux/actionCreators/dataContestsActionCreators";
import { setMainError } from '../../../redux/reducers/errorsReducer'

export default function usePageContestsTopic () {
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const idActiveTopic = useSelector(state => state.dataContests.idActiveTopic)
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      try {
        dispatch(switchIsLoadFlag('isLoadContestsActiveTopic', true))
        const { data: { contests, error } } = await getContestsAPI(idActiveTopic, idUser, 'topic')
        if (error) dispatch(setMainError(error))
        else dispatch(setAbridgedDataContests(contests))
      } catch (error) {
        dispatch(setMainError(error))
      }
      dispatch(switchIsLoadFlag('isLoadContestsActiveTopic', false))
    }())
    return () => {
      dispatch(setMainError(null))
      dispatch(resetAbridgedDataContests())
    }
  }, [idActiveTopic])
}
