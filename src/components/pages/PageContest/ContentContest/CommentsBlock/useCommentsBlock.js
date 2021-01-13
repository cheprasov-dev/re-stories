import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getModeratorCommentsAPI} from "../../../../../modules/API/server/getModeratorComments";
import {setModeratorComments} from "../../../../../redux/actionCreators/dataContestsActionCreators";

export function useCommentsBlock() {
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const idActiveContest = useSelector(state => state.dataContests.idActiveContest)
  const dispatch = useDispatch()

  useEffect(() => {

    (async function () {
      try {
        const {data: {comments, error, error_type}} = await getModeratorCommentsAPI(idUser, idActiveContest)
        if (error) {
          // TODO отработать ошибку
        }
        else dispatch(setModeratorComments(comments))

      } catch (error) {
        console.log(error) // TODO отработать ошибку
      }
    })()
  }, [])
}
