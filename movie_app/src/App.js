import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  
  state = {
    count : 0
  }

  plus = () => { this.setState( current => ({ count: current.count+1 }) ) }
  minus = () => { this.setState({count: --this.state.count }) }

  render() {
    return (
      <div>
        <h1> the numer is : {this.state.count}</h1>
        <button onClick={this.plus} >plus</button>
        <button onClick={this.minus} >minus</button>
      </div>
    )
  }
}

export default App;
