import React, { Component } from 'react';
import { fetchSingleTrain } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Train from './train';
import LongStatus from './long_status';

class TrainsShow extends Component {
  componentWillMount() {
    this.props.fetchSingleTrain(this.props.params.name);
  }

  render() {
    if (!this.props.train){
      return <div>Loading...</div>;
    }
    return (
      <div>
        < Train thisTrain={this.props.train} />
        < LongStatus thisTrain={this.props.train} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { train: state.trains.currentTrain };
}

export default connect(mapStateToProps, { fetchSingleTrain })(TrainsShow);
