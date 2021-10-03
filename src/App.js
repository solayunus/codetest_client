import './App.css';

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


    return <div className="App-header" >{this.state.textData.map(text => (
      <p key={text.id}>

        {text.text}

      </p>

    ))}</div>;
  }
}

export default App


