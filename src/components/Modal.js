import {useState} from 'react' 

const Modal = ({handleAdd}) => {
    const [title, setTitle] = useState('');

    const onSubmit =(e)=>{
        e.preventDefault();

        if(!title){
            alert('Please add a task')
            return
        }
        
        handleAdd({title});

        setTitle('');
    }

    return (
        <div>
            <form className = 'add-form' onSubmit = {onSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)} 
                    placeholder ='Type to add task...'
                />
                <button className = 'btn' >Save</button>
            </form>
        </div>
    )
}

export default Modal
