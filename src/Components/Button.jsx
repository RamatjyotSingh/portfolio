import React from 'react'

const Button = ({ name, containerClass, isBeam = false, onClick }) => {
  return (
    <div className={containerClass}>
      <button 
        className={`btn ${containerClass}`} 
        onClick={onClick}
      >
        {
            isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )
        }
        {name}
      </button>
    </div>
  )
}

export default Button