import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'



const Header = (props) => {
  const clearCart = () => {
    sessionStorage.clear();
  }
  return (
      <div className="d-flex bd-highlight mb-3 container">
        <div className="p-2 bd-highlight p-3"><Link to="/">
          Home
          <i className="fa fa-th-list pl-3" aria-hidden="true"></i>
        </Link></div>
        <div className="p-2 bd-highlight p-3"><Link to="/cart">
          Cart
          <i className="fa fa-shopping-cart pl-3" aria-hidden="true">{props.count}</i>
        </Link></div>
        <div className="p-2 bd-highlight p-3"><Link to="/login">
          Login
          <i className="fa fa-sign-in pl-3" aria-hidden="true"></i>
        </Link></div>
        {/* <div className="ml-0 p-2 bd-highlight p-3">Hello</div> */}
        <div className="ml-auto p-2 bd-highlight p-3"><span className="px-3">Hello {props.userName}</span><Link to="/" onClick={()=>clearCart() } >
          Clear Cart
          <i className="fa fa-trash pl-3" aria-hidden="true"></i>
        </Link></div>
      </div>
  );
} 

const mapStateToProps = (state) => ({
  userName: state.login.name || '',
  count: state.homereducer.cart
})


export default connect(mapStateToProps,)(Header)

// export default Header;