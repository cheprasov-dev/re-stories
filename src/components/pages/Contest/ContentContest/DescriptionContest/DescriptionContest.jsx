import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import css from './DescriptionContest.module.scss'
import {Div} from '@vkontakte/vkui'
import { Markdown } from '../../../../common/exportCommon'


function readMoreOrHideText(flag) {
  if (flag) {
    document.getElementById(css.collapsed).setAttribute('id', css.deployed)
    document.getElementById(css.button_read_more).style.display = 'none';
    document.getElementById(css.button_hide_text).style.display = 'block'
  } else {
    document.getElementById(css.deployed).setAttribute('id', css.collapsed)
    document.getElementById(css.button_read_more).style.display = 'block';
    document.getElementById(css.button_hide_text).style.display = 'none';
  }
}

export default function DescriptionContest({titleContest, descriptionContest}) {
  const [displayButton, setDisplayButton] = useState(false)
  useEffect(() => {
    const heightMarkdown = document.getElementById('markdown').clientHeight
    if (heightMarkdown > 115) {
      setDisplayButton(true)
    }
  }, [])
  return (
    <React.Fragment>
      <div className={css.text_title_contest}>
        {titleContest}
      </div>
      <div id={css.collapsed} className={css.text}>
        <div id='markdown' style={{whiteSpace: 'pre-wrap'}}>
          {descriptionContest}
        </div>
      </div>
      {displayButton && (
        <>
          <Div
            id={css.button_read_more}
            className={css.textButton}
            onClick={() => readMoreOrHideText(true)}
          >
            Читать дальше
          </Div>
          <Div
            id={css.button_hide_text}
            className={css.textButton}
            onClick={() => readMoreOrHideText(false)}
          >
            Скрыть
          </Div>
        </>)}
    </React.Fragment>
  )
}

DescriptionContest.propTypes = {
  titleContest: PropTypes.string,
  descriptionContest: PropTypes.string
}
