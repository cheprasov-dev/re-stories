import React from 'react'
import css from './Checkbox.module.scss'

export default function Checkbox ({flag}) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {flag ? <div className={css.checkOn}><div className={css.mark} /></div> : <div className={css.checkOff} />}
      </div>
    </div>
  )
}
