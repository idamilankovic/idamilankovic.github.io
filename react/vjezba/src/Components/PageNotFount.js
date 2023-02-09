import React from 'react'
import { useLocation } from 'react-router-dom';

function PageNotFound() {
let location = useLocation();

  return (
    <div>Trying to enter page {location.pathname} that doesn't exist.</div>
  )
}

export default PageNotFound