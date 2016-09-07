import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrains } from '../actions/index';

class TrainsIndex extends Component {
  componentWillMount() {
    this.props.fetchTrains()
  }

  componentDidMount() {
    console.log(this.props.trains)
  }

  render() {
    return (
      <div>
        <p> Shows all the trains </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { trains: state.trains };
}

export default connect(mapStateToProps, { fetchTrains })(TrainsIndex);
