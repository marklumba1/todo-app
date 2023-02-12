import "../style/card.css"
const Card = ({todo, handleDelete, handleDone}) => {
    return ( 
        <div className="card-container">
            <h2 style={todo.done ? {textDecoration: `line-through`}: {}}>{todo.name}</h2>
            <div className="btn-group">
                <button className="delete" onClick={() => handleDelete(todo.name)}>Delete</button>
                <button onClick={() => handleDone(todo.name)}>{todo.done ? 'Undone' : 'Done'}</button>
            </div>
          
        </div>
     );
}
 
export default Card;