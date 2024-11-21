import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import MyNavbar from "./components/MyNavbar";

function App() {

  return (
    <>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user" element={<Users />} />
      <Route path='/user/:user_id' element={<UserDetail />} />
    </Routes>
    </>
  )
}

export default App
