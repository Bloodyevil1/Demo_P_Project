import { Link } from "react-router-dom";
import "./Levels.css";


function Levels() {
  return (
    <div className="main">
      <div className="cat">
        <Link to="/level1"><button>Level 1</button></Link>
        <Link to="/level2"><button>Level 2</button></Link>
        <Link to="/level3"><button>Level 3</button></Link>
      </div>
    </div>
  );
}

export default Levels;
