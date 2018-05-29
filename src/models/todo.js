const todo = {
  namespace: 'todo',
  state: {
    ordered: false,
    items: {},
  },
  reducers: {
    addItem(state, { item }) {
      return {
        ...state,
        items: {
          ...state.items,
          [item.key]: item.value,
        },
      }
    },
    toggleOrder(state) {
      return {
        ...state,
        ordered: !state.ordered,
      }
    },
  },
}

export default todo
