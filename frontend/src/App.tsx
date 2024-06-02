import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Layouts from "./layouts/Layouts"
import Register from "./pages/Register"
import Signin from "./pages/Sign-in"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts><p>Amaan Bhaiya</p></Layouts>}></Route>
        <Route path="/search" element={<Layouts><p>OK SEarching</p></Layouts>}></Route>
        <Route path="/register" element={<Layouts><Register/></Layouts>}></Route>
        <Route path="/sign-in" element={<Layouts><Signin/></Layouts>}></Route>
        <Route path="*" element={<Layouts><p>Somethin wrong purpose bad Request </p></Layouts>}></Route>
      </Routes>
    </Router>
  )
}

export default App