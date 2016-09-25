import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchTrains } from '../actions/index';
import { selectColor } from '../helpers';
import Train from './train';

class TrainsIndex extends Component {
  componentWillMount() {
    this.props.fetchTrains();
  }

  renderTrains() {
    if (this.props.lines){
      return this.props.lines.map((line, i) => {
        { if (line.name === "A" || line.name === "G") { <br className="for_desktop" /> } }
        return (
          < Train thisTrain={line} key={line.name} />
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
