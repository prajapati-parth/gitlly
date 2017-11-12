import React, {Component} from 'react'
import {MoreVertical} from 'react-feather'
import TetherComponent from 'react-tether'

import './bottom-bar-container.less'

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
            <p>Developement</p>
            <p>unit-tests</p>
            <p>style-guidist</p>
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

export default BottomBarContainer