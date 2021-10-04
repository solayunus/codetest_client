import './App.css';

// import ttech from './image/ttech.png';

import React, { Component } from 'react'


export class App extends Component {

  constructor() {
    super();

    this.state = {
      textData:[]
    };
}
  componentDidMount() {

    fetch('http://localhost:5000/api/get').then(respone =>
      respone.json())
      .then((data => this.setState({ textData: data })))
  }


  render() {


    return (
      <div className='App-header'>
        {this.state.textData.map(text => (
          <div>
            <p key={text.id}> {text.text} </p>
            <img
              alt='Just'
              src={require(`./image/${text.image}`).default}
              style={{ width: `80px` }}
            ></img>
          </div>
        ))}
      </div>
    );
  }
}

export default App


