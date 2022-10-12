import { Route, Routes } from "react-router-dom";
import { StudentForm } from "./components/addStudent/StudentForm";
import { LoginForm } from "./components/login/LoginForm";
import { Navbar } from "./components/Navbar/Navbar";
import { SignupForm } from "./components/signup/SignupForm";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={ <StudentForm/>}/>
        <Route path="/signup" element={ <SignupForm/>}/>
        <Route path="/signin" element={ <LoginForm/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
