import React, { useState } from 'react';
import Button from '../Button'
import { StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import * as TimerType from '../../../redux/Timer/TimerType'

interface reduxProp{
    currentSecond: number,
    previousRecord: number,
    isCounting: boolean,
    addDispatch: () => void,
    startCountTimeDispatch: () => void
}

const Timer = ( props: reduxProp) => {

    const { currentSecond, previousRecord, isCounting, addDispatch, startCountTimeDispatch } = props

    return (
        <View style = {styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.upper}>
                <Text style={styles.time}>
                    25:00
                </Text>
                <View style={styles.lower}>
                    <Text style={styles.button_text}>
                        <Button iconName = "play" onPress = {() => startCountTimeDispatch()}/>
                    </Text>
                    <Text style={styles.button_text}>
                        <Button iconName = "pause " onPress = {() => Alert.alert('pause')}/>
                    </Text>
                    <Text style={styles.button_text}>
                        Current Second: {currentSecond}
                    </Text>
                    <Text style={styles.button_text}>
                        previousRecord: {previousRecord}
                    </Text>
                    <Text style={styles.button_text}>
                        isCounting: {isCounting}
                    </Text>
                    
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        flex: 1,
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