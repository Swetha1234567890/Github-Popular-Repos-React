// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    avatarUrl,
    name,
    issuesCount,
    forksCount,
    startsCount,
  } = repositoryDetails

  return (
    <li className="list-item-container">
      <img src={avatarUrl} className="avatar-img" alt={name} />
      <h1 className="name">{name}</h1>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="stars-img"
          alt="stars"
        />
        <p className="stars-count">{startsCount}</p>
      </div>
      <div className="forks-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="forks-img"
          alt="forks"
        />
        <p className="forks-count">{forksCount}</p>
      </div>
      <div className="issues-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="issues-img"
          alt="open issues"
        />
        <p className="issues-count">{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
