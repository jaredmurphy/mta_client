import React, { Component } from 'react';
import { fetchSingleTrain } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class TrainsShow extends Component {
  componentWillMount() {
    this.props.fetchSingleTrain(this.props.params.name);
  }


  render() {

    if (!this.props.train){
      return <div>Loading...</div>;
    }

    return (
      <div className="trainname">
        <Link to={this.props.train.name}>
          <div className="letter" id={this.props.train.name.toLowerCase()} >
              {this.props.train.name}
          </div>
          <div className="status"> {this.props.train.status.replace("<br>", "\n")} </div>
        </Link>
    </div>
    );
  }
}

function mapStateToProps(state){
  return { train: state.trains.currentTrain };
}

export default connect(mapStateToProps, { fetchSingleTrain })(TrainsShow);
