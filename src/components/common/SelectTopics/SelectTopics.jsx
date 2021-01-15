import React from 'react'
import { Select, FormLayoutGroup } from '@vkontakte/vkui'
import styles from './SelectTopics.module.css'
import PropTypes from 'prop-types'

export default function SelectTopics (props) {
  const { value, onChange, arrTopics, top } = props
  return (
    <FormLayoutGroup top={top} className={styles.container}>
      <Select value={value} onChange={onChange}>
        {arrTopics.map(function (item, index) { return <option key={index} value={item.id}>{item.name}</option> })}
      </Select>
    </FormLayoutGroup>
  )
}

SelectTopics.propsTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  arrTopics: PropTypes.array,
  top: PropTypes.string
}
