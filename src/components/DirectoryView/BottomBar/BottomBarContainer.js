import React, {Component} from 'react'
import {MoreVertical, Check} from 'react-feather'
import TetherComponent from 'react-tether'
import {connect} from 'react-redux'

import BranchNameMenu from './BranchNameMenu'
import './BottomBarContainer.less'

import * as DirectoryViewActions from '../../../store/actions/directory-view'
import * as DirectoryViewSelectors from '../../../store/reducers/directory-view'

class BottomBarContainer extends Component {
  constructor() {
    super()

    this.state = {
      isMenuOpen: false
    }

    this.handleBranchNameClick = this._handleBranchNameClick.bind(this)
    this.checkoutBranch = this._handleCheckoutBranch.bind(this)
  }

  render() {
    return (
      <div className="bottomBarContainer">
      <TetherComponent
        attachment='bottom left'
        targetAttachment='top left'
        offset='10px -5px'>
        {
          <span className="branchName" onClick={this.handleBranchNameClick} onBlur={() => console.log('blured')}>
            <MoreVertical size={14} />{this.props.branchName}
          </span>
        }
        {
          this.state.isMenuOpen &&
            <BranchNameMenu
              branchList={this.props.branchList}
              selectedBranch={this.props.branchName}
              checkoutBranch={this.checkoutBranch} />
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

  _handleCheckoutBranch(newBranchName) {
    this.props.dispatch(
      DirectoryViewActions.checkoutBranch(newBranchName, this.props.repoDir)
    )
  }
}

function mapStateToProps(state) {
  return {
    branchName: DirectoryViewSelectors.getBranchName(state),
    branchList: DirectoryViewSelectors.getBranchList(state),
    repoDir: DirectoryViewSelectors.getUnicornDirectory(state)
  }
}

export default connect(mapStateToProps)(BottomBarContainer)