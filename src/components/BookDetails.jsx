import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowRight } from "react-icons/fa";

function BookDetails() {
    const { id } = useParams();
    const books = useSelector((state) => state.books.books);
    const book = books.find((book) => book.id === Number(id));
    // const book = books.find((book) => book.id === parseInt(id, 15));//10

    if (!book) {
        return <div className="container">Book not found!</div>;
    }

    return (
        <div className="container">
            <div className="book-detail">
              <img src={book.image} alt={book.title} />
               <h1>{book.title}</h1>
               <p>By: {book.author}</p>
               <p>Description: {book.description}</p>
               <p>Rating: {book.rating}/5</p>
               <Link to="/books">Back <FaArrowRight /></Link>
            </div>
        </div>
    );
}
export default BookDetails;