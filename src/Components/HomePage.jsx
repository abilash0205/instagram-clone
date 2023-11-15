import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <li>
        <Link to="/homepage">Home</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
      <li>
        <Link to="/reels">Reels</Link>
      </li>
      <li>
        <Link to="/message">Messages</Link>
      </li>
      <li>
        <Link to="/notification">Notifications</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link>Threads</Link>
      </li>
      <li>
        <Link to="/more">More</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </div>
  );
};

export default HomePage;
