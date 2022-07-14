import {Component} from 'react'

import {FaFingerprint} from 'react-icons/fa'

import './index.css'

class Login extends Component {
  state = {password: '', showError: false}

  changeState = event => {
    this.setState({password: event.target.value})
  }

  enterPassword = () => {
    const {password} = this.state
    if (password === 'pavan1234') {
      this.setState({showError: false})
    } else {
      this.setState({showError: true})
    }
  }

  render() {
    const {password, showError} = this.state

    return (
      <div className="log-in-container">
        <div className="login">
          <FaFingerprint className="finger" />

          <label htmlFor="password" className="label-element">
            ENTER YOUR PILEARNING
          </label>
          <input
            value={password}
            id="password"
            type="password"
            onChange={this.changeState}
            className="input-element"
          />
          <>
            {showError === true ? (
              <p className="error">*** Enter Valid Password</p>
            ) : null}
          </>
          <>
            {showError === true ? (
              <button
                className="button"
                type="button"
                onClick={this.enterPassword}
              >
                ENTER LAB
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={this.enterPassword}
              >
                ENTER LAB
              </button>
            )}
          </>
        </div>
      </div>
    )
  }
}

export default Login
