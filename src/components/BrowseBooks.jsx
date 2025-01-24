import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookItem from './BookItem.jsx';
import Footer from "./Footer.jsx";

function BrowseBooks() {
    const { category } = useParams();
    const [searchText, setSearchText] = useState("");
    const books = useSelector((state) => state.books.books);

    const filteredBooks = books
    .filter((book) => !category || book.category === category)
    .filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase()) ||
    book.author.toLowerCase().includes(searchText.toLowerCase())
     )
    

    return (
        <>
        <div className="browse-books-page">
           <h2>
            {category ? `Books in ${category} Category` : 'All Books'}
           </h2>
                <input
                type="text"
                placeholder="Search by title or author"
                value={searchText}
                className="search-input"
                onChange={(e) => setSearchText(e.target.value)}
                />
           
           <div className="book-list">
                {/* {filteredBooks.map((book) => (
                   <BookItem key={book.id} book={book} />
               ))} */}
                {filteredBooks && filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                 <BookItem key={book.id} book={book}/>
               ))
              ) :(<p className="nofound"><center>No books found in this category</center></p>)}
           </div>
        </div>
        <Footer/>
       </>
    );
}
export default BrowseBooks;