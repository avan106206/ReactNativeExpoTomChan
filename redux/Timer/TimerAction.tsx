/*** Implementation of action ***/
import * as TimerType from './TimerType';
import { ActionCreator } from 'redux'; //By using the ActionCreator Module, we dont need to write the return
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Alert} from 'react-native';
import store from '../index'


// implemetation of start_Timer_Action_Interface action 
export const start_Timer_Action: ActionCreator<TimerType.start_Timer_Action_Interface> = 
() =>(
  {
  type: TimerType.start_Timer_Action_Type, //action.type
  payload: -1
});

// implemetation of restart_Timer_Action_Interface action 
export const restart_Timer_Action: ActionCreator<TimerType.restart_Timer_Action_Interface> = 
(initialTime: number) =>(
  {
  type: TimerType.restart_Timer_Action_Type, //action.type
  payload: initialTime
});

export const add_Timer_Action: ActionCreator<TimerType.add_Timer_Action_Interface> = 
(initialTime: number) =>(
  {
  type: TimerType.add_Timer_Action_Type, //action.type
  payload: initialTime
});

// implemetation of reset_Timer_Action_Interface action 
export const reset_Timer_Action: ActionCreator<TimerType.reset_Timer_Action_Interface> = 
() =>(
  {
  type: TimerType.reset_Timer_Action_Type, //action.type
  payload: 0
});

// implemetation of pause_Timer_Action_Interface action 
export const pause_Timer_Action: ActionCreator<TimerType.pause_Timer_Action_Interface> = 
() =>(
  {
  type: TimerType.reset_Timer_Action_Type, //action.type
  payload: 0
});

/*** Thunk block ***/
export const start_Count_Time_Thunk = (): COUNTING_TIME_THUNK_TYPE => {
  // Invoke API
  return (dispatch: COUNTING_TIME_THUNK_DISPATCH) => {

    dispatch(start_Timer_Action());

    const count_Time = () => {
      if(store.getState().TimerState.isCounting){
        dispatch(add_Timer_Action());
       }else{
        clearInterval(Global_Timer);//kill the async function
       }
    };

    const Global_Timer  = window.setInterval( //launch the async function named Gloval_Timer
      count_Time 
    , 1000);

  }
}

export type COUNTING_TIME_THUNK_TYPE = ThunkAction<void, {}, {}, TimerType.Timer_Action_Interface>
//ThunkAction<R, S, E, A extends Action<any>>, R: return type, S: state type, E: extraArgument type, A: action type

export type COUNTING_TIME_THUNK_DISPATCH = ThunkDispatch<{}, {}, TimerType.Timer_Action_Interface>
//interface ThunkDispatch<S, E, A extends Action>

