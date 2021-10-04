import './App.css';

// import ttech from './image/ttech.png';

import React, { Component } from 'react'


export class App extends Component {
  constructor() {
    super();

    this.state = {
      textData: [],
    };
  }

  //https://codetestbackendapi.herokuapp.com/api/get
  //http://localhost:5000/api/get

  componentDidMount() {
    fetch('https://codetestbackendapi.herokuapp.com/api/get')
      .then(respone => respone.json())
      .then(data => this.setState({ textData: data }));
  }

  render() {
    return (
      <>
      <div className='App-header'>
        {this.state.textData.map(text => (
          <div className="div-box">
            <p key={text.id}> {text.text} </p>
            <img className="img-show"
              alt='Just'
              src={require(`./image/${text.image}`).default}
              style={{ width: `80px` }}
            ></img>
          </div>
        ))}
        </div>

        </>
    );
  }
}

export default App


