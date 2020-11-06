import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import * as TimerAction from '../../../redux/Timer/TimerAction';
import Timer from './component';
import { ApplicationState } from '../../../redux';
import * as TimerType from '../../../redux/Timer/TimerType'


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
        addDispatch: bindActionCreators(TimerAction.add_Timer_Action, dispatch), //need to use bindActionCreators when develop native
        startCountTimeDispatch: bindActionCreators(TimerAction.start_Count_Time_Thunk, dispatch)
    //addDispatch: () => dispatch(TimerAction.add_Timer_Action())
    //onDecrement: (val: number, name: String) => dispatch(decreaseCounterAction({updateAmount: val, updatePerson: name})),
    //onIncrement: (val: number, name: String) => dispatch(increaseCounterAction({updateAmount: val, updatePerson: name}))
    }
}

// 使用 connect 高阶组件对 CounterComponent 进行包裹
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
