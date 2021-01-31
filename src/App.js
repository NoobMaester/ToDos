import {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from "./components/Header";
import Todos from './components/Todos';
import About from './components/About'
import Modal from './components/Modal';
function App() {

  const [list, setList] = useState([
    {
      id:1,
      title:'Do some coding.',
      completed:false
    },
    {
      id:2,
      title:'Play some call of duty.',
      completed:false
    },
    {
      id:3,
      title:'Watch some Movies.',
      completed:false
    },
    {
      id:4,
      title:'Do something else.',
      completed:false
    }
  ]);

  const handleChange = (id) =>{
    const newList = list.filter((list) => list.id!==id);
    setList(newList);
  }

  const handleAdd = (lst)=>{
    console.log(lst)
    const id = Math.floor(Math.random() * 10000) + 1
    const newList = {id, ...lst};
    setList([...list, newList])
  }


  return (
    <Router>
      <div className="container">
        <Header />

        
        <Route path ='/' exact render={(props)=> (
          <>
            <Modal handleAdd={handleAdd} />
            {list.length > 0 ? <Todos list = {list} handleChange ={handleChange} /> : 
            <div style ={{padding:'20px'}}> No Tasks! </div>}
          </>
        )} />
        <Route path='/about' component={About} />

        <Footer />      
      </div>
    </Router>
  );
}

export default App;
