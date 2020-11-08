import * as TimerType from './TimerType';
import { Reducer } from 'redux';
import { Alert} from 'react-native';

export const initialTimerState: TimerType.TimerState = {
    currentSecond: 0,
    previousRecord: 0,
    isCounting: false
  }

const timerReducer: Reducer<TimerType.TimerState, TimerType.Timer_Action_Interface> = (previousState: TimerType.TimerState = initialTimerState, action:TimerType.Timer_Action_Interface) => { //create the Reducer type object named counterReducer
    // We'll augment the action type on the switch case to make sure we have
    // all the cases handled.
    switch (action.type) {
        case TimerType.start_Timer_Action_Type:
            return {...previousState, isCounting: true}
        case TimerType.add_Timer_Action_Type:
            return {...previousState, currentSecond: previousState.currentSecond + 1 }
        case TimerType.restart_Timer_Action_Type:
            return {...previousState, isCounting: true, previousRecord: previousState.currentSecond, currentSecond: action.payload }
        case TimerType.pause_Timer_Action_Type:
            return {...previousState, isCounting: false }
        case TimerType.reset_Timer_Action_Type:
            return {...previousState, isCounting: false, previousRecord: previousState.currentSecond, currentSecond: action.payload }
        default:
            return previousState; //The default(inital) state is return from here
    }
};

export default timerReducer;