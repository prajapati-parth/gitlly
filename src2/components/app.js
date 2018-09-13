import React from 'react';
import { connect } from 'react-redux';

import Home from './home';
import { selectSelectedDirectory } from '../redux/selectors';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      this.props.selectedDirectory
        ? <span>{this.props.selectedDirectory}</span>
        : <Home />
    )
  }
}

const mapStateToProps = (state) => ({
  selectedDirectory: selectSelectedDirectory(state)
});

export default connect(mapStateToProps)(App)