
const Todo = ({list, handleChange}) => {
    return (
        <div className='todo-list'>
            <input 
                type="checkbox" 
                className = "checkbox" 
                onChange = {() =>handleChange(list.id)}
            /> <>{list.title}</>
        </div>
    )
}

export default Todo
