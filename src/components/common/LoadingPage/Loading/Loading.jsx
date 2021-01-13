import React from 'react';
import { Spinner } from '@vkontakte/vkui';

import styles from "./Loading.module.css";

/* (тупой компонент) 
    Описание:
        Компонент отображет спинер 
    Принимает: 
        -
    Возвращает: 
        jsx
*/

export default function Loading () {
    return (
        <React.Fragment>
            <div className={styles.div_spinner}>
                <Spinner size='large' />
            </div> 
        </React.Fragment>
    )
}