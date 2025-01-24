import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/booksSlice';
import Footer from "./Footer.jsx";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  function handleChange(e){
    const { name, value } = e.target;
     setFormData((prevFormData) => ({
            ...prevFormData,
           [name]: value
       }))
    }

    function validateForm(){
        let newErrors = {}
        if (!formData.title) {
            newErrors.title = "Title is Required";
         }
        if (!formData.author) {
            newErrors.author = "Author is Required";
         }
        if (!formData.category) {
          newErrors.category = "Category is Required";
         }
        if (!formData.description) {
          newErrors.description = "Description is Required";
         }
         if (!formData.rating) {
           newErrors.rating = "Rating is Required";
          } else if (isNaN(parseFloat(formData.rating)) || parseFloat(formData.rating) < 0 || parseFloat(formData.rating) > 5){
               newErrors.rating = "Rating must be a number between 0 and 5"
         }
        if (!formData.image) {
           newErrors.image = "Image URL is Required";
          }
        setErrors(newErrors);
         return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e){
         e.preventDefault();
          if (validateForm()){
              const newBook = {...formData, id: Date.now(), rating: parseFloat(formData.rating)};
              dispatch(addBook(newBook));
              navigate('/books')
            }
        }
    return (
        <>
        <div className="container">
            <div className="add-book">
                <h2><center>Add a New Book</center></h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        />
                        {errors.title && <p style={{color:"red"}}>{errors.title}</p>}

                    <label>Author</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        />
                        {errors.author && <p style={{color:"red"}}>{errors.author}</p>}

                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        />
                     {errors.category && <p style={{color:"red"}}>{errors.category}</p>}

                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                         {errors.description && <p style={{color:"red"}}>{errors.description}</p>}

                    <label>Rating</label>
                    <input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                       />
                        {errors.rating && <p style={{color:"red"}}>{errors.rating}</p>}

                    <label>Image URL</label>
                   <input
                       type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      />
                   {errors.image && <p style={{color:"red"}}>{errors.image}</p>}

                    <center><button type="submit">Add Book</button></center>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default AddBook;