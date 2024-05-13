import React, { useState } from 'react'
import Book from "./components/Book";
import "./App.css";
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import useFetch from './useFetch';




function App(){

  let[enterId, setEnterId] = useState("");
  let[enterTitle, setEnterTitle] = useState("");
  let[enterAuthor, setEnterAuthor] = useState("");
  let[enterPrice, setEnterPrice] = useState("");


  let [books, setBooks] = useState(null);
  let {error} = useFetch('http://localhost:8000/books', setBooks);


  fetch('http://localhost:8000/books')
  .then((response)=>{
    return response.json();
  }).then((data)=>{
    setBooks(data);
    console.log(data);
  })




  function handleRemove(id){
    /*
   let newBooks = books.filter(
    (element)=>{
      return element.id!=id;
    }
   
   setBooks(newBooks)*/
  }


  function handleSubmit(event){
    /*
     event.preventDefault();

     let book = {
                  id: enterId,
                  title: enterTitle,
                  author: enterAuthor,
                  price: enterPrice
     }
     let newBooks = [...books];
     newBooks.push(book);

     setBooks(newBooks);
     */
  }

  return(
   
    <div id='main-container'>
     
     <Navbar />

    <AddBook handleSubmit={handleSubmit} 
             setEnterId={setEnterId}
             setEnterTitle={setEnterTitle}
             setEnterAuthor={setEnterAuthor}
             setEnterPrice={setEnterPrice}    
    />     

   {
     !error ? books &&
     books.map(
        (element)=>{
          return <Book 
          key={element.id} 
          id={element.id} 
          title={element.title} 
          author={element.author}
           price={element.price} 
          handleRemove={handleRemove} />
        }
     )
    }
    </div>
  );
}

export default App;
