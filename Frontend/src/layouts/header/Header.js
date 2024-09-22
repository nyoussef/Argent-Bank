import { Link } from "react-router-dom";
import "./header.css";
import argentBankLogo from "../../img/argentBankLogo.webp";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/action";

const Header = () => {
  const { token, user } = useSelector(state => state.user); 
  const dispatch = useDispatch();
  const onLogOut = () => {
    logOutUser(dispatch);
  }
  
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src= {argentBankLogo} alt="Argent Bank Logo"/>
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {token ? (
            <>
              <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {user && user.userName ? user.userName : "Guest"}
              </Link>
              <button className="main-nav-item logout-button" onClick={onLogOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </button>
            </>
          ) : (
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
