import React, { Suspense, useState, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header' // ✅ Common navigation header

// ✅ Route-based lazy loading for pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

// ✅ Lazy load heavy components (Chart & Map)
const ChartComponent = lazy(() => import('./components/ChartComponent'))
const MapComponent = lazy(() => import('./components/MapComponent'))

// ✅ Preloading optimization
const preloadChart = () => import('./components/ChartComponent')
const preloadMap = () => import('./components/MapComponent')

export default function App () {
  const [showChart, setShowChart] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [time, setTime] = useState('')

  // ✅ Library dynamic import for moment.js
  const loadMomentLibrary = async () => {
    const moment = await import('moment')
    setTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }

  return (
    <Router>
      {/* ✅ Common Header */}
      <Header />

      {/* ✅ Suspense handles lazy routes */}
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          {/* ✅ Dashboard route */}
          <Route
            path='/dashboard'
            element={
              <div style={{ padding: '20px' }}>
                <h1>📊 Dashboard</h1>
                <p>
                  Demo showing <strong>Lazy Loading</strong>,{' '}
                  <strong>Dynamic Imports</strong> and{' '}
                  <strong>Preloading Optimization</strong>.
                </p>

                <hr />

                {/* ✅ Chart Lazy Loading + Preloading */}
                <h2>📈 Chart Component</h2>
                <button
                  onMouseEnter={preloadChart} // ✅ Preload on hover
                  onClick={() => setShowChart(!showChart)}
                  style={{
                    padding: '10px 20px',
                    marginBottom: '10px',
                    cursor: 'pointer'
                  }}
                >
                  {showChart ? 'Hide Chart' : 'Show Chart'}
                </button>

                <Suspense fallback={<p>Loading Chart...</p>}>
                  {showChart && <ChartComponent />}
                </Suspense>

                <hr />

                {/* ✅ Map Lazy Loading + Preloading */}
                <h2>🗺️ Map Component</h2>
                <button
                  onMouseEnter={preloadMap} // ✅ Preload on hover
                  onClick={() => setShowMap(!showMap)}
                  style={{
                    padding: '10px 20px',
                    marginBottom: '10px',
                    cursor: 'pointer'
                  }}
                >
                  {showMap ? 'Hide Map' : 'Show Map'}
                </button>

                <Suspense fallback={<p>Loading Map...</p>}>
                  {showMap && <MapComponent />}
                </Suspense>

                <hr />

                {/* ✅ Library Dynamic Import */}
                <h2>📦 Dynamic Library Import</h2>
                <button
                  onClick={loadMomentLibrary}
                  style={{
                    padding: '10px 20px',
                    marginBottom: '10px',
                    cursor: 'pointer'
                  }}
                >
                  Show Current Time (Loads moment.js on click)
                </button>

                {time && <p>🕒 Current Time: {time}</p>}
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  )
}
