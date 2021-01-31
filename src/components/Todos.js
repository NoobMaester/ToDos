import Todo from './Todo'
const Todos = ({list, handleChange}) => {
    return (
        <div>
            {list.map((list) => (
            <Todo
                key ={list.id}
                list ={list}
                handleChange = {handleChange}> 
            </Todo>
            ))}
        </div>
    )
}

export default Todos
