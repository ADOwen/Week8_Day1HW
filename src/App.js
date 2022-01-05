import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import About from './views/About';
import Contact from './views/Contact'
import News from './views/News'
import Home from './views/Home'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        name: "Allan",
        email: 'Yuuup@wassup.com',
        talents : 'Rocks, Paper, Scissors',
    }
}

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Welcome to my React App</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact email ={this.state.email}/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </div>
    )
  }
}

