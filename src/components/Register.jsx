import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Background from './commons/Background/Background'
import Input from './commons/Input/Input'

import './Main.css'


export default function Register() {

  const [emailError, setEmailError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const expressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //
    phoneNumber: /^\d{10,14}$/,
    password: /^.{8,99}$/
  }

  const handleChange = (name, value) => {
    switch (name) {
      case "email":
        if (expressions.email.test(value)) {
          setEmailError(false)
        } else {
          setEmailError(true)
        }
        break;

      case "firstName":
        if (expressions.name.test(value)) {
          setFirstNameError(false)
        } else {
          setFirstNameError(true)
        }
        break;

      case "lastName":
        if (expressions.name.test(value)) {
          setLastNameError(false)
        } else {
          setLastNameError(true)
        }
        break;

      case "phoneNumber":
        if (expressions.phoneNumber.test(value)) {
          setPhoneNumberError(false)
        } else {
          setPhoneNumberError(true)
        }
        break;

      case "password":
        if (expressions.password.test(value)) {
          setPasswordError(false)
        } else {
          setPasswordError(true)
        }
        break;
    }
  };



  return (
    <>
      <Background />
      <div className='content'>
        <div className='box'>
          <div className='headerBox'>Create your free account</div>
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
                  handleChange={handleChange}
                  param={emailError}
                />
                <p className={emailError ? 'errorMessage' : 'hiddenMessage'}>
                  Invalid email
                </p>
              </div>
            </div>
            <div className='formGroup'  >
              <label htmlFor='firstName'> First name </label>
              <div>
                <Input
                  attribute={{
                    id: 'firstName',
                    name: 'firstName',
                    type: 'text',
                  }}
                  handleChange={handleChange}
                  param={firstNameError}
                />
                <p className={firstNameError ? 'errorMessage' : 'hiddenMessage'}>
                  Only letters and spaces, accents are allowed.
                </p>
              </div>
            </div>
            <div className='formGroup'  >
              <label htmlFor='lastName'> Last name </label>
              <div>
                <Input
                  attribute={{
                    id: 'lastName',
                    name: 'lastName',
                    type: 'text',
                  }}
                  handleChange={handleChange}
                  param={lastNameError}
                />
                <p className={lastNameError ? 'errorMessage' : 'hiddenMessage'}>
                  Only letters and spaces, accents are allowed.
                </p>
              </div>
            </div>
            <div className='formGroup'  >
              <label htmlFor='phoneNumber'> Phone number </label>
              <div>
                <Input
                  attribute={{
                    id: 'phoneNumber',
                    name: 'phoneNumber',
                    type: 'tel',
                  }}
                  handleChange={handleChange}
                  param={phoneNumberError}
                />
                <p className={phoneNumberError ? 'errorMessage' : 'hiddenMessage'}>
                  Invalid phone number
                </p>
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
                  handleChange={handleChange}
                  param={passwordError}
                />
                <p className={passwordError ? 'errorMessage' : 'hiddenMessage'}>
                  password too short
                </p>
              </div>
            </div>
            <button type="submit" >
              Create account
            </button>
          </form>

          <div className='footerBox'>
            <p>Already have an account? <Link to='/'>Sign in</Link></p>
          </div>
        </div>
      </div>
    </>
  )
};
