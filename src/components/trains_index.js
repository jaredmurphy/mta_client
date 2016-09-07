import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchTrains } from '../actions/index';

class TrainsIndex extends Component {
  componentWillMount() {
    this.props.fetchTrains();
  }

  splitStatus(status){
    let statusArr = [];
    status.split("<br>").forEach(item => {
      statusArr.push(item)
    });
    return statusArr;
  }
  // <div className="status"> { line.status.split("<br>")[0] } </div>
  // <div className="status"> { line.status.split("<br>")[0] } </div>

  renderTrains() {
    console.log("trains", this.props.lines)
    if (this.props.lines.all){
      console.log("props.train not null", this.props.lines)
      return this.props.lines.all.map((line, i) => {
        return (
          <div className="trainname" key={line.name}>
            < Link to={line.name} >
            <div className="letter" id={ line.name.toLowerCase() }> { line.name } </div>
            <div className="status"> { line.status.replace("<br>", "\n") } </div>

            </ Link >
          </div>
        );
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        { this.renderTrains() }
      </div>
    );
  }
}

function mapStateToProps(state){
  return { lines: state.trains };
}

export default connect(mapStateToProps, { fetchTrains })(TrainsIndex);
