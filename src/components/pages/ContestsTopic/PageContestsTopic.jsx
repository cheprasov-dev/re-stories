import React from 'react'
import {useSelector} from 'react-redux'
import ContentContestsTopic from "./ContentContestsTopic/ContentContestsTopic";
import usePageContestsTopic from "./usePageContestsTopic";
import ErrorPage from '../../common/_pages/ErrorPage/ErrorPage'

export default function PageContestsTopic() {
  const mainError = useSelector(state => state.errors.mainError)
  usePageContestsTopic()
  return (
    <>
      {mainError
        ? <ErrorPage />
        : <ContentContestsTopic />
      }
    </>
  )
}
