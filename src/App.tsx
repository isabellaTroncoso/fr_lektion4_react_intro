import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './types/User'


function App() {
  const [score, setScore] = useState<number>(0)
  const [username, setUsername] = useState<string>("")
  const [isloggedin, setIsloggedin] = useState<boolean>(false)
  const [user, setUser] = useState<User>({username: "", password: ""})

  /* the WRONG way */
  function addToScore(): void{
    setScore(score + 1)
    console.log(score)
  }
  function addToScoreWithPreviousValue() {
    setScore((prev) => prev + 1 )
    console.log(score)
  }

  return (
    <>
     <div>
      <p>What is 2 + 2 = {2 + 2}</p>

      <p>Score: {score}</p> 
      <button onClick={addToScoreWithPreviousValue}>Score + 1</button>
      <div>Is {score} bigger than 4? {score > 4 ? <p>true</p> : <p>false</p>}</div>

      <div>
        <p>Is 2 bigger than 4?</p>{2 > 4 ? <p>TRUE</p> : <p>FALSE</p>} 
      </div>
      </div> 
    
  </>
  )
}

export default App
