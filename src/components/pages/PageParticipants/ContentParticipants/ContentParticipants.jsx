import React, {useEffect} from 'react'
import css from './ContentParticipants.module.css'
import {useDispatch, useSelector} from "react-redux";
import {PlaceholderPage, Background, UserCell} from "../../../common/exportCommon";
import {PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import {mainRoute} from "../../../../redux/actionCreators/rouitingActionCreators";
import {PANEL_CONTEST, VIEW_CONTEST} from "../../../../redux/constants/routingConstants";
import ButtonСustom from "../../../common/ButtonСustom/ButtonСustom";
import {setPageParticipants} from "../../../../redux/actionCreators/dataContestsActionCreators";
import { useRouter } from '@happysanta/router'
import { router } from '../../../../routers'

export default function ContentParticipants() {
  const router = useRouter()
  const dataParticipants = useSelector(state => state.dataContests.dataParticipants)
  const countParticipants = useSelector(state => state.dataContests.countParticipants)
  const pageParticipants = useSelector(state => state.dataContests.pageParticipants)
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const dispatch = useDispatch()

  function onClickGetParticipants() {
    dispatch(setPageParticipants(pageParticipants+1))
  }

  return (
    <div className={css.container_page}>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => router.popPage()}/>}
        separator={false}
      >Участники</PanelHeader>
      {dataParticipants && dataParticipants.length === 0 ?
        <PlaceholderPage
          text={<div>Нет ни одного участника</div>}
        />
        :
        <div className={css.wrapper}>
          <Background/>
          {dataParticipants.map(function (participant, index) {
            if (idUser !== participant.id) {
              return
            }
            return <UserCell
              id={participant.id}
              index={index}
              count={countParticipants}
              photo_50={participant.photo_50}
              first_name={'Вы'}
              backgroundColor={"#14CEDF"}
            />
          })}
          {dataParticipants.map(function (participant, index) {
            if (idUser === participant.id) {
              return
            }
            return <UserCell
              id={participant.id}
              index={index}
              count={countParticipants}
              photo_50={participant.photo_50}
              first_name={participant.first_name}
              last_name={participant.last_name}
            />
          })}
          {dataParticipants.length < countParticipants && (
            <ButtonСustom
              background={'#14CEDF'}
              text='Ещё участники'
              onClick={onClickGetParticipants}
            />
          )}
        </div>}
    </div>
  )
}
