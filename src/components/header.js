import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
          <h1>
            < Link to="/" >MTA STATUS</ Link >
          </h1>
          <h2>Subway, at a glance.</h2>
      </div>
    );
  }
}
