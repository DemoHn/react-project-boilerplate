import key from 'keymaster'

// counter model
function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default {
  namespace: 'counter',
  // initial state
  state: {
    count: 0
  },
  reducers: {
    add(state, payload) {
      return {
        ...state,
        count: state.count + 1
      }
    },
    reduce(state, payload) {
      return {
        ...state,
        count: state.count - 1
      }
    }
  },
  effects: {
    *add(action, { call, put }) {
      yield call(delay, 1000)
      yield put({ type: 'reduce' })
    }
  },
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({ type: 'add' }) })
    }
  }
}