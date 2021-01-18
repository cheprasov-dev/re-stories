import React from 'react'
import { PanelHeader, PanelHeaderBack, PromoBanner, } from '@vkontakte/vkui'
import { useSelector, useDispatch } from 'react-redux'
import css from './ContentContest.module.scss'
import { Background, ButtonCustom, HeaderText } from '../../../common/exportCommon'
import {
  MODAL_PAGE_PRIZES, MODAL_PAGE_WINNERS, PAGE_PARTICIPANTS, PAGE_TOPICS
} from '../../../../redux/constants/routingConstants'
import { setDataActiveContest } from '../../../../redux/actionCreators/dataContestsActionCreators'
import { useFirstPageCheck, useRouter } from '@happysanta/router'
import TimerContest from './TimerContest/TimerContest'
import BannerContest from './BannerContest/BannerContest'
import ButtonParticipants from './ButtonParticipants/ButtonParticipants'
import DescriptionContest from './DescriptionContest/DescriptionContest'
import RegionContest from './RegionContest/RegionContest'
import ConditionsContest from './ConditionsContest/ConditionsContest'
import { setSource } from '../../../../redux/actionCreators/dataUserActionCreators'
import { setBlocksAd } from '../../../../redux/reducers/adsReducer'
import { useMeasure } from 'react-use'
import OrganizerContest from './OrganizerContest/OrganizerContest'
/*
    Главный контент страницы PageAnalytics.
*/

export default function ContentContest () {
  const router = useRouter()
  const isFirstPage = useFirstPageCheck()
  const [ref, { height }] = useMeasure()
  const dataActiveContest = useSelector(state => state.dataContests.dataActiveContest)
  const conditionsStatuses = useSelector(state => state.dataContests.conditionsStatuses)
  const idActiveContest = useSelector(state => state.dataContests.idActiveContest)
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const blocksAd = useSelector(state => state.ads.blocksAd)

  const dispatch = useDispatch()

  const {
    active, lastFiveParticipants, countParticipants, idGroup, dataGroup,
    settingsStory, settingsPublicWall, settingsContest, moderationStatus
  } = dataActiveContest

  const {
    contestBanner, descriptionContest, titleContest, nameContest, country, city,
    conditionsPostStory, conditionsPostWall, conditionsSubscribeToGroup, conditionsSubscribeToNotifications
  } = settingsContest

  const {screen_name, photo_100, name, members_count} = dataGroup

  const timeEndContest = Date.parse(`${settingsContest.dateEndContest}T${settingsContest.timeEndContest}Z`) / 1000

  function onClickBack () {
    if (isFirstPage) {
      router.pushPage(PAGE_TOPICS)
      dispatch(setSource('catalog contests'))
    } else router.popPage()
    dispatch(setDataActiveContest(null))
  }

  let urlImagAvatar = false
  if (lastFiveParticipants) {
    let count = Number(countParticipants - lastFiveParticipants.length)
    let emptyArr = new Array(count)
    urlImagAvatar = lastFiveParticipants.map(elem => elem.photo_50)
    urlImagAvatar = urlImagAvatar.concat(emptyArr)
  }

  return (
    <React.Fragment>
      <PanelHeader
        left={<PanelHeaderBack onClick={onClickBack} />}
        separator={false}
      >
        <HeaderText
          mainText='Конкурс'
          text={nameContest}
        />
      </PanelHeader> {/* Шапка */}
      <div className={css.container_page}>
        <Background />
        <TimerContest
          flagEndContest={active}
          value={timeEndContest}
          idActiveContest={idActiveContest}
          idUser={idUser}
          moderationStatus={moderationStatus}
        />
        <BannerContest urlBanner={contestBanner} />
        <ButtonParticipants
          background={'#14CEDF'}
          urlImagAvatar={urlImagAvatar}
          onClick={() => router.pushPage(PAGE_PARTICIPANTS)}
        />
        {active ?
          <ButtonCustom
            background={'#FF921D'}
            text='Смотреть призы'
            onClick={() => router.pushModal(MODAL_PAGE_PRIZES)}
          /> :
          <ButtonCustom
            background={'#FF921D'}
            text='Победители'
            onClick={() => router.pushModal(MODAL_PAGE_WINNERS)}
          />
        }
        <DescriptionContest
          descriptionContest={descriptionContest}
          titleContest={titleContest}
        />

        <RegionContest country={country} city={city} />

        <ConditionsContest
          flagSettingStories={conditionsPostStory}
          flagSettingWall={conditionsPostWall}
          flagSubscribeToGroup={conditionsSubscribeToGroup}
          flagSubscribeToNotifications={conditionsSubscribeToNotifications}
          idActiveGroup={idGroup}
          conditionsStatuses={conditionsStatuses}
          settingsPublicWall={settingsPublicWall}
          settingsStory={settingsStory}
          idActiveContest={idActiveContest}
        />

        <OrganizerContest name={name} photo_100={photo_100} screen_name={screen_name} members_count={members_count}/>
      </div>

      {blocksAd && (<>
        <div className={css.falseBlock} style={{ height: height }} />
        <div ref={ref} className={css.adsFixed}>
          <PromoBanner bannerData={blocksAd} onClose={() => {dispatch(setBlocksAd(null))}} />
        </div>
      </>)}

    </React.Fragment>
  )
}
