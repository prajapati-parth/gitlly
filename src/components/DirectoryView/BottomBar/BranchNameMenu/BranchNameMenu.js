import React from 'react'
import {Check, Cloud, Monitor} from 'react-feather'

import './BranchNameMenu.less'

const BranchNameMenu = (props) => {
  let { branchList, selectedBranch, checkoutBranch } = props
  return (
    <div className="branchNameOptions">
      <div className="localBranches">
        <div className='branchNameSection'>
          <Monitor size={18} />&nbsp;&nbsp;<span>Local</span>
        </div>
        {
          branchList.local.map((item, index) => {
            let selectedClass = item === selectedBranch ? 'selected' : ''
            return (
              <div className={`branchNameItem ${selectedClass}`} key={index} onClick={() => checkoutBranch(item)}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
      <div className="remoteBranches">
        <div className='branchNameSection'>
          <Cloud size={18} />&nbsp;&nbsp;<span>Remote</span>
        </div>
        {
          branchList.remote.map((item, index) => {
            return (
              <div className='branchNameItem' key={index} onClick={() => checkoutBranch(item)}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BranchNameMenu