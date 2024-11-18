import { Link } from "react-router-dom";
type Props = {className?: string};

const Nav: React.FC<Props> = (className) => {
  return (
    <div className={`nav${className && ""}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
