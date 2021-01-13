import React from 'react'
import css from './TitleContest.module.css'

export default function TitleContest (props) {
  const { titleContest } = props
  return (
    <React.Fragment>
      <div className={css.text_title_contest}>
        {titleContest}
      </div>
    </React.Fragment>
  )
}
