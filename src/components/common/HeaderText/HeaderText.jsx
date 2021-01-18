import React from 'react'
import { PanelHeaderContent } from '@vkontakte/vkui'

export default function HeaderText (props) {
  const { text, mainText } = props
  return (
    <PanelHeaderContent
      status={text}
    >
      {mainText}
    </PanelHeaderContent>
  )
}


