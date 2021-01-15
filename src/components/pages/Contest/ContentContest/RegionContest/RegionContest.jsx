import React from 'react'
import PropTypes from 'prop-types'
import css from './RegionContest.module.scss'
import { Div } from '@vkontakte/vkui'

export default function RegionContest ({ country, city }) {
  return (
    <Div className={css.region}>Конкурс действует:&nbsp;
      {!country
        ? <b>Весь мир</b>
        : !city
          ? <b>{country}</b>
          : <b>{country}, {city}</b>}
    </Div>
  )
}

RegionContest.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string
}
