import React from 'react';
import { Link } from 'react-router-dom';
import './error-404.css';

const Error404 = () => {
  return (
    <div className='error-container'>
      <h2 className='error-title'>404</h2>
      <p className='error-text'>Oups! La page que vous demandez n'existe pas</p> 
      <Link to="/"><p className='link-text'>Retourner sur la page d'accueil</p></Link>    
    </div>
  );
}

export default Error404;