import React from 'react'
import "./AddBook.css";


function AddBook(props) {

    function handleChangeId(event){
        props.setEnteredId(event.target.value);
    }

    function handleChangeTitle(event){
        props.setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event){
        props.setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event){
        props.setEnteredPrice(event.target.value);
    }
    



  return (

    <div className='form-container'>

      <form className='form-div' onSubmit={props.handleSubmit}  >
       Id:<input type='text' id='id' onChange={handleChangeId} value={props.enteredId}/>
       Title:<input type='text' id='id' onChange={handleChangeTitle} value={props.enteredTitle}/>
       Author:<input type='text' id='id' onChange={handleChangeAuthor} value={props.enteredAuthor}/>
       Price:<input type='text' id='id' onChange={handleChangePrice} value={props.enteredPrice}/>

       <input type="submit" value="Add" id="add-btn" />



      </form>
    </div>
  )
}

export default AddBook;
