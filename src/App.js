import React from "react";
import './App.css';
import MyProfile from "./pages/MyProfile";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyAssignment from "./components/MyAssignment.js";
import ChatWithMentor from "./components/ChatWithMentor.js";
import NavigationPanel from "./components/NavigationPanel.js";
import TermsConditions from "./components/Terms_Conditions.js";
import Enrollpage from "./pages/enrollpage";
function App() {
  return (
    <div className="App">
        <Router>
            <NavigationPanel/>
            <Routes>
                <Route path={"/"} index element={<MyProfile/>}/>
                <Route path={"/my-assignment"} element={<MyAssignment/>}/>
                <Route path={"/chat-with-mentor"} element={<ChatWithMentor/>}/>
                <Route path={"/terms-and-conditions"} element={<TermsConditions/>}/>
                <Route path={"/enrollpage"} element={<Enrollpage/>}/>

            </Routes>
        </Router>
    </div>
  );
}

export default App;
