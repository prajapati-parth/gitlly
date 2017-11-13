import React, {Component} from 'react'
import {MoreVertical, Check} from 'react-feather'
import TetherComponent from 'react-tether'
import {connect} from 'react-redux'

import './bottom-bar-container.less'

import * as DirectoryViewSelectors from '../../store/reducers/directory-view'

class BottomBarContainer extends Component {
  constructor() {
    super()

    this.state = {
      isMenuOpen: false
    }

    this.handleBranchNameClick = this._handleBranchNameClick.bind(this)
  }

  render() {
    return (
      <div className="bottomBarContainer">
      <TetherComponent
        attachment='bottom left'
        targetAttachment='top left'
        offset='8px 0'>
        {
          <span className="branchName" onClick={this.handleBranchNameClick} onBlur={() => console.log('blured')}>
            <MoreVertical size={14} />{this.props.branchName}
          </span>
        }
        {
          this.state.isMenuOpen && <div className='branchNameOptions'>
            {
              this.props.branchList.map((item, index) => {
                let selectedClass = item === this.props.branchName ? 'selected' : ''
                return (
                  <div className={`branchNameItem ${selectedClass}`} key={index}>
                    <span>{item}</span>
                    { 
                      item === this.props.branchName && <Check className='branchSelected' size={18} />
                    }
                  </div>
                )
              })
            }
          </div>    
        }
      </TetherComponent>
      </div>
    )
  }

  _handleBranchNameClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }
}

function mapStateToProps(state) {
  return {
    branchName: DirectoryViewSelectors.getBranchName(state),
    branchList: DirectoryViewSelectors.getBranchList(state)
  }
}

export default connect(mapStateToProps)(BottomBarContainer)