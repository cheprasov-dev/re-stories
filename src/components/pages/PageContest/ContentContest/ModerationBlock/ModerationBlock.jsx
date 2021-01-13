import React, {useState} from 'react'
import css from './ModerationBlock.module.scss'
import {Button, Div, FormLayout, FormLayoutGroup, Textarea} from "@vkontakte/vkui";
import {setModerationStatusAPI} from "../../../../../modules/API/server/setModerationStatusAPI";
import {useDispatch, useSelector} from "react-redux";
import {mainRoute} from "../../../../../redux/actionCreators/rouitingActionCreators";
import {PANEL_MODERATORS_GROUPS, VIEW_MODERATORS} from "../../../../../redux/constants/routingConstants";

export default function ModerationBlock() {
  const idActiveContest = useSelector(state => state.dataContests.idActiveContest)
  const [comment, setComment] = useState('')
  const idUser = useSelector(state => state.dataUser.mainData.id)
  const dispatch = useDispatch()
  async function setStatus(status = 1) {
    const {data: {error}} = await setModerationStatusAPI(idActiveContest, idUser, status, comment, idUser)
    if (!error) dispatch(mainRoute(VIEW_MODERATORS, PANEL_MODERATORS_GROUPS))
  }

  return (
    <>
      <FormLayout>
        <FormLayoutGroup top='Комментарий'>
          <Textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder='Введите сообщение...'
          />
        </FormLayoutGroup>
      </FormLayout>
      <Div className={css.wrapperModerButton}>
        <Button
          size="l" stretched mode="destructive"
          style={{marginRight: 8}}
          onClick={() => {
            setStatus(-1)
          }}
        >Отклонить</Button>
        <Button
          size="l" stretched mode="commerce"
          onClick={() => {
            setStatus()
          }}
        >Одобрить</Button>
      </Div>
    </>
  )
}

ModerationBlock.propTypes = {}
