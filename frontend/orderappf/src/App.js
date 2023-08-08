import './App';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import SignupPage from './screens/Signup';
function App() {
  return (
    <Router>
       <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/login" element = {<Login/>}/>
        <Route exact path = "/createuser" element = {<SignupPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
