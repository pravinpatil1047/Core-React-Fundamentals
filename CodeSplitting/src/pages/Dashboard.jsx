import React, { Suspense } from 'react'

export default function Dashboard ({
  showChart,
  setShowChart,
  showMap,
  setShowMap,
  preloadChart,
  preloadMap,
  //   ChartComponent,
  //   MapComponent,
  loadMomentLibrary,
  time
}) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 Dashboard</h1>
      <p>
        Demo for <strong>Lazy Loading</strong>, <strong>Dynamic Imports</strong>
        , and <strong>Preloading</strong>.
      </p>

      <hr />

      {/* ✅ Chart Lazy Loading + Preloading */}
      <h2>📈 Chart Component</h2>
      <button
        onMouseEnter={preloadChart}
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
        onMouseEnter={preloadMap}
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
  )
}
