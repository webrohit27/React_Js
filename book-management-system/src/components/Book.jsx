import { useState } from "react";
import "./Book.css";

function Book(props){
    
    let [idContent, setIdContent] = useState(<span id="container-data1" className="book-data"> {props.id} </span>);
    let [titleContent, setTitleContent] = useState(<span id="container-data2" className="book-data"> {props.title} </span>);
    let [authorContent, setAuthorContent] = useState(<span id="container-data3" className="book-data"> {props.author}  </span>);
    let [priceContent, setPriceContent] = useState(<span id="container-data4" className="book-data"> {props.price} </span>);


     function handleUpdate(event){
        event.preventDefault();
        setIdContent(<input type="text" id="input-data1" className="input-data"></input>);
        setTitleContent(<input type="text" id="input-data2" className="input-data"></input>);
        setAuthorContent(<input type="text" id="input-data3" className="input-data"></input>);
        setPriceContent(<input type="text" id="input-data4" className="input-data"></input>);
     }
    return(
        <div id="book-container">
            
            {idContent}
            {titleContent}
            {authorContent}
            {priceContent}
            
            
             <button id="remove-btn" className="btn"onClick={()=>{props.handleRemove(props.id)}}>Remove</button>
             <button id="update-btn" className="btn" onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default Book;
