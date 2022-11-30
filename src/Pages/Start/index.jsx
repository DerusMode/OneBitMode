import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';


export default function Start(){

    return(
        <view>
            <ScrollView ShowVerticalScrollIndicator={false}>
                <view>
                    <image
                        source={require('../../assets/icons/logo3.png')}
                    />
                    <text>
                        vamos transformar sua vida {'/n'} em jogo , buscando sempre {'/n'} o melhor nível.                    </text>    
                </view>
           
            </ScrollView>    
        </view>
    )
}