const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  

  const whatAge = () => 10 + age


  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>Probable year of birth: {bornYear()}</p>
      <p>In 2036, you will be {whatAge()}</p>
      <hr />
    </div>
  )
}



const App = () => {
  const name = 'Licky'
  const age = 14

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Wendy" age={51} />
      <Hello name={name} age={age} />
      <Hello name="Leah" age={28} />
    </div>
  )
}

export default App;