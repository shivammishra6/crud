import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import CreatePage from './pages/createPage'
import UpdatePage from './pages/updatePage'
import Navbar from './components/navbar'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/update" element={<UpdatePage/>}/>
      </Routes>
    </>
  )
}

export default App
