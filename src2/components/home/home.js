import React from 'react';
import { Plus, FolderPlus, Book } from 'react-feather';

import HomeButton from './home-button';
import copy from '../../utils/copy';
import electronHelper from '../../utils/electron-helper';
import './home.scss';

export default class Home extends React.Component {

  createRepo() {
    console.log('create repo');
  }

  addLocalRepo() {
    electronHelper.openSelectDirectoryDialog(directoryPath => {
      this.props.openLocalDirectory({
        directoryPath
      });
    });
  }

  cloneRepo() {
    console.log('clone repo');
  }

  render() {
    const {
      createRepoButtonLabel,
      addLocalRepoButtonLabel,
      cloneRepoButtonLabel
    } = copy;
    const buttons = [
      {
        label: createRepoButtonLabel,
        icon: <Plus />,
        onSelect: this.createRepo
      },
      {
        label: addLocalRepoButtonLabel,
        icon: <FolderPlus />,
        onSelect: this.addLocalRepo.bind(this)
      },
      {
        label: cloneRepoButtonLabel,
        icon: <Book />,
        onSelect: this.cloneRepo
      }
    ];
  
    return (
      <div className='home-container'>
        {
          buttons.map(
            (button, idx) => <HomeButton key={idx} icon={button.icon} label={button.label} onSelect={button.onSelect} />
          )
        }
      </div>
    )
  }
}