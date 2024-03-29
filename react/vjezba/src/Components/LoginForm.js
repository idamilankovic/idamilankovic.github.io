import React, { useState } from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "", email:"", password:""});

    const submitHandler = (event) => {
        event.preventDefault();     //ne želimo da se rerendera stranica 

        Login(details);         //zovemo funkciju login  i prosljeđujemo details
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" onChange={event => setDetails({...details, name:event.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email" onChange={event => setDetails({...details, email: event.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={event => setDetails({...details, password: event.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN"/>
        </div>
    </form>
  )
}

export default LoginForm;