import React from 'react'
import {Div, InfoRow} from "@vkontakte/vkui";
import {Markdown} from "../../../../../common/exportCommon";
import moment from 'moment'

export default function Comment({comment, create_date}) {
  return (
    <Div style={{'color': '#ffffff'}}>
      <InfoRow header={`${create_date} (МСК)`}>
        <Markdown children={comment}/>
      </InfoRow>
    </Div>
  )
}

Comment.propTypes = {}
