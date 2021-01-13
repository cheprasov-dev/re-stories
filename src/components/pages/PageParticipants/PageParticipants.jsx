import React from 'react'
import {useGetParticipants} from "./useGetParticipants";
import {LoadingPage} from "../../common/exportCommon";
import ContentParticipants from "./ContentParticipants/ContentParticipants.jsx";
import {useSelector} from "react-redux";
import ErrorParticipants from "./ErrorParticipants/ErrorParticipants";

function PageParticipants() {
  const dataParticipants = useSelector(state => state.dataContests.dataParticipants)
  const errorGetDataParticipant = useSelector(state => state.errors.errorGetDataParticipant)
  useGetParticipants()

  return (
    <React.Fragment>
      {errorGetDataParticipant
        ? <ErrorParticipants />
        : <React.Fragment>
          {dataParticipants
            ? <ContentParticipants/> // основная информация
            : <LoadingPage imgBG={true}/> /* загрузка */}
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default PageParticipants;



