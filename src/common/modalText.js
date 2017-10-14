import React from 'react'
import { gray, white, primary } from '../styles/colors' 
import { Modal, View } from 'react-native'
import { styles } from './commonStyles'
import { Button } from './button'
import { CardSection } from './cardSection'

export const ModalText = ({ onSave, onCancel, visible, children, ...rest }) => {
    const { textArea, containerModal, cardSectionBorderBottom, cardSectionBorderTop } = styles
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={containerModal}>
            <CardSection style={cardSectionBorderTop}>
                {children}
            </CardSection>
            <CardSection style={cardSectionBorderBottom}>
                <Button onPress={() => onCancel()}>Close</Button>
            </CardSection>
                
            </View>
        </Modal>
    )
}

