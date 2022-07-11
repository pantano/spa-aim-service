import React from 'react'
import './Input.css'

export function Input({attribute, handleChange, param}) {
  return (
    <div>
        <input
        id={attribute.id}
        name={attribute.name}
        type={attribute.type}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={param ? 'errorInput' : 'regularInput'}
        />
    </div>
  )
};
