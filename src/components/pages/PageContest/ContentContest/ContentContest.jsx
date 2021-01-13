import React, {useState} from 'react'
import {PanelHeader, PanelHeaderBack, PanelHeaderButton} from '@vkontakte/vkui'
import {useSelector, useDispatch} from 'react-redux'

import css from './ContentContest.module.css'

import {mainRoute, modalRoute} from '../../../../redux/actionCreators/rouitingActionCreators'

import {
  ButtonParticipants, Background, BannerContest, TimerContest, ButtonСustom,
  DescriptionContest, ConditionsContest, HeaderText
} from '../../../common/exportCommon'
import {
  MODAL_PAGE_PRIZES,
  MODAL_PAGE_WINNERS, PAGE_CONTEST, PAGE_PARTICIPANTS, PANEL_ANALYTIC,
  PANEL_PARTICIPANTS, PANEL_SETTINGS_CONTEST, VIEW_CONTEST, VIEW_SETTINGS_CONTEST,
} from '../../../../redux/constants/routingConstants'
import {openingStoryEditorBridge} from "../../../../modules/API/bridge/openingStoryEditorBridge";
import {Input} from '@vkontakte/vkui/';
import RegionContest from "../../../common/RegionContest/RegionContest";
import Icon24LogoLivejournal from '@vkontakte/icons/dist/24/logo_livejournal';
import {
  saveSettingsContest, setCity, setCountry,
  saveSettingsPublicWall, saveSettingsStory
} from "../../../../redux/actionCreators/dataSettingsContestActionCreators";
import {setDataActiveContest} from "../../../../redux/actionCreators/dataContestsActionCreators";
import {setValueIsAdminContest} from "../../../../redux/actionCreators/dataUserActionCreators";
import ModerationBlock from "./ModerationBlock/ModerationBlock";
import {useCheckIsModerator, useCheckIsOrganizer} from "../../../../hooks/hooksGetStatus";
import CommentsBlock from "./CommentsBlock/CommentsBlock";
import {requestWrapper} from "../../../../modules/functions/requestWrapper";
import {openingPublicWallEditorBridge} from "../../../../modules/API/bridge/openingPublicWallEditorBridge";
import { useLocation, useParams, useRouter } from '@happysanta/router'

/*
    Главный контент страницы PageAnalytics.
*/

export default function ContentContest() {
  const router = useRouter()

  const dataActiveContest = useSelector(state => state.dataContests.dataActiveContest)
  const conditionsStatuses = useSelector(state => state.dataContests.conditionsStatuses)
  const idActiveContest = useSelector(state => state.dataContests.idActiveContest)
  const idUser = useSelector(state => state.dataUser.mainData.id)

  const dispatch = useDispatch()

  const {
    active, lastFiveParticipants, countParticipants, idGroup,
    settingsStory, settingsPublicWall, settingsContest, moderationStatus
  } = dataActiveContest

  const {
    contestBanner, descriptionContest, titleContest, nameContest, country, city, idCountry,
    conditionsPostStory, conditionsPostWall, conditionsSubscribeToGroup, conditionsSubscribeToNotifications
  } = settingsContest

  const timeEndContest = Date.parse(`${settingsContest.dateEndContest}T${settingsContest.timeEndContest}Z`) / 1000

  function onClickBack() {
    router.popPage()
    dispatch(setDataActiveContest(null))
    dispatch(setValueIsAdminContest(null))
  }

  function onClickButtonParticipants() {
    router.pushPage(PAGE_PARTICIPANTS)
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
        left={<PanelHeaderBack onClick={onClickBack}/>}
        separator={false}
      >
        <HeaderText
          mainText='Конкурс'
          text={nameContest}
        />
      </PanelHeader> {/* Шапка */}
      <div className={css.container_page}>
        <Background/>
        <TimerContest
          flagEndContest={active}
          value={timeEndContest}
          idActiveContest={idActiveContest}
          idUser={idUser}
          moderationStatus={moderationStatus}
        />
        <BannerContest urlBanner={contestBanner}/>
        <ButtonParticipants
          background={'#14CEDF'}
          urlImagAvatar={urlImagAvatar}
          onClick={onClickButtonParticipants}
        />
        {active ?
          <ButtonСustom
            background={'#FF921D'}
            text='Смотреть призы'
            onClick={() => router.pushModal(MODAL_PAGE_PRIZES)}
          /> :
          <ButtonСustom
            background={'#FF921D'}
            text='Победители'
            onClick={() => router.pushModal(MODAL_PAGE_WINNERS)}
          />
        }
        <DescriptionContest
          descriptionContest={descriptionContest}
          titleContest={titleContest}
        />

        <RegionContest country={country} city={city}/>

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
      </div>
    </React.Fragment>
  )
}
