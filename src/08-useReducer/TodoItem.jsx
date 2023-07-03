export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {

    const { description, id } = todo;

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span 
                className= {`align-self-center ${(todo.done) ? 'text-decoration-line-through':''}`}
                onClick={ () => onToggleTodo(id) }
            >{description}</span>
            <button
                className='btn btn-danger'
                onClick={() => onRemoveTodo(id)}
            >Remove</button>
        </li>
    );
}
