import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="notfound">
            <h2>Sorry</h2>
            <p>Page not Found</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;