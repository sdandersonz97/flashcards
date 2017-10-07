import React from 'react'
import { Text, View, Modal, StyleSheet } from 'react-native'
import { CardSection } from './card_section'
import { Button } from './button'
import { primary } from '../../helpers/colors'
export const Confirm = ({ children, onAccept, onDecline, visible }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles 
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept} style={{backgroundColor:primary, margin:10}} text="Yes"/>
                    <Button onPress={onDecline} style={{backgroundColor:primary, margin:10}} text="No"/>
                </CardSection>    
            </View>    
        </Modal>
    )
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
})

