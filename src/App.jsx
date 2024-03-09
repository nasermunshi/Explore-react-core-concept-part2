
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'


function App() {
  function handleClick(){
  alert('button Click')
  }

  const handleClick2 = () => {
    alert('button 2 Click')
  }

  const addToFive = (num) =>{
  alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts</h1>
     <Friends></Friends>

      <Users></Users>

      <Team></Team> 
      
     <Counter></Counter>

      {/* <button onclick=("handleClick")>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2 }>Click2</button>
      <button onClick={ () => {alert('Third Click')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
