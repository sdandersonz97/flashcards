import React from 'react'
import glamorous from 'glamorous-native'
import { gray, white } from '../helpers/colors' 

const TextInput = glamorous.textInput({
    width: 300, 
    height: 50, 
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: white,
    borderRadius: 8,
})
export default TextInput

