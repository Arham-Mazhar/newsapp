import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Nacbar';
// import Newsitem from './component/Newsitem';
import News from './component/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        {/* <Newsitem/> */}
      </div>
    )
  }
}

