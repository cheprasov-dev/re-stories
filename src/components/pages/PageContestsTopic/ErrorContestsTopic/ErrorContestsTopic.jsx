import React from 'react'
import css from './ErrorContestsTopic.module.scss'
import {PanelHeader} from "@vkontakte/vkui";
import {Background, ButtonСustom} from "../../../common/exportCommon";
import {useDispatch} from "react-redux";
import {mainRoute} from "../../../../redux/actionCreators/rouitingActionCreators";
import {PANEL_SELECTION_STATUS, VIEW_STATUS} from "../../../../redux/constants/routingConstants";

export default function ErrorContestsTopic () {
  let dispatch = useDispatch()

  function onClickBack () {
    dispatch(mainRoute(VIEW_STATUS, PANEL_SELECTION_STATUS))
  }
  return (
    <React.Fragment>
      <PanelHeader separator={false}>Ошибка!</PanelHeader> {/* шапка */}
      <div className={css.container_page}> {/* контейнер для контента */}
        <Background imgBG={true}/> {/* фон */}
        <ButtonСustom /* кнопка */
          background={'#14CEDF'}
          text="Вернуться назад"
          onClick={onClickBack}
        />
      </div>
    </React.Fragment>
  )
}
