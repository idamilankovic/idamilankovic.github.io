import React from 'react'
import {useNavigate} from 'react-router-dom';

function Projects() {
    let navigate = useNavigate();
    function handleClick() {
        navigate ("/about");
        console.log(navigate);
    }

  return (
    <div>This is the projects page.
        <button onClick={handleClick}>Go to the About page</button>
        
    </div>
  )
}

export default Projects;