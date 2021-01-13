import React from 'react'
import css from './CommentsBlock.module.scss'
import {Header} from "@vkontakte/vkui";
import Comment from "./Comment/Comment";
import {useCommentsBlock} from "./useCommentsBlock";
import {useSelector} from "react-redux";

export default function CommentsBlock() {
  const moderatorComments = useSelector(state => state.dataContests.moderatorComments)
  useCommentsBlock()

  return (
    <div className={css.container}>
      <Header>Комментарии модератора</Header>
      {moderatorComments && moderatorComments.map(elem => <Comment {...elem} key={elem.id_comments} />)}
    </div>
  )
}

CommentsBlock.propTypes = {}
