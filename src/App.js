import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Header from './Header';
import Login from './Login';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}

// function Header(props) {
//   const clearCart = () => {
//     sessionStorage.clear();
//   }
//   return (
//       <div class="d-flex bd-highlight mb-3 container">
//         <div class="p-2 bd-highlight p-3"><Link to="/">
//           Home
//           <i class="fa fa-th-list pl-3" aria-hidden="true"></i>
//         </Link></div>
//         <div class="p-2 bd-highlight p-3"><Link to="/cart">
//           Cart
//           <i class="fa fa-shopping-cart pl-3" aria-hidden="true"></i>
//         </Link></div>
//         {/* <div class="ml-0 p-2 bd-highlight p-3">Hello</div> */}
//         <div class="ml-auto p-2 bd-highlight p-3"><span className="px-3">Hello Mr X</span><Link to="/" onClick={()=>clearCart() } >
//           Clear Cart
//           <i class="fa fa-trash pl-3" aria-hidden="true"></i>
//         </Link></div>
//       </div>
//   );
// }

export default App;