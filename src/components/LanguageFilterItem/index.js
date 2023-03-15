// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {tabDetails, updateActiveTabId, activeTabId} = props
  const {id, language} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(id)
  }

  const tabClassName = activeTabId === id ? 'active-tab' : ''
  return (
    <li className="tabs-list-item-container">
      <button
        className={`tab-btn ${tabClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
