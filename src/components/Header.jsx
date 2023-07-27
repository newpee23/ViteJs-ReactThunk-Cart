import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { setAuth } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state?.cart);
  const { user } = useSelector((state) => state?.auth);
  const totalQty = cart?.reduce((sum, item) => sum + item.qty, 0) ?? 0;
  // const totalItemICart = cart?.length;

  const dispatch = useDispatch();
  return (
    <nav>
      <div className="w-full">
        <ul className="nav-wrapper">
          <li>
            <Link to="/">Product</Link>
          </li>
          {user && (
            <li>
              <Link to="/cart">
                Cart
                <span className="text-red-700 p-2 bg-cyan-50 rounded-full ml-1">
                  {totalQty ? totalQty : 0}
                </span>
              </Link>
            </li>
          )}
          <li>
            {user ? (
              <button onClick={() => dispatch(setAuth(null))}>Sign Out</button>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
