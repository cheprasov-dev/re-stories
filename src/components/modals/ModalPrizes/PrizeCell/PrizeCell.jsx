import React from 'react';
import {Card, CardGrid, Cell} from '@vkontakte/vkui';
import {IconPrize} from '../../../icon/exportIcon'
import css from "./PrizesCell.module.css";
import _isUndefined from 'lodash/isUndefined'

export default function PrizeCell({index, prize}) {
  const {title, icon} = prize;
  return (
    <CardGrid className={css[`winner${index + 1}`]}>
      <Card size="l">
        <Cell
          indicator={!_isUndefined(index) && `${index+1} место`}
          before={icon && <IconPrize icon={icon}/>}>{title}
        </Cell>
      </Card>
    </CardGrid>
  )
}
