import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context';

const Nav = () =>{
  const {isLight, changeTheme} = useContext(ThemeContext);
  return(
    <div>
      <div>Geekster</div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/contact">Contant</Link>
      <br/>
      <Link to="/service">Service</Link>
      <br/>
      <button onClick={()=>{
        changeTheme()}}>Toggle theme to {isLight?"Dark":"Light"}</button>
    </div>
  )
}

export default Nav;