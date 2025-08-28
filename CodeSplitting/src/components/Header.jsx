import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header
      style={{
        backgroundColor: '#282c34',
        padding: '15px 20px',
        marginBottom: '20px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <h2 style={{ margin: 0 }}>🚀 React Code Splitting Demo</h2>
      <nav>
        <Link
          to='/'
          style={{
            color: 'white',
            marginRight: '15px',
            textDecoration: 'none'
          }}
        >
          Home
        </Link>
        <Link
          to='/about'
          style={{
            color: 'white',
            marginRight: '15px',
            textDecoration: 'none'
          }}
        >
          About
        </Link>
        <Link
          to='/contact'
          style={{
            color: 'white',
            marginRight: '15px',
            textDecoration: 'none'
          }}
        >
          Contact
        </Link>
        <Link
          to='/dashboard'
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Dashboard
        </Link>
      </nav>
    </header>
  )
}
