import React from 'react'
import { View, Dimensions, Image} from 'react-native'
import { Content, Card, CardItem, Right, Left, Body, Text, Button } from 'native-base'
import { fontStyles, containersStyles } from '../../styles' 

const SwipeCard = props => {
    const { titleStyle, subtitleStyle } = fontStyles
    const { question, answer, view, onPressChangeView, deckSize, index } = props
    const dim = Dimensions.get('window')
    return(
        <Card style={{height:450, justifyContent:'space-between',  elevation: 3 }}>
            <CardItem cardHeader>
                <Left>
                <Body>
                    <Text >
                        {`${index+1}/${deckSize}`}
                    </Text>
                </Body>
                </Left>
            </CardItem> 
            <CardItem cardBody>
                <Body style={{margin:20}}>
                    <Text >
                        { view === 'question' ? question : answer }
                    </Text>
                    
                </Body>
            </CardItem>
            <CardItem>
                    <Left/>
                    {view === 'question' 
                    ?   <Button 
                            bordered
                            onPress={onPressChangeView} 
                        >
                        <Text>View the answer</Text>
                        </Button>
                    :   <Button 
                            bordered
                            onPress={onPressChangeView} 
                        >
                        <Text>View the answer</Text>
                        </Button>
                    }
                    <Right/>
            </CardItem> 
            <CardItem>
                    <Left>
                        <Text style={{fontSize:10}}>
                            Swipe Left for incorrect
                        </Text>
                        
                    </Left>
                    <Right>
                        <Text style={{fontSize:10}}>
                            Swipe Right for correct
                        </Text>
                    </Right>
            </CardItem>                     
        </Card>
    )
}
export default SwipeCard