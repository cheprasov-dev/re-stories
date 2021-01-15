import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Card, CardGrid, Cell } from '@vkontakte/vkui'
import css from './ModalWinners.module.scss'
import _isUndefined from 'lodash/isUndefined'

export default function ModalWinners () {
  const winners = useSelector(state => state.dataContests.dataActiveContest.settingsContest.winners)

  const jsxWinners = winners.map((winner, index) => <WinnerCell {...winner} index={index} />)

  return (
    <div className={css.container}>
      {jsxWinners.length === 0
        ? <WinnerCell first_name={'Победителей'} last_name={'нет'} />
        : jsxWinners
      }
    </div>
  )
}

function WinnerCell ({ first_name, last_name, photo_50, index }) {
  return (
    <CardGrid className={css[`winner${index + 1}`]}>
      <Card className={css.wrapper} size="l">
        <Cell
          indicator={!_isUndefined(index) && `${index + 1} место`}
          before={photo_50 && <Avatar src={photo_50} />}
        >
          {`${first_name} ${last_name}`}
        </Cell>
      </Card>
    </CardGrid>
  )
}
