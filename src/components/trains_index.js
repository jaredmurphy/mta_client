import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchTrains } from '../actions/index';
import { selectColor } from '../helpers';

class TrainsIndex extends Component {
  componentWillMount() {
    this.props.fetchTrains();
  }



  renderTrains() {
    console.log("trains", this.props.lines)
    if (this.props.lines){
      console.log("props.train not null", this.props.lines)
      return this.props.lines.map((line, i) => {
        { if (line.name === "A" || line.name === "G") { <br className="for_desktop" /> } }
        return (
          <div className="trainname" key={line.name} style={selectColor(line.name)}>
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
  return { lines: state.trains.all };
}

export default connect(mapStateToProps, { fetchTrains })(TrainsIndex);
