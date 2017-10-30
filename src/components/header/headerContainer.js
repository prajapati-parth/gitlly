import React, {Component} from 'react'

import Header from './header'
import Git from '../../utils/nodegit'

class HeaderContainer extends Component {
  constructor() {
    super()

    this.state = {
      fileStatusList: []
    }

    this.handleDirectorySelect = this._handleDirectorySelect.bind(this)
    this.getFileStatus = this._getFileStatus.bind(this)
  }

  render() {
    return (
      <div>
        <Header
          directorySelect={this.handleDirectorySelect} />
        {
          this.state.fileStatusList.length > 0 && (
            <ul>
              {
                this.state.fileStatusList.map((item, index) => {
                  return (
                    <li key={index}>
                      <span>{item.path}</span>&nbsp;
                      <span>{item.gitStatus}</span>
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </div>
    )
  }

  _handleDirectorySelect(directoryPath) {
    Git.getStatus(directoryPath).then(status => {
      let totalFiles = status.length, fileList = []

      for (let i=0; i<totalFiles; i++) {
        let fileListObj = {
          path: status[i].path(),
          gitStatus: this.getFileStatus(status[i])
        }

        fileList.push(fileListObj)
      }

      this.setState({
        fileStatusList: fileList
      })
    })
  }

  _getFileStatus(statusObj) {
    if(statusObj.isNew()) return 'U'
    if(statusObj.isModified()) return 'M'
    if(statusObj.isTypechange()) return 'T'
    if(statusObj.isRenamed()) return 'R'
    if(statusObj.isIgnored()) return 'I'
    if(statusObj.isDeleted()) return 'D'
  }
}

export default HeaderContainer