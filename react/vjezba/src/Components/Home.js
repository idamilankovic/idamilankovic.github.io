import React from 'react';
import { useParams } from 'react-router-dom';

function Home(){

    let { name } = useParams();

  return (
    <div>This is the home page. You are {name}</div>
  )
}

export default Home;