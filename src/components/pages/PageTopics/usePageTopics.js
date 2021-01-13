import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
  setIdsTopicsWithContests
} from "../../../redux/actionCreators/dataContestsActionCreators";
import {filterTopics} from "../../../modules/functions/filterTopics";
import {topics} from "../../../redux/constants/otherConstatnts";
import {getTopicsAPI} from "../../../modules/API/server/getTopicsAPI";
import {getCountActiveContestsUserAPI} from "../../../modules/API/server/getCountActiveContestsUserAPI";
import {setCountActiveContestsUser} from "../../../redux/actionCreators/dataUserActionCreators";

export function usePageTopics() {
  const dispatch = useDispatch()
  const idUser = useSelector(state => state.dataUser.mainData.id)

  useEffect(() => {
    (async function () {
      const {data: {error, idsTopics}} = await getTopicsAPI(idUser)
      if (error) {
        console.log('error', error)
        // TODO отработать ошибку
      } else {
        let filteredTopics = filterTopics(idsTopics, topics)
        dispatch(setIdsTopicsWithContests(filteredTopics))
      }
    }())
  }, [idUser])

  useEffect(() => {
    (async function () {
      // let resDataPopularContests = await getDataPopularContestsAPI()
      // dispatch(setDataPopularContests(resDataPopularContests))

      let resCountActiveContestsUser = await getCountActiveContestsUserAPI(idUser)
      dispatch(setCountActiveContestsUser(resCountActiveContestsUser))
    }())
  }, [])

}
