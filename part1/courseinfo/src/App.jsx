import { useState } from 'react'



const App = () => {

  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const reset = () => setCounter(0)

  return (
    <>
    <div>{counter}</div>

    <button onClick={increaseByOne}>
      plus
    </button>

    <button onClick={reset}>
    Reset
    </button>

    </>
  )
}

export default App