import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(5)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function increment5() {
    setCount((prevCount) => prevCount + 1) // 5 -> 6
    setCount((prevCount) => prevCount + 1) // 6 -> 7
    setCount((prevCount) => prevCount + 1) // 7 -> 8
    setCount((prevCount) => prevCount + 1) // 8 -> 9
    setCount((prevCount) => prevCount + 1) // 9 -> 10
  }

  return (
    <div className='box'>
      <h1>Count: {count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={increment5}>INCREMENT 5</button>
    </div>
  );
}

export default Count;