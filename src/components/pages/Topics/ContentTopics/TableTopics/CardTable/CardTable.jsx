import React from 'react'
import {Card} from '@vkontakte/vkui'
import css from './CardTable.module.scss'

export function CardTable(props) {
  const {topic, onClick} = props
  let backgroundURL = `url('${topic.banner}')`
  return (
    <Card id={topic.id} size={topic.size} onClick={onClick}>
      <div className={css.card_elem} style={{backgroundImage: `${backgroundURL}`}}>
        <div className={css.container}>
          <div className={css.text}>{topic.name}</div>
        </div>
      </div>
    </Card>
  )
}
