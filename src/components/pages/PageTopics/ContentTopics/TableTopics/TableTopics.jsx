import React from 'react'
import css from './TableTopics.module.scss'
import { CardGrid, Header } from '@vkontakte/vkui'
import { CardTable } from './CardTable/CardTable'

export default function TableTopics (props) {
  const { topics, onClockCardTopic } = props
  return (
    <React.Fragment>
      <Header>Выбор по тематикам</Header>
      <CardGrid className={css.container}>
        {
          topics.map(function (topic, index) {
            return <CardTable
              key={index}
              topic={topic}
              onClick={() => {onClockCardTopic(topic.id, topic.name)}}
            />
          })
        }
      </CardGrid>
    </React.Fragment>
  )
}
