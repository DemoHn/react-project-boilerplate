import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { getReposByLanguage } from '../services/github'
import BlockNote from '../components/BlockNote'
import GTag from '../components/GTag'

class GitHubAPI extends Component {
  constructor(props) {
    super(props)
    // internal state
    this.state = {}
  }

  handleTagChange = (tag) => {
    const { dispatch } = this.props
    dispatch({ type: 'github/changeCurrentTag', current: tag })
  }

  render() {
    getReposByLanguage('C++')
      .then((data) => {
        console.log(data)
      })
    const { languages, current } = this.props
    return (
      <div>
        <h1>GitHub API</h1>
        <div style={{ marginTop: 30, width: 600 }}>
          <BlockNote header="Demo" markdownMode={false}>
            <p>Languages: </p>
            <GTag
              current={current}
              tags={languages}
              onChange={this.handleTagChange}
            />
            <br />
            <p>Repositories:</p>
          </BlockNote>
        </div>
      </div>
    )
  }
}

GitHubAPI.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}
const mapStateToProps = state => state.github
export default connect(mapStateToProps)(GitHubAPI)
