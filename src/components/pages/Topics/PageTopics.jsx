import React from 'react'
import { useSelector } from 'react-redux'
import { usePageTopics } from './usePageTopics'
import ContentTopics from './ContentTopics/ContentTopics'
import { LoadingPage } from '../../common/exportCommon'
import ErrorPage from '../../common/_pages/ErrorPage/ErrorPage'

function PageTopics () {
  // const dataPopularContests = useSelector(state => state.dataContests.dataPopularContests)
  const idsTopicsWithContests = useSelector(state => state.dataContests.idsTopicsWithContests)
  let errorPageTopics = useSelector(state => state.errors.errorPageTopics)

  usePageTopics()

  return (
    <>
      {errorPageTopics
        ? <ErrorPage />
        : idsTopicsWithContests
          ? <ContentTopics /> // основная информация
          : <LoadingPage imgBG={true} /> /* загрузка */
      }
    </>
  )
}

export default PageTopics
