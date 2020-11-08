import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import * as TimerAction from '../../../redux/Timer/TimerAction';
import Timer from './component';
import store, { ApplicationState } from '../../../redux';
import * as TimerType from '../../../redux/Timer/TimerType'
import { useEffect } from 'react';
import stroe from '../../../redux'


  const mapStateToProps = (state: ApplicationState): { currentSecond:number, previousRecord:number, isCounting:boolean } => { 
      //console.log("Tom Test Redux" + state.counter.value);
      return{
        currentSecond: state.TimerState.currentSecond,
        previousRecord: state.TimerState.previousRecord,
        isCounting: state.TimerState.isCounting
      };
  }

  const mapDispatchToProps = (dispatch: Dispatch) => {
      return {
        startCountTimeDispatch: bindActionCreators(TimerAction.start_Count_Time_Thunk, dispatch),
        pauseTimerDispatch: bindActionCreators(TimerAction.pause_Timer_Action, dispatch),
        resetTimerDispatch: bindActionCreators(TimerAction.reset_Timer_Action, dispatch),
        restartTimerDispatch: bindActionCreators(TimerAction.restart_Timer_Action, dispatch),
      }
  }

// 使用 connect 高阶组件对 CounterComponent 进行包裹
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
