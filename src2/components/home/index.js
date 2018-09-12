import React from 'react';
import { connect } from 'react-redux';

import Home from './home';
import { selectCounter } from '../../redux/selectors';
import { add } from '../../redux/actions';

class HomeContainer extends React.Component {
  render() {
    return <Home counter={this.props.counter} add={this.props.add}/>
  }
}

const mapStateToProps = (state) => ({
  counter: selectCounter(state)
});

const mapDispatch = {
  add
};

export default connect(mapStateToProps, mapDispatch)(HomeContainer)