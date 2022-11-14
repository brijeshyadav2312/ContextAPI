import React, { useContext } from 'react';
import Nav from './Nav';
import './Style.css';
import { ThemeContext } from '../context';

const Service = () =>{

  const {isLight} = useContext(ThemeContext);

    return(
        <>
          <div className={isLight?'light':'dark'}>
            <Nav />
            <h1> Our service are not avilable </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet, corrupti fuga possimus, atque officia cum provident id eius unde vero quas autem. Sequi voluptatum dolorum itaque corrupti autem eius pariatur. Molestiae, aspernatur temporibus asperiores architecto illo ipsum corporis suscipit ipsa distinctio blanditiis saepe pariatur, a officia id magni eos.</p>
          </div>    
        </>
    )
}

export default Service;