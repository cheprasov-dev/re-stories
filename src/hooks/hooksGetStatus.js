import {useSelector} from "react-redux";
import {VIEW_MODERATORS, VIEW_ORGANIZER} from "../redux/constants/routingConstants";

export function useCheckIsModerator() {
  const isModerator = useSelector(state => state.dataUser.isModerator)
  const statusUser = useSelector(state => state.routing.statusUser)
  return statusUser === VIEW_MODERATORS && isModerator
}

export function useCheckIsOrganizer() {
  const isAdminContest = useSelector(state => state.dataUser.isAdminContest)
  const statusUser = useSelector(state => state.routing.statusUser)
  return statusUser === VIEW_ORGANIZER && isAdminContest
}
