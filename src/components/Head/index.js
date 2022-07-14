import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

import {ImPower} from 'react-icons/im'

import {BsCart, BsFillBellFill, BsSearch} from 'react-icons/bs'

import {AiFillHeart} from 'react-icons/ai'

import './index.css'

const Header = () => (
  <nav className="nav-element">
    <div className="info-container">
      <div className="icon-container">
        <GiHamburgerMenu className="burger-icon" />
        <Link className="link-element" to="/home">
          <img
            src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1657434618/ed423fedb93fc54d2441176173e9301b_xyapi3.jpg"
            alt="security"
            className="security-image"
          />
        </Link>
      </div>
      <div className="list-container">
        <ul className="list-element">
          <li className="list-item">
            <Link to="/self" className="link-element">
              Self
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-element" to="/classroom">
              Classroom
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-element" to="/events">
              Events
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-element" to="/labs">
              Labs
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-element" to="/exams">
              {' '}
              Exams
            </Link>
          </li>

          <li className="list-item">
            <Link className="link-element" to="/community">
              {' '}
              Community
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="logo-container">
      <ImPower className="icon" />
      <BsCart className="icon" />
      <AiFillHeart className="icon" />
      <BsFillBellFill className="icon" />
      <BsSearch className="icon" />
    </div>
  </nav>
)

export default Header
