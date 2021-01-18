import React from 'react'
import { Counter, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui'
import { useSelector, useDispatch } from 'react-redux'
import css from './ContentTopics.module.css'
import { SmallSpinner, Background, HeaderText, PlaceholderPage } from '../../../common/exportCommon'
import TableTopics from './TableTopics/TableTopics'
import { IconPersonalAccount } from '../../../icon/exportIcon'
import { PAGE_PERSONAL_ACCOUNT, PAGE_CONTESTS_TOPIC } from '../../../../redux/constants/routingConstants'
import { setIdActiveTopic } from '../../../../redux/actionCreators/dataContestsActionCreators'
import { setTextHeader } from '../../../../redux/actionCreators/otherDataActionCreators'
import { useRouter } from '@happysanta/router'
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline'
import { openAppBridge } from '../../../../modules/API/bridge/openAppBridge'

/*
    Главный контентс страницы PageTopics.
*/

export default function ContentTopics () {
  const router = useRouter()
  // const dataPopularContests = useSelector(state => state.dataContests.dataPopularContests)
  const countActiveContest = useSelector(state => state.dataUser.countActiveContest)
  const idsTopicsWithContests = useSelector(state => state.dataContests.idsTopicsWithContests)
  const dispatch = useDispatch()

  function onClockCardTopic (idTopic, textHeader) {
    router.pushPage(PAGE_CONTESTS_TOPIC)
    dispatch(setTextHeader(textHeader))
    dispatch(setIdActiveTopic(idTopic))
  }

  return (
    <React.Fragment>
      <PanelHeader
        separator={false}
        left={<>
          <PanelHeaderButton
            onClick={() => router.pushPage(PAGE_PERSONAL_ACCOUNT)}
            label={countActiveContest ?
              <Counter size="s" mode="prominent">
                {countActiveContest}
              </Counter> : null}
          ><IconPersonalAccount />
          </PanelHeaderButton>
          <PanelHeaderButton
            onClick={() => openAppBridge({page: 7486100})}
          >
            <Icon24AddOutline />
          </PanelHeaderButton>
        </>} // TODO сделать отображение количество конкурсов с незавершенными условиями
      >
        <HeaderText mainText='ReStories' text='Каталог' />
      </PanelHeader> {/* Шапка */}
      {/*<div >*/}
      {/*<SliderTopContest data={dataPopularContests} />*/}

      {idsTopicsWithContests
        ? idsTopicsWithContests.length > 0
          ? <div className={css.container_page}>
            <TableTopics
              topics={idsTopicsWithContests}
              onClockCardTopic={onClockCardTopic}
            />
            <Background />
          </div>
          : <PlaceholderPage
            text={<div>Упс, нет ни одного конкурса! <br />
              Вы можете стать первым организатором :)</div>}
          />
        : <SmallSpinner />}
      {/*</div>*/}
    </React.Fragment>
  )
}
