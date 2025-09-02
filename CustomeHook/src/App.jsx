import React, { useState } from 'react'
import './App.css'
import useWindowSize from './useWindowSize/useWindowSize'
import useFetch from './useFetch/useFetch'
import useDebounce from './useDebounce/useDebounce'
import useLocalStorage from './useLocalStorage/useLocalStorage'

function App () {
  const windowSize = useWindowSize()

  const { content, data } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500) // 500ms delay

  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <>
      <div>
        Window Width: {windowSize.width},<br></br>
        Window Height: {windowSize.height}
      </div>
      <div>
        {content && Array.isArray(data) ? (
          <ul>
            {data.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>

      <div>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <p>Search Term: {searchTerm}</p>
        <p>Debounced Search Term: {debouncedSearchTerm}</p>
      </div>

      <div>
        <h2>Custom Hook: useLocalStorage</h2>
        <p>Implementation of useLocalStorage hook is in the code.</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Current Theme: {theme} (Click to toggle)
        </button>
      </div>
    </>
  )
}

export default App
