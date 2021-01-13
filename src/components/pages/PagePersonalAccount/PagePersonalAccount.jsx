import React from 'react'
import {LoadingPage} from "../../common/exportCommon";
import ContentPersonalAccount from "./ContentPersonalAccount/ContentPersonalAccount";
import {useSelector} from "react-redux";
import usePagePersonalAccount from "./usePagePersonalAccount";

export default function PagePersonalAccount() {
  const abridgedDataContests = useSelector(state => state.dataContests.abridgedDataContests)
  const errorGetContests = useSelector(state => state.errors.errorGetContests)

  usePagePersonalAccount()

  return (
    <React.Fragment>
      {errorGetContests
        ? <div>error</div> // TODO сделать отработку ошибки
        : <React.Fragment>
          {abridgedDataContests
            ? <ContentPersonalAccount/> // основная информация
            : <LoadingPage imgBG={true}/> /* загрузка */}
        </React.Fragment>
      }
    </React.Fragment>
  )
}
