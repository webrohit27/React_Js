
import "./Book.css";

function Book(props){
    

    return(
        <div id="book-container">
            <span id="container-data1" className="book-data"> {props.id} </span>
            <span id="container-data2" className="book-data"> {props.title} </span>
            <span id="container-data3" className="book-data"> {props.author}  </span>
            <span id="container-data4" className="book-data"> {props.price} </span>
             
             <button id="remove-btn" onClick={()=>{props.handleRemove(props.id)}}>Remove</button>
        </div>
    );
}

export default Book;
