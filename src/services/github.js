module.exports = {
  getReposByLanguage(lang) {
    return fetch(`https://api.github.com/search/repositories?sort=stars&q=language:${lang}`)
      .then(resp => resp.json())
  },
}
