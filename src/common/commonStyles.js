import React from 'react'
import { StyleSheet } from 'react-native'
import { transparent, white, gray } from '../styles/colors'
export const styles= StyleSheet.create({
    button: {
        width: 150,
        height: 58,
        margin: 10,
    },
    cardImage:{
        width: '100%', 
        height: 200, 
        borderRadius: 5
    },
    imgButton:{
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    imgCardContainer:{
        flex:1, 
        width: '90%', 
        height: 200,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 15, marginTop: 20, marginBottom: 20, borderRadius: 5
    },
    fontImage:{
        backgroundColor: transparent,
        color: white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textArea: {
        height:200,
        width:'100%',
        backgroundColor: white
    },
    containerModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
    cardSectionBorderTop:{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardSectionBorderBottom:{
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})