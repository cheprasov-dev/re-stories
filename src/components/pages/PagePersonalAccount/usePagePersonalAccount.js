import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getContestsAPI} from "../../../modules/API/server/getContestsAPI"
import {resetErrorGetContests, setErrorGetContests} from "../../../redux/actionCreators/errorsActionCreators"
import {
  resetAbridgedDataContests,
  setAbridgedDataContests
} from "../../../redux/actionCreators/dataContestsActionCreators"

export default function usePagePersonalAccount() {
  const abridgedDataContests = useSelector(state => state.dataContests.abridgedDataContests)
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!abridgedDataContests) {
      getContestsAPI(idUser, idUser,'user')
        .then(res => {
          const {contests, error} = res.data
          if (error) {
            dispatch(setErrorGetContests(error))
          } else {
            dispatch(setAbridgedDataContests(contests))
          }
        })
        .catch(error => dispatch(setErrorGetContests(error)))
    }

    return () => {
      dispatch(resetErrorGetContests())
      dispatch(resetAbridgedDataContests())
    }
  }, [])
}
