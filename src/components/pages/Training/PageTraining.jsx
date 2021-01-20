import React from 'react'
import css from './PageTraining.module.scss'
import { Background, ButtonCustom } from '../../common/exportCommon'
import { PanelHeader } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { arrTraining } from '../../../redux/constants/otherConstatnts'

export default function PageTraining (props) {
  const router = useRouter()
  const { title, image, textButton, nextPage: page, end } = props

  const nextPage = () => {
    if (end) {
      const length = Object.keys(arrTraining).length
      window.history.go(-length)
    }
    else router.pushPage(page)
  }

  return (
    <>
      <PanelHeader
        separator={false} /> {/* Шапка */}
      <Background imgBG />
      <div className={css.wrapper}>
        <div className={css.title}>{title}</div>
        <img className={css.main_image} src={image} alt="img" />
        <ButtonCustom
          background={'#14CEDF'}
          text={textButton}
          onClick={nextPage}
        />
      </div>
    </>
  )
}
