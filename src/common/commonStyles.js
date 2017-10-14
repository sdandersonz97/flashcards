import React from 'react'
import { StyleSheet } from 'react-native'
import { transparent, white } from '../styles/colors'
export const styles= StyleSheet.create({
    button: {
        width: 150,
        height: 58,
        margin: 10,
    },
    cardImage:{
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 20,
        resizeMode: 'cover',
        width: '45%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontImage:{
        backgroundColor: transparent,
        color: white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})