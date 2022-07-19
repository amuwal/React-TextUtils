import React, { useState } from 'react'

export default function About(props) {
    const [darkModeStatus, setDarkModeStatus] = useState('light');
    const [toggleDark, setDarkToLight] = useState('dark');
    const [toggleLight, setLightToDark] = useState('light');

    const handleDarkMode = event => {
        if (darkModeStatus === "light") {
            setDarkToLight("light")
            setLightToDark("dark")
            setDarkModeStatus("dark")
        }
        else if (darkModeStatus === "dark") {
            setDarkToLight("dark")
            setLightToDark("light")
            setDarkModeStatus("light")
        }
    }

  return (
<div className={`container bg-${toggleDark} py-2 my-3`}>
    <div className={`container my-2 bg-${toggleDark}`}>
      <div className={`jumbotron p-md-5 text-light rounded bg-${toggleDark} border border-${toggleLight}`}>
        <div className="col-md-6 px-0 my-3">
          <h1 className={`display-4 font-italic text-${toggleLight}`}>Title of a longer featured blog post</h1>
          <p className={`lead my-3 text-${toggleLight}`}>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p className="lead mb-0"><a href="/" className={`text-${toggleLight} font-weight-bold`}>Continue reading...</a></p>
        </div>
      </div>
    </div>
    <div className="row mb-2">
        <div className="col-md-6">
          <div className={`card flex-md-row mb-4 box-shadow h-md-250 border border-${toggleLight} `}>
            <div className={`bg-${toggleDark} card-body d-flex flex-column align-items-start`}>
              <strong className="d-inline-block mb-2 text-warning">World</strong>
              <h3 className="mb-0">
                <a className={`text-${toggleLight}`} href="/">Featured post</a>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className={`text-${toggleLight} card-text mb-auto`}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a className='text-secondary' href="/">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt=''/>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className={`bg-${toggleDark} card flex-md-row mb-4 box-shadow h-md-250 border border-${toggleLight}`}>
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-warning">Design</strong>
              <h3 className="mb-0">
                <a className={`text-${toggleLight}`} href="/">Post title</a>
              </h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className={`card-text mb-auto text-${toggleLight}`}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a className='text-secondary' href="/">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt=''/>
          </div>
        </div>
    </div>
    <button className="my-3 mx-2 btn btn-primary" onClick={handleDarkMode}>Enable {darkModeStatus} mode</button>
    </div>

    
  )
}
