import { Button } from "@/components/ui/button"

import Sidebar from "./components/SidePanel/sidePanel"
import { Dashboard } from "./page/Dashboard/Dashboard"

function App() {

  function handleSubmit(){
    fetch('http://localhost:5050/api/posts')
    .then(res => {
      console.log(res.json())
    })
  }

  return (
    <>
    <Sidebar/>
    </>
  )
}

export default App
