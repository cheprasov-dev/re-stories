import React from 'react';
import styles from "./UserCell.module.css";
import {Cell, Avatar} from '@vkontakte/vkui';


export default function UserCell(props) {
  const {
    id, photo_50,
    first_name, last_name = '',
    index, count,
    backgroundColor = "#713CF0"
  } = props;

  return (
    <React.Fragment>
      <div id={id} style={{backgroundColor: backgroundColor}} className={styles.container}>
        <Cell
          id={id}
          description={`Участник ${index + 1} из ${count}`}
          before={<Avatar src={photo_50}/>}
        >
          {first_name + ' ' + last_name}
        </Cell>
      </div>
    </React.Fragment>
  )
}
