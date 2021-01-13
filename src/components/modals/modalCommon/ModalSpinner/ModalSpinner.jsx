import React from 'react'
import {Spinner, Div} from '@vkontakte/vkui'

/*
    Компонент отображающий крутящийся спинер
    Возвращает:
        jsx
*/

export default function ModalSpinner() {
  return (
    <Div style={{'--activity_indicator_tint': '#14CEDF', height: '100vh'}}>
      <Spinner size='small' style={{alignItems: 'unset'}}/>
    </Div>
  )
}
