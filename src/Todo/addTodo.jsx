import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = (props) => {

    const [value, setValue] = useState('')
    const submitHandler = (event) => {
        event.preventDefault()
        if(value.trim()){
            props.onCreate(value)
            setValue('')
        }
    }

    return(
        <form style = {{marginBottom: '1rem'}} onSubmit = {submitHandler}>
            <input onChange={event => setValue(event.target.value)} value = {value}/>
            <button type = 'submit'>Создать запись</button>
        </form>
    )
}
    AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo;