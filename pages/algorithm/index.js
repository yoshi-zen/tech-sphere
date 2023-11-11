import GraphNode from '@/components/graph-node'
import { useState } from 'react'

export default function Algorithm() {
  const [nums, setNums] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const number = e.target[0].value
    setNums([...nums, number])
  }

  return (
    <div style={{ height: '500px' }}>
      <h1>Algorithm</h1>
      {nums.map((num) => (
        <GraphNode key={num} number={num} />
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Click me</button>
      </form>
    </div>
  )
}
