import React from 'react';



const News = (props) => {
    return <div>

        <div className="card">
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href={props.urls}  className="btn btn-outline-dark">more</a>
  </div>
</div>
</div>

}


export default News;