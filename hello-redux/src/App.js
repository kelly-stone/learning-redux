import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './action'
import User from './components/User'

// import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    // console.log("this.props",this.props)
    // const { dispatch } = this.props; // means const dispatch = this.props.dispatch
    // console.log("this.props",this.props)
    const { increment, decrement } = this.props
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={ () => {increment()}} className="btn btn-primary mr-2">Increase</button> 
          <button onClick={ () => {decrement()}} className="btn btn-danger my-2">Decrease</button>
        </p>   
        <User />
      </div>
    );
  }
}


const mapStateToProps = (state) =>{ //因为传递述职都是用props
  // console.log("state", state)
  return {
    counter: state.counter //counter is a key
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   // return {
//   //   increment: bindActionCreators(increment, dispatch)
//   // }
//   return bindActionCreators({ increment }, dispatch)
// }


App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired

}
export default connect(mapStateToProps, { increment, decrement })(App);

