import React from 'react'
import css from './ErrorParticipants.module.scss'
import {PanelHeader} from "@vkontakte/vkui";
import {Background, ButtonСustom} from "../../../common/exportCommon";
import {useDispatch, useSelector} from "react-redux";
import {mainRoute} from "../../../../redux/actionCreators/rouitingActionCreators";
import {
  PANEL_CONTEST,
  VIEW_CONTEST,
} from "../../../../redux/constants/routingConstants";

export default function ErrorParticipants() {
  let dispatch = useDispatch()

  function onClickBack() {
    dispatch(mainRoute(VIEW_CONTEST, PANEL_CONTEST))
  }

  return (
    <React.Fragment>
      <PanelHeader separator={false}>Ошибка!</PanelHeader> {/* шапка */}
      <div className={css.container_page}> {/* контейнер для контента */}
        <Background imgBG={true}/> {/* фон */}
        <ButtonСustom /* кнопка */
          background='#14CEDF'
          text="Вернуться назад"
          onClick={onClickBack}
        />
      </div>
    </React.Fragment>
  )
}
