import React, {useState} from 'react'
import css from './ConditionsContest.module.css'
import {useDispatch, useSelector} from "react-redux";
import ConditionCell from './ConditionCell/ConditionCell'
import bell from './../../../../../assets/img/bell.svg'
import arrow from './../../../../../assets/img/arrow.svg'
import people from './../../../../../assets/img/people.svg'
import stories from './../../../../../assets/img/stories.svg'
import { fulfillmentOfConditionsModule } from '../../../../../modules/fulfillmentOfConditionsModule'
import { sendConditionStatusAPI } from '../../../../../modules/API/server/sendConditionStatusAPI'
import { upgradeConditionStatus } from '../../../../../redux/actionCreators/dataContestsActionCreators'

export default function ConditionsContest(props) {
  const [isDisabled, setIsDisabled] = useState(false)
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const dispatch = useDispatch()
  const {
    flagSubscribeToNotifications, flagSettingStories, flagSettingWall,
    flagSubscribeToGroup, conditionsStatuses = false, idActiveGroup, settingsPublicWall,
    settingsStory, idActiveContest
  } = props

  const { conditionSubscribeToNotifications, conditionStories, conditionWall, conditionSubscribeToGroup} = conditionsStatuses

  async function onClickCondition (type, idGroup, idContest, additionalValue=false) {
    setIsDisabled(true)
    const {nameStatus, valueStatus, error} = await fulfillmentOfConditionsModule(type, idGroup, idContest, additionalValue)
    if (!error) {
      const { error } = await sendConditionStatusAPI(idUser, idContest, nameStatus, valueStatus)
      if (!error) dispatch(upgradeConditionStatus(nameStatus, valueStatus))
      else console.log('error', error) // TODO отработать ошибку
    } else console.log('error', error) // TODO отработать ошибку
    setIsDisabled(false)
  }

  let arrLiForPreviewContest = [
    {
      flag: flagSubscribeToNotifications,
      icon: bell,
      title: 'Включить уведомления в ЛС',
      conditionStatus: conditionSubscribeToNotifications,
      onClick: () => onClickCondition('conditionSubscribeToNotifications', idActiveGroup, idActiveContest)
    },
    {
      flag: flagSettingStories,
      icon: stories,
      title: 'Публикация в сторис',
      conditionStatus: conditionStories,
      onClick: () => onClickCondition('conditionStories', idActiveGroup, idActiveContest, settingsStory)
    },
    {
      flag: flagSettingWall,
      icon: arrow,
      title: 'Опубликовать пост',
      conditionStatus: conditionWall,
      onClick: () => onClickCondition('conditionWall', idActiveGroup, idActiveContest, settingsPublicWall)
    },
    {
      flag: flagSubscribeToGroup,
      icon: people,
      title: 'Подписаться на группу',
      conditionStatus: conditionSubscribeToGroup,
      onClick: () => onClickCondition('conditionSubscribeToGroup', idActiveGroup, idActiveContest)
    },
  ]

  return (
    <React.Fragment>
      <div className={css.container}>
        <div className={css.header}>Условия конкурса</div>
        <ul className={css.ul_conditions}>
          {arrLiForPreviewContest.map(function (item, index) {
            return (
              <ConditionCell
                key={index}
                flag={item.flag}
                icon={item.icon}
                text={item.title}
                conditionStatus={item.conditionStatus}
                onClick={() => item.onClick()}
                isDisabled={isDisabled}
              />
            )
          })}
        </ul>
      </div>
    </React.Fragment>
  )
}
