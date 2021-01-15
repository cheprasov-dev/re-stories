import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import css from './ContentContestsTopic.module.css'
import { setIdActiveTopic } from '../../../../redux/actionCreators/dataContestsActionCreators'
import { Div, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import {
  SmallSpinner, Background, ContestCell,
  SelectTopics, HeaderText,
} from '../../../common/exportCommon'
import { PAGE_CONTEST } from '../../../../redux/constants/routingConstants'
import { setTextHeader } from '../../../../redux/actionCreators/otherDataActionCreators'
import { useRouter } from '@happysanta/router'
import { setSource } from '../../../../redux/actionCreators/dataUserActionCreators'

/*
    Главный контентс страницы PageContestsTopic.
*/

export default function ContentContestsTopic () {
  const router = useRouter()
  // const dataPopularContests = useSelector(state => state.dataContests.dataPopularContests)
  // const countActiveContest = useSelector(state => state.dataUser.countActiveContest)
  const textHeader = useSelector(state => state.otherData.textHeader)
  const idActiveTopic = useSelector(state => state.dataContests.idActiveTopic)
  const isLoadContestsActiveTopic = useSelector(state => state.flags.isLoadContestsActiveTopic)
  const abridgedDataContests = useSelector(state => state.dataContests.abridgedDataContests)
  const errorGetContests = useSelector(state => state.errors.errorGetContests)
  const idsTopicsWithContests = useSelector(state => state.dataContests.idsTopicsWithContests)
  // const countActiveContest = useSelector(state => state.dataUser.countActiveContest)

  const dispatch = useDispatch()

  function onChangeTopic (idTopic) {
    const index = idsTopicsWithContests.findIndex(elem => {
      return elem.id === idTopic
    })
    dispatch(setTextHeader(idsTopicsWithContests[index].name))
    dispatch(setIdActiveTopic(idTopic))
  }

  function onClickContest (idContest) {
    dispatch(setSource('catalog contests'))
    router.pushPage(PAGE_CONTEST, { id: idContest })
  }

  const listConstests = !abridgedDataContests || abridgedDataContests.map(contest => {
    return (
      <ContestCell
        key={contest.idContest}
        id={contest.idContest}
        name={contest.nameContest}
        avatar={contest.directoryIcon}
        nameTopPrize={contest.topPrize}
        countParticipants={contest.countParticipants}
        onClick={() => {
          onClickContest(contest.idContest)
        }}
      />
    )
  })

  return (
    <React.Fragment>

      <PanelHeader
        separator={false}
        left={<>
          <PanelHeaderBack onClick={() => router.popPage()} />

          {/*
          <PanelHeaderButton
            onClick={() => router.pushPage(PAGE_PERSONAL_ACCOUNT)}
            label={countActiveContest ?
              <Counter size="s" mode="prominent">
                {countActiveContest}
              </Counter> : null}
          ><IconPersonalAccount/>
          </PanelHeaderButton>
          {/*
            TODO сделать переход в персональный аккуунт
           проблема заключается в том что PageContestsTopic и PagePersonalAccount
           связаны с одной переменной abridgedDataContests по этому появляются баги во время преехода,
           а именно данные не успевают затереться

           Вывод: если нужен этот переход, то необходимо разделить данные на которых строятся страницы
          */}
        </>}
      >
        <HeaderText
          mainText='Тематика'
          text={textHeader}
        />
      </PanelHeader> {/* Шапка */}

      <div className={css.container_page}>
        <Background />
        {/*<SliderTopContest data={dataPopularContests}/>*/}
        <Div>
          <SelectTopics
            arrTopics={idsTopicsWithContests}
            onChange={(e) => onChangeTopic(e.target.value)}
            value={idActiveTopic}
          />
        </Div>
        {errorGetContests
          ? <div>Ошибка запроса</div> // TODO создать ошибке красивый вид + добавить кнопку, повторить запрос
          : isLoadContestsActiveTopic
            ? <SmallSpinner />
            : <>{listConstests}</>}
      </div>
    </React.Fragment>
  )
}
