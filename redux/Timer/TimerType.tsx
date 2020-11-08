/*** We are gonna set the interface of reducer, state and action here, so that we can control the data type ***/

/*** State interface Block, used to form the state ***/
export interface TimerState{
    currentSecond: number,
    previousRecord: number,
    isCounting: boolean
}


/*** Action interface Block, used as the action.type  ***/
export const start_Timer_Action_Type:String = 'start'; //define action.type of increaseCounterMessage
export const restart_Timer_Action_Type:String = 'restart'; //define action.type of decreaseCounterMessage
export const pause_Timer_Action_Type:String = 'pause'; //define action.type of decreaseCounterMessage
export const reset_Timer_Action_Type:String = 'reset'; 
export const add_Timer_Action_Type:String = 'add'; 

export interface start_Timer_Action_Interface {
    type: typeof start_Timer_Action_Type;
    payload: number;
}

export interface restart_Timer_Action_Interface {
    type: typeof restart_Timer_Action_Type;
    payload: number;
}

export interface add_Timer_Action_Interface {
    type: typeof add_Timer_Action_Type;
    payload: number;
}

export interface pause_Timer_Action_Interface {
    type: typeof pause_Timer_Action_Type;
    payload: number;
}

export interface reset_Timer_Action_Interface {
    type: typeof reset_Timer_Action_Type;
    payload: number;
}

export type Timer_Action_Interface = add_Timer_Action_Interface | start_Timer_Action_Interface | restart_Timer_Action_Interface | pause_Timer_Action_Interface | reset_Timer_Action_Interface

/*** Payload interface Block ***/
export const initialTime: number = 0

