import React from 'react';
import { connect } from 'react-redux';

import Home from './home';
import { openLocalDirectory } from '../../redux/actions';

class HomeContainer extends React.Component {
  render() {
    return (
      <Home openLocalDirectory={this.props.openLocalDirectory} />
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatch = {
  openLocalDirectory
};

export default connect(mapStateToProps, mapDispatch)(HomeContainer)