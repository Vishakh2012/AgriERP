import { Button } from "@/components/ui/button"
import './App.css'

function App() {

  function handleSubmit(){
    fetch('http://localhost:5050/api/posts')
    .then(res => {
      console.log(res.json())
    })
  }

  return (
    <>
      <Button onClick={handleSubmit}>Fetch</Button>
    </>
  )
}

export default App
