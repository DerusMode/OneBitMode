import Lottie from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native' 

export default function LifeStatus() {

    /*Status:
    100 - Máximo
    50 - Médio
    25 - Baixo
    00 - Curto (Acabou o game)
*/
    return (
        <View style={styles.container}>
            <Lottie
                source={require('../../../Assets/education/education-50.json')}
                autoPlay
                loop
                style={styles.educacaoAnimacao}
            />
            <Lottie 
                source={require('../../../Assets/money/money-100.json')}
                autoPlay
                loop
                style={styles.financasAnimacao}
            />
            <Lottie 
                source={require('../../../Assets/robot/robot-100-100.json')}
                autoPlay
                loop
                style={styles.roboAnimacao}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        width:300,
        height:300,
        
    },
    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25,   
        position: 'absolute'
    },
    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: 'absolute',
    },
    financasAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: 'absolute',
    }


});
