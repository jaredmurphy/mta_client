import React, { Component } from 'react';
import { fetchSingleTrain } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Train from './train';

class TrainsShow extends Component {
  componentWillMount() {
    this.props.fetchSingleTrain(this.props.params.name);
  }

  render() {
    if (!this.props.train){
      return <div>Loading...</div>;
    }
    return (
      < Train thisTrain={this.props.train} />
    );
  }
}

function mapStateToProps(state){
  return { train: state.trains.currentTrain };
}

export default connect(mapStateToProps, { fetchSingleTrain })(TrainsShow);
