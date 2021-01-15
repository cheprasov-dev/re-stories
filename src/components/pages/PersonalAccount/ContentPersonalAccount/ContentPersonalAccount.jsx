import React from 'react'
import css from './ContentPersonalAccount.module.scss'
import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { useDispatch, useSelector } from 'react-redux'
import { Background, ContestCell, PlaceholderPage } from '../../../common/exportCommon'
import { PAGE_CONTEST } from '../../../../redux/constants/routingConstants'
import { useRouter } from '@happysanta/router'
import { setSource } from '../../../../redux/actionCreators/dataUserActionCreators'

export default function ContentPersonalAccount () {
  const router = useRouter()
  const abridgedDataContests = useSelector(state => state.dataContests.abridgedDataContests)
  const dispatch = useDispatch()

  function onClickContest (idContest) {
    dispatch(setSource('personal account'))
    router.pushPage(PAGE_CONTEST, { id: idContest })
  }

  const listConstests = abridgedDataContests.map((contest, index) => {
    return (
      <ContestCell
        key={index}
        id={index}
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
        left={<React.Fragment>
          <PanelHeaderBack onClick={() => router.popPage()} />

        </React.Fragment>
        }
      >Ваши конкурсы</PanelHeader>
      {abridgedDataContests.length === 0
        ? <PlaceholderPage
          text={<div>Еще не приняли участие? <br /></div>}
          textButton='Пора участвовать!'
          onClick={() => router.popPage()}
        />
        : (
          <div className={css.container_page}>
            <Background />
            {listConstests}
          </div>
        )}
    </React.Fragment>
  )
}

ContentPersonalAccount.propTypes = {}
