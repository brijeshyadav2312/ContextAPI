import React, { useContext } from 'react';
import Nav from './Nav';
import './Style.css';
import { ThemeContext } from '../context';

const Contant = ()  =>{
  const {isLight} = useContext(ThemeContext);
    return(
        <>
          <div className={isLight?'light':'dark'}>
            <Nav />
            <h1>You can mail me help@geekster.in</h1>
          </div>  
        </>  
    )
}

export default Contant;