import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getContestsAPI} from "../../../modules/API/server/getContestsAPI"
import {
  resetAbridgedDataContests,
  setAbridgedDataContests
} from "../../../redux/actionCreators/dataContestsActionCreators"
import { setMainError } from '../../../redux/reducers/errorsReducer'

export default function usePagePersonalAccount() {
  const abridgedDataContests = useSelector(state => state.dataContests.abridgedDataContests)
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!abridgedDataContests) {
      getContestsAPI(idUser, idUser,'user')
        .then(res => {
          const {contests, error} = res.data
          if (error) dispatch(setMainError(error))
          else dispatch(setAbridgedDataContests(contests))
        })
        .catch(error => dispatch(setMainError(error)))
    }

    return () => {
      dispatch(resetAbridgedDataContests())
    }
  }, [])
}
