import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../../assets/styles/header.css';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideUserActionsOn = ['/login', '/registration'];
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <header
      className="header__background"
      aria-label="Site Header"
      role="banner"
    >
      <div className="header__container">

        <Link
          to="/"
          className="header-logo-group__link"
          aria-label="Project Buddy Home"
        >
          {/* Replace with actual logo image <img src="/logo.png" alt="Project Buddy Home" className="header-logo-img" />*/}
          <span
            className="header-logo-text"
            aria-hidden="true"
          > ProjectBuddy
          </span>
        </Link>

        {!hideUserActionsOn.includes(location.pathname) && (
          <nav
            className="user-actions"
            aria-label="User Actions"
          >
            {!isAuthenticated ? (
              <button
                className="login-btn"
                onClick={() => navigate('/login')}
                aria-label="Login"
              > Login
              </button>
            ) : (

              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/');
                }}
                aria-label="Logout"
              > Logout
              </button>
            )}
          </nav>
        )}

      </div>
    </header>
  );
}