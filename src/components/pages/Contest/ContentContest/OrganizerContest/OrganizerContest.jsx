import React from 'react'
import PropTypes from 'prop-types'
import css from './OrganizerContest.module.scss'
import { Header } from '@vkontakte/vkui'
import { GroupCell } from '../../../../common/exportCommon'

export default function OrganizerContest ({members_count, screen_name, photo_100, name}) {
  return (
    <div className={css.organizer}>
      <Header mode="secondary">Организато и ответственный</Header>
      <a
        href={`https://vk.com/${screen_name}`}
        target='_blank' rel='noopener noreferrer'
      >
        <GroupCell
          members_count={members_count}
          photo_100={photo_100}
          name={name}
        />
      </a>
    </div>
  )
}

OrganizerContest.propTypes = {
  members_count: PropTypes.number,
  screen_name: PropTypes.string,
  photo_100: PropTypes.string,
  name: PropTypes.string
}
