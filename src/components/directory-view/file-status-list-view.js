import React from 'react'

const FileStatusListView = (props) => {
  return (
    <ul>
      {
        props.fileList.map((item, index) => {
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

export default FileStatusListView