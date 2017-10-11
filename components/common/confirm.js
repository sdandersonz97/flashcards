import React from 'react'
import { Text, View, Modal, StyleSheet } from 'react-native'
import { CardSection } from './cardSection'
import { Button } from './button'
import { primary, red } from '../../helpers/colors'
import { subtitleStyle } from '../../helpers/fonts' 
export const Confirm = ({ children, onAccept, onDecline, visible }) => {
    const { containerStyle, cardSectionStyle } = styles 
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={subtitleStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept} style={{backgroundColor:primary, margin:10}} text="Yes"/>
                    <Button onPress={onDecline} style={{backgroundColor:red, margin:10}} text="No"/>
                </CardSection>    
            </View>    
        </Modal>
    )
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
})

