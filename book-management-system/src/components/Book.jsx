
import React from 'react';
import { useState } from 'react';
import './Book.css';

function Book(props){

    let[isUpdating, setIsUpdating] = useState(false);

    let[updatedId, setUpdatedId] = useState(props.id);
    let[updatedTitle, setUpdatedTitle] = useState(props.title);
    let[updatedAuthor, setUpdatedAuthor] = useState(props.author);
    let[updatedPrice, setUpdatedPrice] = useState(props.price);



    // isUpdating variable = false
    // now isUpdating is true
    function handleUpdate() {
        if (!isUpdating) {
            setIsUpdating(true);
            return;
        }
    
        const updatedBook = {
            id: updatedId,
            title: updatedTitle,
            author: updatedAuthor,
            price: updatedPrice
        };
    
        fetch(`http://localhost:8000/books/${updatedId}`, {
            method: 'PUT', // or 'PATCH' depending on your API
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBook)
        })
        .then(response => {
            if (!response.ok) throw new Error('Failed to update book');
            // Update local state with the updated book data
            const updatedBooks = props.books.map(book => 
                book.id === updatedId ? updatedBook : book
            );
            props.setBooks(updatedBooks);
            setIsUpdating(false);
        })
        .catch(error => console.error('Error updating book:', error));
    }
    
    

    function handleIdChange(event) {
        setUpdatedId(event.target.value);
    }

    function handleTitleChange(event){
        setUpdatedTitle(event.target.value);
    }

    function handleAuthorChange(event){
        setUpdatedAuthor(event.target.value);
    }


    function handlePriceChange(event){
        setUpdatedPrice(event.target.value);
    }

    return(
        <div id="book-container">

            {isUpdating ? 
                <input  
                    type="text"
                    id="input-data1"
                    className="input-data"
                    onChange={handleIdChange}
                    value={updatedId}
                    
            />
            :
                <span id="container-data1" className='book-data'>{props.id}</span>
            }


            {
                isUpdating?
                    <input
                        type="text"
                        id="input-data2"
                        className="input-data"
                        onChange={handleTitleChange}
                        value = {updatedTitle}

                    />
                :
                    <span id="container-data2" className='book-data'>{props.title}</span> 

            }

{
                isUpdating?
                    <input
                        type="text"
                        id="input-data3"
                        className="input-data"
                        onChange={handleAuthorChange}
                        value = {updatedAuthor}
                    />
                :
                    <span id="container-data3" className='book-data'>{props.author}</span> 

            }


{
                isUpdating?
                    <input
                        type="text"
                        id="input-data4"
                        className="input-data"
                        onChange={handlePriceChange}
                        value={updatedPrice}
                    />
                :
                    <span id="container-data4" className='book-data'>{props.price}</span> 

            }

          <button id="remove-btn" className='btn' onClick={()=>{props.handleRemove(props.id)}}>Remove</button>
          <button id="update-btn" className='btn' onClick={handleUpdate} > {isUpdating ? "Save" : "Update"} </button>
        </div>
    );
}
export default Book;
