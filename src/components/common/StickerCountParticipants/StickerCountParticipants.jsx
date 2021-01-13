import React from 'react'
import css from './StickerCountParticipants.module.css'
import participants from '../../../assets/img/participants.svg'
import {VIEW_ORGANIZER} from "../../../redux/constants/routingConstants";
import {useSelector} from "react-redux";

export default function StickerCountParticipants(props) {
  const {countParticipants, moderationStatus} = props;
  const statusUser = useSelector(state => state.routing.statusUser)
  const style = {}
  const isOrganizer = statusUser === VIEW_ORGANIZER
  if (isOrganizer) {
    if (moderationStatus === 0) {
      style.boxShadow = '0px 0px 12px 2px yellow'
    } else if (moderationStatus === 1) {
      style.boxShadow = '0px 0px 12px 2px green'
    } else if (moderationStatus === -1) {
      style.boxShadow = '0px 0px 12px 2px red'
    }
  }

  return (
    <div className={css.container} style={style}>
      <img src={participants} alt='svg'/>
      {countParticipants}
    </div>
  )
}
