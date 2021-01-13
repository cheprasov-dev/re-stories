import React from 'react'
import css from './ModalPrizes.module.scss'
import {useSelector} from 'react-redux'
import firstPrize from '../../../assets/img/prize/firstPrize.svg'
import secondPrize from '../../../assets/img/prize/secondPrize.svg'
import thirdPrize from '../../../assets/img/prize/thirdPrize.svg'
import goldenLaurels from '../../../assets/img/prize/goldenLaurels.svg'
import silverLaurels from '../../../assets/img/prize/silverLaurels.svg'
import {PrizeCell} from '../../common/exportCommon'

export default function ModalPrizes() {
  const prizes = useSelector(state => {
    return state.dataSettingsContest.settingsContest.namesPrizes || state.dataContests.dataActiveContest?.settingsContest.namesPrizes
  })

  let jsxPrizes;

  if (prizes) {
    const newArrPrizes = prizes.map((prize, index) => {
      if (index === 0) {
        return {
          title: prize,
          icon: firstPrize
        }
      } else if (index === 1) {
        return {
          title: prize,
          icon: secondPrize
        }
      } else if (index === 2) {
        return {
          title: prize,
          icon: thirdPrize
        }
      } else if (index > 2 && index < 7) {
        return {
          title: prize,
          icon: goldenLaurels
        }
      } else  {
        return {
          title: prize,
          icon: silverLaurels
        }
      }
    })
    jsxPrizes = newArrPrizes.map((prize, index) => {
      return <PrizeCell
        key={index}
        index={index}
        prize={prize}
      />
    })
  }

  return (
    <div className={css.wrapper}>
      {jsxPrizes && jsxPrizes.length === 0
        ? (
          <PrizeCell prize = {{title: 'Задайте призы в настройках'}} />
        )
        : jsxPrizes}
    </div>
  )
}
