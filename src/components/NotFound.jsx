import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h2>404: Page Not Found</h2>
            <p>The page you're looking for does not exist.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default NotFound;