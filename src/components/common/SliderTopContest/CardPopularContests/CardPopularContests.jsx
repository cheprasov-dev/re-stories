import React from 'react'
import BannerContest from './BannerContest/BannerContest'
import css from './CardPopularContests.module.css'
import TitleContest from './TitleContest/TitleContest'
import { StickerCountParticipants, StickerEndContest } from '../../exportCommon'
import { PAGE_CONTEST } from '../../../../redux/constants/routingConstants'
import { useRouter } from '@happysanta/router'

export function CardPopularContests (props) {
  const {dateEndContest, titleContest, contestBanner, countParticipants} = props
  const router = useRouter()


  function onClickOpenContest (idContest) {
    router.pushPage(PAGE_CONTEST, { id: idContest })
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
