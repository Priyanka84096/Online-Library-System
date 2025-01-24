import { Link } from 'react-router-dom';
import Footer from "./Footer.jsx";

function Home() {
    const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Thriller','Romance'];
    const popularBooks = [
        {id: 1, title: 'The Hitchhiker\'s Guide to the Galaxy', category: 'Sci-Fi' },
        {id: 15, title: 'Sapiens: A Brief History of Humankind', category: 'Non-Fiction' },
        {id:2, title: 'Pride and Prejudice', category:'Romance'},
        {id:6, title: 'The Girl with the Dragon Tattoo', category: 'Non-Fiction'}
      ];
      return (
        <>
        <div className="home-page">
          <h1>Welcome to the Online Library</h1>
          <div className="categories">
            <h2>Book Categories</h2>
            <p>Explore our collection of books and discover new reads.</p>
            <ul>
              {categories.map((category) => (
                <Link to={`/books/${category}`} key={category}>
                 <button className="categories buttton">{category}</button>
                </Link>
                // <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
            <div className="popular-books">
                <h2>Popular Books</h2>
                <ul>
                    {popularBooks.map((book)=>(
                        <li key={book.id}>
                          <Link to={`/book/${book.id}`}>{book.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer/>
        </>
      );
    };
    
    export default Home;
