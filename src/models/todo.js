const todo = {
  namespace: 'todo',
  state: {
    items: []
  },
  reducers: {
    addItem(state, { item }) {
      return {
        ...state,
        items: state.items.concat(item),
      }
    }
  }
}

export default todo