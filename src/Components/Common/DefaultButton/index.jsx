import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DefaultButton ({
    buttonText,
    handlePress,
    width,
    height,




}) {
    return (
     
        <TouchableOpacity
        style={[styles.button, {width: width, height: height}]} 
        activeOpacity={0.7}
        onPress={handlePress}
        >   
            <Text> {buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create( {
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

});