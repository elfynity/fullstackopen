import { useState } from 'react'


  const Button = ({name, onClick}) => 
    <button onClick={onClick}>{name}</button>






const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral+ 1)
    
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h3>give feedback</h3>

      <Button onClick={increaseGood} name="good" />
      <Button onClick={increaseNeutral} name="neutral" />
      <Button onClick={increaseBad} name="bad" />
 

      <h3>statistics</h3>

      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>

    </div>
  )
}

export default App