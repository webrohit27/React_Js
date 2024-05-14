import React from 'react';

import {useEffect, useState} from 'react';
import Book from './components/Book';
import AddBook from './components/AddBook';
import useFetch from './useFetch';


function App() {

    let[enteredId, setEnteredId] = useState("");
    let[enteredTitle, setEnteredTitle] = useState("");
    let[enteredAuthor, setEnteredAuthor] = useState("");
    let[enteredPrice, setEnteredPrice] = useState("");

    let[books, setBooks] = useState(null);

    let {error} = useFetch('http://localhost:8000/books', setBooks);

/*
useEffect(() => {
    fetch('http://localhost:8000/books')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            return response.json();
        })
        .then(data => {
            setBooks(data);
        })
        .catch(error => {
            // Handle error
            console.error('Error fetching books:', error);
            // Optionally, you can set a default state or show an error message
        });
}, []);
*/


/*
    useEffect(()=>{
        console.log(books);
    }, [books]);

*/



    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setBooks(data);
            console.log(data);
        })
    
    }, [])


    //                     4
    function handleRemove(id){
        /*
        let newBooks = books.filter(
            (element)=>{
                return element.id !=id;
            }
        )
        setBooks(newBooks);
        */

        fetch(`http://localhost:8000/books/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to remove book');
            }
            // Update the state of books after successful removal
            let newBooks = books.filter(
                (element)=>{
                    return element.id !=id;
                }
            )
            setBooks(newBooks);
        })
        .catch(error => {
            // Handle error
            console.error('Error removing book:', error);
        });
    }   

    function handleSubmit(event) {
        event.preventDefault();
        let book = {
                      id: enteredId,
                      title: enteredTitle,
                      author: enteredAuthor,
                      price: enteredPrice
                   }

        fetch('http://localhost:8000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
        })
        .then(()=>{
            let newBooks = [...books];
            newBooks.push(book);
            setBooks(newBooks); 

            setEnteredId("");
            setEnteredTitle("");
            setEnteredAuthor("");
            setEnteredPrice(""); 
        })

        

    /*
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add book');
        }
        return response.json();
    })
    .then(book => {
        console.log('Book added successfully:', book);
        let newBooks = [...books];
        newBooks.push(book);
        setBooks(newBooks);

    })
    .catch(error => {
        // Handle error
        console.error('Error adding book:', error);
    });
    */
    }

    return(
        <div id="main-container">
            
            <AddBook  
                handleSubmit={handleSubmit} 
                setEnteredId={setEnteredId} 
                setEnteredTitle={setEnteredTitle} 
                setEnteredAuthor={setEnteredAuthor} 
                setEnteredPrice={setEnteredPrice}
                enteredId={enteredId}
                enteredTitle={enteredTitle}
                enteredAuthor={enteredAuthor}
                enteredPrice={enteredPrice}
                >
            </AddBook>
            {   
                !error ? books &&                                         // to make sure book is not null
                books.map(
                    (element)=>{
                        return <Book 
                                    key={element.id} 
                                    id={element.id} 
                                    title={element.title} 
                                    author={element.author} 
                                    price={element.price} 
                                    handleRemove={handleRemove}
                                    books = {books}
                                    setBooks = {setBooks}
                                    >    
                                </Book>
                    }
                ) 
                :
                error 
            }                    
        </div>
    );
}

export default App;

