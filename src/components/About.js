import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style = {{
            padding: '20px',
            color:'rgb(50, 50, 50)',
            
        }}>
            <h4>Version 2.0</h4>
            <Link to="/" style ={{fontSize:'12px'}} >Head Back</Link>
        </div>
    )
}

export default About
