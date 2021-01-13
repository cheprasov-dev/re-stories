import React from 'react'
import { useSelector } from 'react-redux'
import '@vkontakte/vkui/dist/vkui.css'
import './App.css'
import {
  VIEW_PARTICIPANT,
  PANEL_TOPICS,
  PANEL_CONTESTS_TOPIC,
  PANEL_PERSONAL_ACCOUNT,
  VIEW_CONTEST,
  PANEL_CONTEST,
  PANEL_PARTICIPANTS,
  MODAL_PAGE_PRIZES,
  MODAL_PAGE_WINNERS,
  VIEW_TRAINING_SECTION,
  PANEL_TRAINING_CONTESTS,
  PANEL_TRAINING_CONDITIONS,
  PANEL_TRAINING_PRIZES,
} from './redux/constants/routingConstants'
import {
 PageContest, PageTopics, PageContestsTopic, PagePersonalAccount, PageTraining,
} from './components/pages/exportPage'
import { Root, View, Panel, ModalRoot, ModalPage } from '@vkontakte/vkui'
import LoadingPage from './components/common/LoadingPage/LoadingPage'
import { ModalPrizes, ModalWinners } from './components/modals/exportModalPage'
import ModalHeaderPage from './components/modals/modalCommon/ModalHeader/ModalHeaderPage/ModalHeaderPage'
import { useClientIdentification } from './hooks/useClientIdentification'
import PageParticipants from './components/pages/PageParticipants/PageParticipants'
import { arrTraining } from './redux/constants/otherConstatnts'
import { useLocation, useRouter } from '@happysanta/router'

// TODO вывести в компонентах ошибки контактную информацию для связи

export default function App () {
  const mainData = useSelector(state => state.dataUser.mainData)
  const location = useLocation()
  const router = useRouter()

  /* Инициализация пользователя */
  useClientIdentification()

//================================== M O D A L  P A G E ==================================//

  // модальный Root использующаяся в View id={VIEW_SETTINGS_CONTEST, VIEW_CONTEST}
  const modalContest = (
    <ModalRoot activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <ModalPage
        id={MODAL_PAGE_PRIZES} onClose={() => router.popPage()} settlingHeight={100}
        header={<ModalHeaderPage textHeader='Призы' onCloseModal={() => router.popPage()} />}
      >
        <ModalPrizes /> {/*Список призов*/}
      </ModalPage>
      <ModalPage
        id={MODAL_PAGE_WINNERS} onClose={() => router.popPage()} settlingHeight={100}
        header={<ModalHeaderPage textHeader='Победители' onCloseModal={() => router.popPage()} />}
      >
        <ModalWinners /> {/*Список победителей*/}
      </ModalPage>
    </ModalRoot>
  )

  if (!mainData) {
    return <LoadingPage imgBG={true} />
  }

//======================= О С Н О В Н О Й  R E T U R N =========================================//
  return (
    /* Маршрутизатор VK UI */
    <Root
      activeView={location.getViewId()}
    >
      {/* View участника */}
      <View
        id={VIEW_PARTICIPANT}
        onSwipeBack={() => router.popPage()}
        history={location.hasOverlay() ? [] : location.getViewHistory(VIEW_PARTICIPANT)}
        activePanel={location.getViewActivePanel(VIEW_PARTICIPANT)}
      >
        {/* Panel тематики конкурсов */}
        <Panel id={PANEL_TOPICS}>
          <PageTopics />
        </Panel>
        {/* Panel конкурсы тематики */}
        <Panel id={PANEL_CONTESTS_TOPIC}>
          <PageContestsTopic />
        </Panel>
        {/* Panel личный кабинет */}
        <Panel id={PANEL_PERSONAL_ACCOUNT}>
          <PagePersonalAccount />
        </Panel>
      </View>

      {/* View конкурса */}
      <View
        id={VIEW_CONTEST}
        onSwipeBack={() => router.popPage()}
        history={location.hasOverlay() ? [] : location.getViewHistory(VIEW_CONTEST)}
        activePanel={location.getViewActivePanel(VIEW_CONTEST)}
        modal={modalContest}
      >
        {/* Panel конкурс */}
        <Panel id={PANEL_CONTEST}>
          <PageContest />
        </Panel>
        {/* Panel участники */}
        <Panel id={PANEL_PARTICIPANTS}>
          <PageParticipants />
        </Panel>
      </View>

      {/* View обучения сервису */}
      <View
        id={VIEW_TRAINING_SECTION}
        onSwipeBack={() => router.popPage()}
        history={location.hasOverlay() ? [] : location.getViewHistory(VIEW_TRAINING_SECTION)}
        activePanel={location.getViewActivePanel(VIEW_TRAINING_SECTION)}
      >
        {/* Panel конкурсы */}
        <Panel id={PANEL_TRAINING_CONTESTS}>
          <PageTraining {...arrTraining.trainingContests} />
        </Panel>
        {/* Panel условия */}
        <Panel id={PANEL_TRAINING_CONDITIONS}>
          <PageTraining {...arrTraining.trainingConditions} />
        </Panel>
        {/* Panel призы */}
        <Panel id={PANEL_TRAINING_PRIZES}>
          <PageTraining {...arrTraining.trainingPrizes} />
        </Panel>
      </View>
    </Root>
  )
}
