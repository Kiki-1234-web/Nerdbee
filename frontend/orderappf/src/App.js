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
import { CartProvider } from './components/ContextReducer';
// import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <CartProvider>
      <Router>
       <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/login" element = {<Login/>}/>
        <Route exact path = "/createuser" element = {<SignupPage/>}/>
        {/* <Route exact path = "/cart" element = {<Cart/>}/> */}
        {/* Modal page is added */}
        <Route exact path = "/myOrder" element = {<MyOrder/>}/>
      </Routes>
    </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
