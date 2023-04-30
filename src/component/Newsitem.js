import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    //Array Destructuring
    let {title,description,imageurl,newurl} = this.props;
    return (
      <div>
       <div className="card" style={{width: "22rem"}}>
  <img src={imageurl} className="card-img-top" alt="Error"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}.</p>
    <a href={newurl} target="blank" className="btn btn-sm btn-primary">Read here</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
