import React from 'react';
import styles from './PlaceholderCustom.module.css'
import { ButtonCustom } from '../../../exportCommon'

/* (тупой компонент)
    Описание:
        Плацхолдер
    Принимает:
        text - текст,
        textButton - текст кнопки,
        onClick - исполняющая функция при нажатии на кнопку,
    Возвращает:
        jsx
*/

export default function PlaceholderCustom (props) {
    const { text, onClick, textButton=false, disabled } = props;
    return (
        <div className={styles.center_container}>
            <div className={styles.text}>{text}</div>
            {textButton ? <ButtonCustom
                background={'#14CEDF'}
                disabled={disabled}
                text={textButton}
                onClick={ onClick }
            /> : null}
        </div>
    )
}
