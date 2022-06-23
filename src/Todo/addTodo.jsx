import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = (onCreate) => {

    const [value, setValue] = useState('')
    const SubmitHandler = (e) => {
        e.preventDefault()
        if(value.trim()){
            onCreate(value)
        }
    }

    return(
        <form style = {{marginBottom: '1rem'}} onSubmit = {SubmitHandler}>
            <input onChange={e => setValue(e.target.value)} value = {value}/>
            <button type = 'submit'>Создать запись</button>
        </form>
    )
}
    AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo;