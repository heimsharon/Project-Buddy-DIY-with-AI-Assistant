import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function homepage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProfile().then(profile => setUser(profile))
      .catch(() => navigate('/login'));
  } [navigate]);

  if (!user) {
    return <div> Loading....</div>;
  }

  return (
    <div className="dashboard__background">
      <div className="homepage__hero-content">
        <h1> Welcome Home</h1>
        <p> Add Text.... Also Icons/emojis.</p>
        <Link to="/projectcreate"
          className="homepage__btn--call-to-action"
        > Create A Project
        </Link>
      </div>

      <h2
      > Features
      </h2>
      <div className="dashboard__features">

      </div>
    </div>
  );
}