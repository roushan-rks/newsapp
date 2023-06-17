import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>

      <div>

          {/* <h1>This is react class based componenet</h1> */}
          <NavBar></NavBar>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key={'general'} pageSize = {9} category={'general'} ></News>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key={'business'} pageSize = {9} category={'business'} ></News>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key={'entertainment'} pageSize = {9} category={'entertainment'} ></News>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key={'general'} pageSize = {9} category={'general'} ></News>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key={'health'} pageSize = {9} category={'health'} ></News>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key={'science'} pageSize = {9} category={'science'} ></News>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key={'sports'} pageSize = {9} category={'sports'} ></News>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key={'technology'} pageSize = {9} category={'technology'} ></News>}></Route>
          
          </Routes>

      </div>
      </Router>
    )
  }
}

