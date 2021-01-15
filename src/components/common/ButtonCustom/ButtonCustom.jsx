import React from 'react'
import PropTypes from 'prop-types'
import styles from './ButtonCustom.module.css'
import { Button } from '@vkontakte/vkui'

/*
    Описание:
        Компонент возвращает jsx разметку содержащая кнопку.
        В зависимости от пропсов изменяется цвет, текст и исполнительная функция при клике на кнопку
        (тупой компонент)
    Принимает:
        background - цвет фона кнопки '#fff / #ffffff',
        text - текст на кнопке,
        onClick - исполняющаяся функция при клике на кнопку (callback)
    Возвращает:
        jsx
*/

export default function ButtonCustom (props) {
  const { background, text, onClick, disabled=false } = props
  return (
    <div
      className={styles.button_container}
      style={{ '--button_primary_background': `${background}` }}
    >
      <Button disabled={disabled} size="xl" onClick={onClick}>{text}</Button>
    </div>
  )
}

ButtonCustom.propTypes = {
  background: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

ButtonCustom.defaultProps = {
  disabled: false,
  onClick: () => {console.log('В пропсы забыли положить функцию')}
}

