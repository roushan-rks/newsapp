import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>

      <div>

          {/* <h1>This is react class based componenet</h1> */}
          <NavBar></NavBar>
          <Routes>
          <Route exact path="/" element={<News key={'general'} pageSize = {9} category={'general'} ></News>}></Route>
          <Route exact path="/business" element={<News key={'business'} pageSize = {9} category={'business'} ></News>}></Route>
          <Route exact path="/entertainment" element={<News key={'entertainment'} pageSize = {9} category={'entertainment'} ></News>}></Route>
          <Route exact path="/general" element={<News key={'general'} pageSize = {9} category={'general'} ></News>}></Route>
          <Route exact path="/health" element={<News key={'health'} pageSize = {9} category={'health'} ></News>}></Route>
          <Route exact path="/science" element={<News key={'science'} pageSize = {9} category={'science'} ></News>}></Route>
          <Route exact path="/sports" element={<News key={'sports'} pageSize = {9} category={'sports'} ></News>}></Route>
          <Route exact path="/technology" element={<News key={'technology'} pageSize = {9} category={'technology'} ></News>}></Route>
          
          </Routes>

      </div>
      </Router>
    )
  }
}

