import React, { useState } from 'react';
import Button from '../Button'
import { StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import * as TimerType from '../../../redux/Timer/TimerType'
import { Entypo } from '@expo/vector-icons'; 
import {styles} from '../../styles/styles'

interface reduxProp{
    currentSecond: number,
    previousRecord: number,
    isCounting: boolean,
    addDispatch: () => void,
    startCountTimeDispatch: () => void,
    pauseTimerDispatch: () => void,
    resetTimerDispatch: () => void,
    restartTimerDispatch: () => void
}

const Timer = ( props: reduxProp) => {

    const { currentSecond, previousRecord, isCounting, pauseTimerDispatch, 
        startCountTimeDispatch, resetTimerDispatch, restartTimerDispatch } = props

    return (
        <View style = {styles.TimerStyle}>
            <StatusBar barStyle={'light-content'} />
            {/* <View style={style.upper}> */}
            <View>
                <Text style={style.time}>
                    25:00
                </Text>
                {/* <View style={style.lower}> */}
                <View>
                    <Text style={style.button_text}>
                        <Button iconType = "FontAwesome" iconName = "play" onPress = {() => startCountTimeDispatch()}/>
                    </Text>
                    <Text style={style.button_text}>
                        <Button iconType = "FontAwesome" iconName = "pause" onPress = {() => pauseTimerDispatch()}/>
                    </Text>
                    <Text style={style.button_text}>
                        <Button iconType = "Entypo" iconName = "back-in-time" onPress = { ()=>Alert.alert(">>")}/>
                    </Text>
                    <Text style={style.button_text}>
                        Current Second: {currentSecond}
                    </Text>
                    <Text style={style.button_text}>
                        previousRecord: {previousRecord}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lower: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    time: {
        color: '#ffffff',
        fontSize: 120,
        fontWeight: '100'
    },
    button_text: {
        color: '#ffffff',
        fontSize: 15
    }
});

export default Timer;