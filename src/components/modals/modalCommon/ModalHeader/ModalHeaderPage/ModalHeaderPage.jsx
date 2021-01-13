import React from 'react';
import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID, ModalPageHeader, PanelHeaderButton, } from '@vkontakte/vkui/';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';

function ModalHeaderPage (props) {
    const { textHeader, onCloseModal } = props
    return (
        <React.Fragment>
            <ModalPageHeader
                left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={onCloseModal}><Icon24Cancel /></PanelHeaderButton>}
                right={IS_PLATFORM_IOS && <PanelHeaderButton onClick={onCloseModal}>{<Icon24Done />}</PanelHeaderButton>}
            >
                {textHeader}
            </ModalPageHeader>
        </React.Fragment>
    );
}


export default ModalHeaderPage;
