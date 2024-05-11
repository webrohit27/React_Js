import React from 'react'
import "./AddBook.css";


function AddBook(props) {

    function handleChangeId(event){
        props.setEnterId(event.target.value);
    }

    function handleChangeTitle(event){
        props.setEnterTitle(event.target.value);
    }

    function handleChangeAuthor(event){
        props.setEnterAuthor(event.target.value);
    }

    function handleChangePrice(event){
        props.setEnterPrice(event.target.value);
    }
    



  return (

    <div className='form-container'>

      <form className='form-div' onSubmit={props.handleSubmit} >
       Id:<input type='text' id='id' onChange={handleChangeId}/>
       Title:<input type='text' id='id' onChange={handleChangeTitle}/>
       Author:<input type='text' id='id' onChange={handleChangeAuthor}/>
       Price:<input type='text' id='id' onChange={handleChangePrice}/>

       <input type="submit" value="Add" id="add-btn" />



      </form>
    </div>
  )
}

export default AddBook;
