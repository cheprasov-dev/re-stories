import React from 'react'
import Background from '../Background/Background';
import PlaceholderCustom from './PlaceholderCustom/PlaceholderCustom';

/* (тупой компонент)
    Описание:
        Компонент отображает стандартный экран при отсутствие других данных (используется при отстутсвие групп, конкурсов, участников)
        состоит из фона и плейсхолдера
    Принимает:
        text - текст,
        textButton - текст кнопки,
        onClick - исполняющая функция при нажатии на кнопку,
    Возвращает:
        jsx
*/

export default function PlaceholderPage(props) {
  const {
    text,
    textButton,
    onClick,
    disabled
  } = props;
  return (
    <div style={{overflow: 'hidden'}}>
      <Background imgBG={true}/>
      <PlaceholderCustom
        text={text}
        textButton={textButton}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  )
}
