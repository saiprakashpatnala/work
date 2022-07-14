import {VscThreeBars} from 'react-icons/vsc'

import {AiOutlineCloseCircle} from 'react-icons/ai'

import './index.css'

const TimeLimit = () => (
  <div className="time-limit-container">
    <AiOutlineCloseCircle className="close" />
    <VscThreeBars className="bar" />
  </div>
)

export default TimeLimit
