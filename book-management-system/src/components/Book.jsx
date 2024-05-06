import { Fragment } from "react";
import "./Book.css";

function Book() {
    return(
       <div id="book-container">
        <span className="book-data"> id</span>
        <span className="book-data"> title</span>
        <span className="book-data"> author</span>
        <span className="book-data"> price</span>
       </div>
    );
}

export default Book;