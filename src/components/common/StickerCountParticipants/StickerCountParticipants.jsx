import React from 'react'
import css from './StickerCountParticipants.module.css'
import participants from '../../../assets/img/participants.svg'

export default function StickerCountParticipants (props) {
  const { countParticipants } = props
  const style = {}

  return (
    <div className={css.container} style={style}>
      <img src={participants} alt='svg' />
      {countParticipants}
    </div>
  )
}
