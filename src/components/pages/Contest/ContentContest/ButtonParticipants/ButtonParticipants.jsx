import React from 'react'
import PropTypes from 'prop-types'
import css from './ButtonParticipants.module.scss'
import { Button, UsersStack } from '@vkontakte/vkui'

export default function ButtonParticipants ({ urlImagAvatar, onClick, background }) {
  let visibleCount
  if (document.documentElement.clientWidth <= 320) {
    visibleCount = 4
  } else visibleCount = 5
  return (
    <React.Fragment>
      <div
        className={css.button_container}
        style={{"--button_primary_background": `${background}`}}
      >
        <Button
          before={<div className={css.text}>Участники:</div>}
          after={<UsersStack
            photos={urlImagAvatar}
            size="m"
            visibleCount={visibleCount}
            layout="vertical"
          />}
          size="xl"
          onClick={onClick}
        />
      </div>
    </React.Fragment>
  )
}

ButtonParticipants.propTypes = {
  urlImagAvatar: PropTypes.array,
  background: PropTypes.string,
  onClick: PropTypes.func
}
