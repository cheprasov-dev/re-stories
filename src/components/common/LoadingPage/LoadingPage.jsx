import React from 'react'
import Loading from './Loading/Loading'

import {PanelHeader} from '@vkontakte/vkui'
import {Background} from '../exportCommon'

/* (тупой компонент)
    Описание:
        Компонент Загрузки возвращает jsx разметку состоящая из шапки, фона и элемента загрузки (спинера)
    Принимает:
        imgBG - флаг, отвечает за отображение фона (true / false)
    Возвращает:
        jxs
*/

export default function LoadingPage({imgBG}) {
  return (
    <React.Fragment>
      <PanelHeader separator={false}/>
      <Background imgBG={imgBG}/>
      <Loading/>
    </React.Fragment>
  )
}

