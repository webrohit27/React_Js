import React, { useState } from 'react'
import Book from "./components/Book";
import "./App.css";
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';




function App(){

  let[enterId, setEnterId] = useState("");
  let[enterTitle, setEnterTitle] = useState("");
  let[enterAuthor, setEnterAuthor] = useState("");
  let[enterPrice, setEnterPrice] = useState("");


  let [books, setBooks] = useState(

   [
      {
        id: 1,
        title: "Family Matters",
        author: "Rohinton Mistry",
        price: 125
      },
     
      {
        id: 2,
        title: " A Suitable Boy",
        author: "Vikram Seth",
        price: 108
      },
    
      {
        id: 3,
        title: "Harry Potter",
        author: "J. K. Rowling",
        price: 180
      },
    
      {
        id: 4,
        title: "Learning How to Fly",
        author: "Abdul Kalam",
        price: 199
      },
    ]
  );


  function handleRemove(id){
   let newBooks = books.filter(
    (element)=>{
      return element.id!=id;
    }
   )
   setBooks(newBooks)
  }


  function handleSubmit(event){
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
