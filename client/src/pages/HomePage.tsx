import { Link } from 'react-router-dom';


export default function homepage() {

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