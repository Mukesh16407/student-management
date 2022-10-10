import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { SignupForm } from "./components/signup/SignupForm";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={ <SignupForm/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
