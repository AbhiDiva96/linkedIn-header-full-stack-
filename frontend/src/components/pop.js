import React from 'react'

function pop() {
  return (
    <div>
        
      <h3>pop command</h3>
        
          <form onSubmit={handleCallCommand}>
        <input
          type="text"
          placeholder="Enter Command Name"
          value={name}
          onChange={handleCommandChange}
          
          />
        </form>
          
        <button onClick={handleCallCommand}>pop</button>
        <br />
    </div>
  )
}

export default pop
