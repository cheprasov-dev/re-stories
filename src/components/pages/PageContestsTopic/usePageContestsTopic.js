import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {switchIsLoadFlag} from "../../../redux/actionCreators/flagsActionCreators";
import {getContestsAPI} from "../../../modules/API/server/getContestsAPI";
import {resetErrorGetContests, setErrorGetContests} from "../../../redux/actionCreators/errorsActionCreators";
import {
  resetAbridgedDataContests,
  setAbridgedDataContests
} from "../../../redux/actionCreators/dataContestsActionCreators";

export default function usePageContestsTopic () {
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const idActiveTopic = useSelector(state => state.dataContests.idActiveTopic)
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      try {
        dispatch(switchIsLoadFlag('isLoadContestsActiveTopic', true))
        const { data: { contests, error } } = await getContestsAPI(idActiveTopic, idUser, 'topic')
        if (error) dispatch(setErrorGetContests(error))
        else dispatch(setAbridgedDataContests(contests))
      } catch (error) {
        dispatch(setErrorGetContests(error))
      }
      dispatch(switchIsLoadFlag('isLoadContestsActiveTopic', false))
    }())
    return () => {
      dispatch(resetErrorGetContests())
      dispatch(resetAbridgedDataContests())
    }
  }, [idActiveTopic])
}
