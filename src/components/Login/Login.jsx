import React, { useState } from 'react'
import { Input } from '../Input/Input'

import './Login.css'
import imageBg from '../../assets/paisaje.jpg'
import logo from '../../assets/logo.png'


export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (name, value) => {
    if (name === 'email') {
      setEmail(value);
    } else {
      if (value.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  };

  const handleSubmit = () => {
    let account = { email, password }
    if (account) {
      console.log('acount', account)
    }
  };


  return (

    <>

      <div className='bgLogin'>
        <img src={imageBg} alt='backgraund' />

        <div className='content'>
          <div className='boxLogin'>

            <div className='divLogo'>
              <a href="/" ><img className='logo' src={logo} alt="logo" /></a>
            </div>
            <div className='title'>Log in to your account</div>

            <form >
              <div className='formGroup'  >
                <label> Email </label>
                <div>
                  <Input
                    attribute={{
                      id: 'email',
                      name: 'email',
                      type: 'email',
                    }}
                    handleChange={handleChange}

                  />
                </div>
              </div>

              <div className='formGroup' >
                <label> Password </label>
                <div>
                  <Input
                    attribute={{
                      id: 'password',
                      name: 'password',
                      type: 'password',
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                  />
                  {passwordError && <label className='labelError'>
                  password too short
                  </label>}
                </div>
              </div>

              <button type="submit" onClick={handleSubmit}>
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>


    </>

  )
};
