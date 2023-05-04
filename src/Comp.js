import React from 'react';
import News from './News';
// import Spinner from './Spinner';

class Comp extends React.Component {
    static defaultProps={
        catagory:'general'
     }
constructor(props) {
    super(props);

    this.state = {
        articles:[],
        page:1

    };

    
}
  async componentDidMount(){
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=429fb49d2b394f31bae9367a744852f0&page=1&pageSize=18`;
    let data=await fetch(url);
    let pasdata=await data.json();
    console.log(pasdata);
    this.setState({articles:pasdata.articles})


  }
  handenext= async()=>{
    this.setState({loading:true})
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=429fb49d2b394f31bae9367a744852f0&page=${this.state.page + 1}&pageSize=18`;
    let data=await fetch(url);
    let pasdata=await data.json()
    console.log(pasdata);
    this.setState({articles:pasdata.articles,
        page:this.state.page+1,
        loading:false
    
    })

}
handepre= async()=>{
    this.setState({loading:true})
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=429fb49d2b394f31bae9367a744852f0&page=${this.state.page - 1}&pageSize=18`;
    let data=await fetch(url);
    let pasdata=await data.json()
    console.log(pasdata);
    this.setState({articles:pasdata.articles,
        page:this.state.page-1,
        loading:false
    
    })

}



    render() {
        return <div className='carbback'>
            
        <div  className=' container main my-3'>
            
            <div className='row'>
            <h2 className='today'>Today's headline's...</h2>
                {/* {this.state.loading && <Spinner/>} */}
                {this.state.articles.map((element)=>{
                    return <div className='col-lg-4' key={element.url}>
                        <News image={element.urlToImage} title={element.title} text={element.description} urls={element.url}/>

                    </div>
                })}

            </div>
            <div className='container d-flex justify-content-between my-3'>
            <button disabled={this.state.page<=1} onClick={this.handepre} className='btn btn-lg btn-success'>Previous</button>
            <button disabled={this.state.page>=4} onClick={this.handenext} className='btn btn-lg btn-success'>Next...</button>
            </div>
        </div>
        </div>;
    }
}



export default Comp;