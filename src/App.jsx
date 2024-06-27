import React, { useState } from 'react'
import './App.css'

function DynamicList() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, 'New Item'])
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default DynamicList