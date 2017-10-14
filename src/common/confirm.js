import React from 'react'
import { Text, View, Modal, StyleSheet } from 'react-native'
import { CardSection } from './cardSection'
import { Button } from './button'
import { primary, red } from '../styles/colors'
import { fontStyles } from '../styles' 
import { styles } from './commonStyles'
export const Confirm = ({ children, onAccept, onDecline, visible }) => {
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={styles.containerModal}>
                <CardSection style={{justifyContent:'center'}}>
                    <Text style={fontStyles.subtitleStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept} style={{backgroundColor:primary, margin:10}} text="Yes"/>
                    <Button onPress={onDecline} style={{backgroundColor:red, margin:10}} text="No"/>
                </CardSection>    
            </View>    
        </Modal>
    )
}


