import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
          <Link className="navbar-brand text-white text-lg brand-text" to="/">
              MovieSeriesInfo
            </Link>
          </div>
          <img
                src="https://media.giphy.com/media/NXp9HM6YeuS0U/giphy.gif"
                style={{ width: '20%', margin: 'auto', display: 'block' }}
                className="rounded mx-auto d-block"
            />
            <img
                src="https://i.makeagif.com/media/10-04-2017/bvg1E7.gif"
                style={{ width: '25%', margin: 'auto', display: 'block' }}
                className="rounded mx-auto d-block"
            />
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default NavBar
