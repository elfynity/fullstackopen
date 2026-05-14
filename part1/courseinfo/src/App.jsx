import { useState } from 'react'


const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>



const App = () => {

  const [ counter, setCounter ] = useState(0)
   console.log('rendering with counter value', counter)

  const increaseByOne = () => setCounter(counter + 1)
  console.log('increasing, value before', counter)

  const reset = () => setCounter(0)
   console.log('resetting to zero, value before', counter)

  const descreaseByOne = () => setCounter(counter - 1)
   console.log('decreasing, value before', counter)

  return (
    <>
    <Display counter={counter} />

    <Button onClick={increaseByOne}
      text='plus'
    />

    <Button onClick={reset}
      text='reset'
    />

    <Button onClick={descreaseByOne}
      text='minus'
    />



    </>
  )
}

export default App