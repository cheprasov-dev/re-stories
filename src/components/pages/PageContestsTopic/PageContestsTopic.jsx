import React from 'react'
import {useSelector} from 'react-redux'
import ContentContestsTopic from "./ContentContestsTopic/ContentContestsTopic";
import usePageContestsTopic from "./usePageContestsTopic";
import ErrorContestsTopic from "./ErrorContestsTopic/ErrorContestsTopic";

export default function PageContestsTopic() {
  const errorGetContests = useSelector(state => state.errors.errorGetContests)
  usePageContestsTopic()
  return (
    <React.Fragment>
      {errorGetContests
        ? <ErrorContestsTopic />
        : <ContentContestsTopic />
      }
    </React.Fragment>
  )
}
