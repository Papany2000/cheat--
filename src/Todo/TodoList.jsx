import React from 'react';
import Todoitem from './TodoItem';
import PropTypes from 'prop-types';


const styles = {              // так можно задавать стили в react
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function Todolist(props) {



  return (
    <div>
        <ul style = {styles.ul}>
            {props.todos.map((element, id) => <Todoitem element = {element} id = {id} key = {element.id} onChange = {props.onToggle}/>)}
        </ul>
    </div>
  );
}
        Todolist.propTypes = {
            todos: PropTypes.arrayOf(PropTypes.object).isRequired,
            onToggle: PropTypes.func.isRequired,
        }

export default Todolist;