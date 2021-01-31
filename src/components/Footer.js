import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';

const Footer = () => {
    const location =useLocation();
    return (
        <div style = {{textAlign: 'center', paddingBottom:'20px'}}>
            <div>Copyright &copy; Booyah!</div> 
            {location.pathname !== '/about' && <Link to="/about">About</Link>}
        </div>
    )
}

export default Footer
