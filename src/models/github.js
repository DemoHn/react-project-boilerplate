const github = {
  namespace: 'github',
  state: {
    languages: ['C', 'JavaScript', 'Go', 'Python', 'Java'],
    current: 'C',
    loading: false,
    repos: [],
  },
  reducers: {
    // language tag
    addLanguageTag(state, { tag }) {
      return {
        ...state,
        languages: [...state.languages, tag],
      }
    },
    deleteLanguageTag(state, { tag }) {
      const removedTags = state.languages.filter(item => item !== tag)
      return {
        ...state,
        languages: removedTags,
      }
    },
    // change selection
    changeCurrentTag(state, { current }) {
      return {
        ...state,
        current,
      }
    },
    // load data
    startLoadingData(state) {
      return {
        ...state,
        loading: true,
      }
    },
    loadRepos(state, { repos }) {
      return {
        ...state,
        loading: false,
        repos,
      }
    },
  },
  effects: {
    /*
    * fetchData(action, { call, put }) {

    },
    */
  },
}

export default github
