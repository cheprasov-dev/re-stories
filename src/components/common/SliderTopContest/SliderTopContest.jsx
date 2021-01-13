import React, { useState } from 'react'
import { Gallery } from '@vkontakte/vkui'
import styles from './SliderTopContest.module.css'
import { CardPopularContests } from './CardPopularContests/CardPopularContests'

export default function SliderTopContest ({ data }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const cards = data.map((card, index) => {
    return <CardPopularContests
      key={index}
      dateEndContest={card.dateEndContest}
      titleContest={card.titleContest}
      contestBanner={card.contestBanner}
      countParticipants={card.countParticipants}
    />
  })
  return (
    <div className={styles.container}>
      <Gallery
        slideWidth="90%"
        align="center"
        style={{ height: 'inherit' }}
        slideIndex={slideIndex}
        onChange={() => setSlideIndex(slideIndex)}
        timeout={3000}
      >
        {cards}
      </Gallery>
    </div>
  )
}
