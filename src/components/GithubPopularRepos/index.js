import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    isLoading: false,
    repositoryList: [],
  }

  componentDidMount() {
    this.getRepositoryList()
  }

  getRepositoryList = async () => {
    this.setState({isLoading: true})
    const {activeTabId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeTabId}`,
    )
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachRepo => ({
        name: eachRepo.name,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        forksCount: eachRepo.forks_count,
        startsCount: eachRepo.stars_count,
        avatarUrl: eachRepo.avatar_url,
      }))
      this.setState({repositoryList: updatedData, isLoading: false})
    } else {
      console.log('fetch failed')
    }
  }

  updateActiveTabId = id => {
    this.setState({activeTabId: id}, this.getRepositoryList)
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderRepositoriesList = () => {
    const {repositoryList} = this.state
    return (
      <ul className="repositories-container">
        {repositoryList.map(eachRepository => (
          <RepositoryItem
            repositoryDetails={eachRepository}
            key={eachRepository.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, activeTabId} = this.state
    return (
      <div className="background-container">
        <h1 className="heading">Popular</h1>
        <ul className="tabs-list">
          {languageFiltersData.map(eachTab => (
            <LanguageFilterItem
              tabDetails={eachTab}
              key={eachTab.id}
              updateActiveTabId={this.updateActiveTabId}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderRepositoriesList()}
      </div>
    )
  }
}

export default GithubPopularRepos
