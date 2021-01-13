import React from 'react'
import BannerContest from './BannerContest/BannerContest'
import css from './CardPopularContests.module.css'
import TitleContest from './TitleContest/TitleContest'
import { StickerCountParticipants, StickerEndContest } from '../../exportCommon'
import { useDispatch } from 'react-redux'
import { mainRoute } from '../../../../redux/actionCreators/rouitingActionCreators'
import { PANEL_CONTEST, VIEW_CONTEST } from '../../../../redux/constants/routingConstants'

export function CardPopularContests (props) {
  const {dateEndContest, titleContest, contestBanner, countParticipants} = props

  const dispatch = useDispatch()

  function onClickOpenContest () {
    dispatch(mainRoute(VIEW_CONTEST, PANEL_CONTEST))
  }

  return (
    <div className={css.container} onClick={onClickOpenContest}>
      <BannerContest
        urlBanner={contestBanner}
      />

      <div className={css.wrapper_title}>
        <TitleContest titleContest={titleContest} />
      </div>

      <div className={css.wrapper}>
        <StickerEndContest date={dateEndContest} />
        <div className={css.interval} />
        <StickerCountParticipants countParticipants={countParticipants} />
      </div>
    </div>
  )
}
