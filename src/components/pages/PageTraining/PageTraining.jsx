import React from 'react'
import css from './PageTraining.module.scss'
import { Background, ButtonСustom } from '../../common/exportCommon'
import { PanelHeader } from '@vkontakte/vkui'
import { mainRoute } from '../../../redux/actionCreators/rouitingActionCreators'
import { useDispatch } from 'react-redux'
import { setValueIsViewTraining } from '../../../redux/actionCreators/dataUserActionCreators'
import { PAGE_TRAINING_CONTESTS } from '../../../redux/constants/routingConstants'
import { useRouter } from '@happysanta/router'

export default function PageTraining (props) {
  const router = useRouter()
  const { title, image, textButton, nextPage } = props
  return (
    <>
      <PanelHeader
        separator={false} /> {/* Шапка */}
      <Background imgBG />
      <div className={css.wrapper}>
        <div className={css.title}>{title}</div>
        <img className={css.main_image} src={image} alt="img" />
        <ButtonСustom
          background={'#14CEDF'}
          text={textButton}
          onClick={() => router.pushPage(nextPage)}
        />
      </div>
    </>
  )
}
