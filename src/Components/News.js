import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
static defaultProps = {
  country:'in',
  pageSize:8,
  category:'general'
}
static propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}
    
constructor(){
    super();
    console.log("Hello I am a Constructor from News Component");
    this.state = {
        articles :[],
        loading:false,
        page:1
    }
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19bccaa0c22347ba9ce63a239d359ce5&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles,total:parseData.totalResults,loading:false});
}  
handleNextClick = async ()=>{
 
  if(Math.ceil(this.state.total/this.props.pageSize)>=this.state.page+1){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19bccaa0c22347ba9ce63a239d359ce5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles,page:this.state.page+1,loading:false}); 
    console.log("next click")

  }

}
handlePrevClick = async ()=>{
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19bccaa0c22347ba9ce63a239d359ce5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parseData = await data.json();
  this.setState({articles:parseData.articles,page:this.state.page-1,loading:false}); 
}       
  render() {
    return (
      <div className='container my-3'>
      <h2 className='text-center'>NewsMonkey  - Top Headlines</h2>
      {this.state.loading&&<Spinner/>}
      <div className='row'>
      {!this.state.loading&&this.state.articles.map((element)=>{
           return <div className='col-md-4 my-3' key={element.url}>

             <NewsItem title={element.title} imageUrl={element.urlToImage} description={element.description} url = {element.url} author={element.author} date = {element.publishedAt}></NewsItem>
             </div>
      })
         
      }  
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} rel='noreferrer' type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Prev</button>
      <button disabled={Math.ceil(this.state.total/this.props.pageSize)<this.state.page+1} rel='noreferrer' type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
