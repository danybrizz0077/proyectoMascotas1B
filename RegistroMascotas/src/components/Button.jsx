import React from 'react';
import './Button.css';

export default function Button({ children, onClick, type = 'button', className = '', style = {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}