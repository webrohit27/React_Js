import React from 'react';
import './AddBook.css';

function AddBook(props){

    function handleChangeId(event) {
        props.setEnteredId(event.target.value);
    }

    function handleChangeTitle(event) {
        props.setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        props.setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        props.setEnteredPrice(event.target.value);
    }


    return (
        <div className="form-container">

            <form className='form-div' onSubmit={props.handleSubmit}>
                
                <span id='inner-container'>
                    <span id='label-id' className='input-labels'> id:</span><input type = "text" id="id" className='input-field' onChange={handleChangeId} value={props.enteredId}></input>
                    <span id='label-title' className='input-labels'> Title:</span> <input type = "text" id="title" className='input-field' onChange={handleChangeTitle} value={props.enteredTitle} ></input>
                    <span id='label-author' className='input-labels'> Author:</span><input type = "text" id="author" className='input-field' onChange={handleChangeAuthor} value={props.enteredAuthor}></input>
                    <span id='label-price' className='input-labels'> Price:</span> <input type = "text" id="price" className='input-field' onChange={handleChangePrice} value={props.enteredPrice}></input>

                    <input type="submit" value="add" id="add-btn"/>
                </span>
            
            </form>
        </div>  
    );
}

export default AddBook;