import { Link } from 'react-router-dom';

function BookItem({ book }) {
    return (
        <div className="book-item">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>By: {book.author}</p>
           <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
    );
}
export default BookItem;