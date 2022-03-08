import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/all_Articles">All articles</Link>
        </nav>
    );
};