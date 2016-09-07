import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBg } from '../actions/index';
import Header from './header';

class App extends Component {

  // need to download image from axios request
  // componentWillMount() {
  //   this.props.fetchBg()
  // }
  //
  // componentDidMount() {
  //   console.log(this.props.bgImage)
  // }

  render() {
    return (
      <div>
        < Header />
        <div className="container">
          { this.props.children }
        </div>
        <div className="bg" style={ { backgroundImage: "url(https://media.timeout.com/images/102920649/image.jpg)" } }></div>
        <div className="screen"></div>
    </div>
    );
  }
}

// function mapStateToProps(state){
//   return { bgImage: state.bgImage };
// }
//
// export default connect(mapStateToProps, { fetchBg })(App);

export default App;
