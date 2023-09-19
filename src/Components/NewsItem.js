import React from 'react'

const NewsItem =(props)=>{
  
    let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={
            {
          display:'flex',
         justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }
          }>
        <span className="badge rounded-pill bg-danger" style={{ left: '90%',zIndex:1}}>
    {source}
  </span>
  </div>
  <img src={imgUrl?imgUrl:"https://images.moneycontrol.com/static-mcnews/2023/04/nifty_market-Sensex-770x433.jpg"}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noreferrer"> Read More</a>
  </div>
</div>
      </div>
    )

}

export default NewsItem