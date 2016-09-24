import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { selectColor } from '../helpers';

export default class Train extends Component {

  render() {
    const thisTrain = this.props.thisTrain;
    return (
    <div>
      <div className="trainname" key={thisTrain.name} style={selectColor(thisTrain.name)}>
        <Link to={thisTrain.name}>
        <div className="letter" id={thisTrain.name.toLowerCase()}> {thisTrain.name} </div>
        <div className="status"> {thisTrain.status.replace("<br>", "\n")} </div>
        </Link>
      </div>
      <div className="long_status">{ thisTrain.long_status }</div>
    </div>
    );
  }
}
