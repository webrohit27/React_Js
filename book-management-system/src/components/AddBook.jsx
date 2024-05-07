import React from 'react'
import "./AddBook.css";


function AddBook(props) {

    function handleChangeId(event){
        props.setId(event.target.value);
    }

    function handleChangeTitle(event){
        props.setTitle(event.target.value);
    }

    function handleChangeAuthor(event){
        props.setAuthor(event.target.value);
    }

    function handleChangePrice(event){
        props.setPrice(event.target.value);
    }
    



  return (
    <div className='form-container'>

      <form className='form-div' onSubmit={props.handleSubmit} >
       id:<input type='text' id='id' onChange={handleChangeId}/>
       Title:<input type='text' id='id' onChange={handleChangeTitle}/>
       Author:<input type='text' id='id' onChange={handleChangeAuthor}/>
       Price:<input type='text' id='id' onChange={handleChangePrice}/>

       <input type="submit" value="add" id="add-btn" />



      </form>
    </div>
  )
}

export default AddBook;
