import React from 'react'
import css from './ContestCell.module.scss'

import { SimpleCell, Avatar } from '@vkontakte/vkui'
import { StickerCountParticipants } from '../exportCommon'

/*
    Описание:
        Элемент отображающий ячейку списка конкурсов. (тупой компонент)
        Содержит:
            Аватар (изображение), текст, исполняющую функцию, блок с отображением количество участников,
            наименование конкурса,
    Принимает:
        id - индификатор конкурса,
        avatar - изображение (url),
        name - наименование конкурса,
        countParticipants - количество участников,
        nameTopPrize - наименование главного приза,
        onClick - исполняющую функцию
    Возвращает:
        jsx
*/

export default function ContestCell (props) {
  const { id, avatar, name, countParticipants, nameTopPrize, onClick } = props
  return (
    <div id={id} className={css.container} onClick={onClick}>
      <SimpleCell
        before={<Avatar size={72} mode='image' shadow={false} src={avatar} />}
        description={nameTopPrize}
        after={
          <div className={css.wrapper_sticker}>
            <StickerCountParticipants
              countParticipants={countParticipants}
            />
          </div>
        }
      >{name}</SimpleCell>
    </div>
  )
}
