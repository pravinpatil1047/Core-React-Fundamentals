import React, { useEffect } from 'react'

export default function MapComponent () {
  useEffect(() => {
    console.log('📍 Map component loaded!')
  }, [])

  return (
    <div
      style={{
        width: '400px',
        height: '300px',
        background: '#dff',
        marginTop: '20px'
      }}
    >
      <h3>🗺️ Map Placeholder</h3>
      <p>Imagine a map here 😎</p>
    </div>
  )
}
