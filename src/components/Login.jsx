import React from 'react'
import { Link } from 'react-router-dom'
import Input from './commons/Input/Input'
import Background from './commons/Background/Background'
import logo from '../assets/logo.png'

import './Main.css'


export default function Login() {

  return (
    <>
      <Background />
      <div className='content'>
        <div className='box'>
          <div className='divLogo'>
            <Link to="/" ><img className='logo' src={logo} alt="logo" /></Link>
          </div>
          <div className='headerBox'>Log in to your account</div>
          <form >
            <div className='formGroup'  >
              <label htmlFor='email'> Email </label>
              <div>
                <Input
                  attribute={{
                    id: 'email',
                    name: 'email',
                    type: 'email',
                  }}
                />
              </div>
            </div>
            <div className='formGroup' >
              <label htmlFor='password'> Password </label>
              <div>
                <Input
                  attribute={{
                    id: 'password',
                    name: 'password',
                    type: 'password',
                  }}
                />
              </div>
            </div>
            <div className='formGroup'>
              <button type="submit" >
                Log in
              </button>
            </div>
          </form>
          <div className='footerBox'>
            <p >Don't have an account? <Link to='/signUp'> Sign up </Link></p>
          </div>
        </div>
      </div>
    </>
  )
};
