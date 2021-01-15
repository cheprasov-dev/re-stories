import React from 'react'
import css from './StickerEndContest.module.css'
import timerGold from './../../../assets/img/timerGold.svg'

export default function StickerEndContest (props) {
  const { date } = props
  return (
    <div className={css.container}>
      <img src={timerGold} alt='sticker' />
      {date}
    </div>
  )
}
