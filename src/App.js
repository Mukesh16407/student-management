import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/login/LoginForm";
import { Navbar } from "./components/Navbar/Navbar";
import { SignupForm } from "./components/signup/SignupForm";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={ <SignupForm/>}/>
        <Route path="/signin" element={ <LoginForm/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
