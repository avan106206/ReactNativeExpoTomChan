import {combineReducers, Reducer, compose, createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import * as TimerType from './Timer/TimerType';
import * as TimerAction from './Timer/TimerAction';
import timerReducer from './Timer/TimerReducer';

export interface ApplicationState {
  TimerState: TimerType.TimerState
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    TimerState: timerReducer
});

//const middlewareEnhancer = applyMiddleware(logger, thunk);
const middlewareEnhancer = applyMiddleware(thunk);

const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers);//need to do
// sagaMiddleware.run(mainSaga);


export default store;