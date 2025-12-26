import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../../assets/styles/header.css';


export default Header() {
  const locations = useLocation = ();
  const navigate = useNavigate = ();

  const hideUserActionsOn = ['/login', '/registration'];
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <header className="header">
      <div className="header-logo-group"
        onClick{() => navigate('/')}
        aria-label="Project Buddy Logo with link to Home Page"
        role="img"
      />
      {!hideUserActionsOn.includes(location.pathname) && (
        <div className="user-actions">
          {!isAuthenticated ? (
            <button className="login-btn"
              onClick{() => navigate('/login')}
            > Login
            </button>
          ) : (
            <button className="logout-btn"
                onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
            > Logout
            </button>
          )}
        </div>
      )}

    </header>
  );
};