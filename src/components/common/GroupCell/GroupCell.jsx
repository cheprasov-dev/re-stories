import React from 'react';
import styles from "./GroupCell.module.css";
import { SimpleCell, Avatar } from '@vkontakte/vkui';

/* (тупой компонент)
    Описание:
        Компонент возвращает jsx разметку содержащая ячейеу из списка групп.
        Содержит:
            SimpleCell - VK UI элемент
            Avatar - изображение (аватар)
            name - Наименование сообщества
            description - описательная часть с колисеством участников
    Принимает:
            id - идификатор группы,
            membersСount - количество участников,
            photo_100 - фото (URL),
            name - наименование группы,
            onClick - исполняющая функция при клике (callback),
            standartStyle - флаг отвечающий за стиль (стандартный / пользовательский) - относительно VK UI
    Возвращает:
        jsx
*/

export default function GroupCell (props) {
    const { id, members_count, photo_100, name, onClick, standartStyle=false } = props;
    const caseWordsSubscriber = ['подписчиков', 'подписчик', 'подписчика', 'подписчика', 'подписчика', 'подписчиков', 'подписчиков', 'подписчиков', 'подписчиков', 'подписчиков'];
    return (
        <React.Fragment>
            <div id={id} className={standartStyle ? '' : styles.container} onClick={onClick}>
                <SimpleCell
                    description={`${members_count} ${caseWordsSubscriber[Number(String(members_count)[String(members_count).length - 1])]}`}
                    before={<Avatar src={photo_100} />}
                >
                    {name}
                </SimpleCell>
            </div>
        </React.Fragment>
    )
}

