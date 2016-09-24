import React, { Component } from 'react';

export default class LongStatus extends Component {
  render() {
    const thisTrain = this.props.thisTrain;
    return (
      <div className="long_status"
        dangerouslySetInnerHTML={{ __html: (thisTrain.long_status || thisTrain.status) }}  >
      </div>
    );
  }
}
