import { useState } from 'react'


  const Button = ({name, onClick}) => 
    <button onClick={onClick}>{name}</button>






const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const Average = () => ((bad * -1) + good) / total


  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral+ 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  const positiveFeedbackPercent = good / total * 100


  

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

      <p>all: {total}</p>
      <p>average: <Average /></p>
      <p>positive: {positiveFeedbackPercent} %</p>


    </div>
  )
}

export default App