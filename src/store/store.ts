import { createStore, applyMiddleware, combineReducers, AnyAction, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper'

import { counterReducer, CounterState } from './counter/counterReducer'

export interface AppState {
  counter: CounterState
}

const combinedReducers = combineReducers({ counter: counterReducer })

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    }
  }
  return combinedReducers(state, action)
}

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<AppState> = () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export const storeWrapper = createWrapper(initStore)
