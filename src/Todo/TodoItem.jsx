import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Context from '../Context';


const styles = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem' 
        },
        input: {
            marginRight: '1rem'
        }
}


function Todoitem({element, id, onChange}) {
    const classes = []
if(element.completed){
    classes.push('done')
}
const {removeTodo} = useContext(Context)
  return (
    <div>
     <li style = {styles.li}>
        <span className= {classes.join(' ')}>
            <input type='Checkbox'  checked = {element.completed} style = {styles.input} onChange = {() => onChange(element.id)}/> 
            <strong>{id + 1}</strong> 
            &nbsp;                                                  
            {element.title}
        </span>
        <button className = 'rm' onClick={() => removeTodo(element.id)}>&times;</button>
     </li>                                             
    </div>                                                   // &nbsp; - пробел, &times; - крестик
  );
}
    Todoitem.propTypes = {
        element: PropTypes.object.isRequired,
        id: PropTypes.number,
        onChange: PropTypes.func.isRequired,
    }

export default Todoitem;