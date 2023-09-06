import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <>
        <div className='mx-0'>
          <div className="card">
            <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span className="badge pill bg-danger"> Source : {source} </span>
            </div>
            <img src={imageUrl ? imageUrl : "https://www.contentcreatorz.com/wp-content/uploads/2020/09/jennifer-connelly-750x500.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...<span className="badge bg-success">Verified</span> </h5>
              <p className="card-text">{description ? description : "Hi this is Jennifer Connelly"}...</p>
              <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
              <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }


export default NewsItem
