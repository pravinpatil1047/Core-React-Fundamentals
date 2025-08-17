import './App.css'
// Import ReactDOM for using createPortal
import ReactDOM from 'react-dom'

// import Modal from './Modal'
import { useState } from 'react'

// Main App component
function App () {
  return (
    <>
      <h1 className='container'>Portals</h1>
      <Dashboard />
    </>
  )
}

export default App

// Dashboard component renders Profile
function Dashboard () {
  return (
    <div>
      <h1>Dashboard</h1>
      <Profile />
    </div>
  )
}

// Profile component manages modal open/close state
function Profile () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Open modal handler
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  // Close modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <h2>Profile</h2>
      {/* Button to open modal */}
      <button onClick={handleOpenModal}>View More</button>
      {/* Conditionally render Modal using portal */}
      {isModalOpen && (
        <Modal>
          <h2>More Information</h2>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </div>
  )
}

// Modal component renders its children into #modal-root using React Portal
function Modal ({ children }) {
  // Get the modal root element from the DOM
  const modalRoot = document.getElementById('modal-root')
  // Render children into modalRoot using createPortal
  return ReactDOM.createPortal(
    <div className='modal'>{children}</div>,
    modalRoot
  )
}
