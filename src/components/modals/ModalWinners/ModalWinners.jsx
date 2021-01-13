import React from 'react'
import {useSelector} from 'react-redux'
import {Avatar, Card, CardGrid, Cell} from "@vkontakte/vkui";
import css from './ModalWinners.module.scss'
import {VIEW_ORGANIZER} from "../../../redux/constants/routingConstants";
import _isUndefined from "lodash/isUndefined";

export default function ModalWinners() {
  const winners = useSelector(state => state.dataContests.dataActiveContest.settingsContest.winners)
  const statusUser = useSelector(state => state.routing.statusUser)
  const isOrganizer = statusUser === VIEW_ORGANIZER


  const jsxWinners = winners.map((winner, index) => <WinnerCell {...winner} index={index} isOrganizer={isOrganizer} />)

  return (
    <div className={css.container}>
      {jsxWinners.length === 0
        ? <WinnerCell first_name={'Победителей'} last_name={'нет'} isOrganizer={false} />
        : jsxWinners
      }
    </div>
  )
}


function WinnerCell ({first_name, last_name, photo_50, id, isOrganizer, index}) {
  return (
    <CardGrid className={css[`winner${index + 1}`]}>
      <Card className={css.wrapper} size="l">
        <a href={isOrganizer && `https://vk.com/id${id}` }>
          <Cell
            indicator={!_isUndefined(index) && `${index + 1} место`}
            before={photo_50 && <Avatar src={photo_50}/>}
          >
            {`${first_name} ${last_name}`}
          </Cell>
        </a>
      </Card>
    </CardGrid>
  )
}
