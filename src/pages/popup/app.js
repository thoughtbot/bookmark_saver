import React from 'react'
import {connect} from 'react-redux'
import { Dropdown, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import * as listActions from '../../shared/actions/listActions'

import { submitURL } from '../../modules/ajax'

@connect((store) => {
  return {
    lists: store.lists,
  }
})
export default class App extends React.Component {
  componentWillMount() {
    const { lists, dispatch } = this.props

    if (lists.records.size === undefined) {
      dispatch(listActions.requestRefresh())
    }
  }

  optionWithDefaultValue(options) {
    const { lists } = this.props

    for (const option of options) {
      if (option.value === lists.activeId) {
        return option.value
      }
    }

    return options[0]
  }

  async submitCurrentURL() {
    const { dispatch, lists } = this.props
    const activeListId = lists.activeId

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (arrayOfTabs) => {
      const activeTab = arrayOfTabs[0]
      const url = activeTab.url
      const title = activeTab.title

      dispatch(
        listActions.requestURLSubmit(activeListId, url, title)
      )
      window.close()
    })
  }

  listChanged(data) {
    const { dispatch } = this.props

    dispatch(
      listActions.setActive(data.value)
    )
  }

  render() {
    const { lists } = this.props

    const options = lists.records.map( (record) => {
      return {
        key: record.id,
        text: record.name,
        value: record.id,
        icon: record.icon,
      }
    })

    return (
      <div className="ui grid divided container">
        <div className="ui one wide column">
          <br/>
          <Dropdown
            onChange={(_evt, data) => this.listChanged(data)}
            selection
            placeholder='Select List'
            options={options}
            defaultValue={this.optionWithDefaultValue(options)}
          />
          <div className="ui divider"/>
          <Button primary onClick={
            () => this.submitCurrentURL()
          }>Save</Button>
        </div>
      </div>
    )
  }
}
