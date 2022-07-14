import {MdAccessibilityNew} from 'react-icons/md'

import {RiBarChartGroupedLine} from 'react-icons/ri'

import Head from '../Head'

import TimeLimit from '../TimeLimit'

import LoginContainer from '../LoginContainer'

import './index.css'

const HomeSection = () => (
  <div>
    <Head />
    <div className="home-container">
      <div className="container-one">
        <h1 className="course">JAVA</h1>
        <p className="details-para">
          This course is powered by <span className="span">Nexxt Labs</span>
        </p>
        <ul className="list-container">
          <li className="list-item">Labs</li>
          <li className="list-item">Exercises</li>
          <li className="list-item">Do it Yourself</li>
        </ul>
        <div className="image-list">
          <MdAccessibilityNew className="img-el" />
          <ul className="data-container">
            <li>
              <h1 className="sub-heading">EXERCISES</h1>
            </li>
            <li className="description">
              <p className="number">9</p>
              <p className="data">completed out of 84</p>
            </li>
          </ul>
        </div>
        <div className="image-list">
          <RiBarChartGroupedLine className="img-el" />
          <ul className="data-container">
            <li>
              <h1 className="sub-heading">PROJECTS</h1>
            </li>
            <li className="description">
              <p className="number">2</p>
              <p className="data">completed out of 6</p>
            </li>
          </ul>
        </div>
        <div className="image-list">
          <RiBarChartGroupedLine className="img-el" />
          <ul className="data-container">
            <li>
              <h1 className="sub-heading">TIME SPENT</h1>
            </li>
            <li className="description">
              <p className="number">5</p>
              <p className="data">hours till now</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <LoginContainer />
      </div>
      <TimeLimit />
    </div>
  </div>
)

export default HomeSection
