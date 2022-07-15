import React from 'react'
import './Input.css'

export default function Input({ attribute, handleChange, param }) {
  return (
    <input
      id={attribute.id}
      name={attribute.name}
      type={attribute.type}
      onChange={(e) => handleChange(e.target.name, e.target.value)}
      className={param ? 'errorInput' : 'regularInput'}
    />
  )
};
