import React, { useContext } from 'react';
import Nav from './Nav';
import './Style.css';
import { ThemeContext } from '../context';

const Home = () =>{
  const {isLight} = useContext(ThemeContext)
  return(
    <>
      <div className={isLight?'light':'dark'}>
        <Nav />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dignissimos autem neque sunt iusto hic, tempore voluptatibus odio minus? Laudantium nisi consequuntur minus voluptas doloribus necessitatibus dolores numquam dignissimos eveniet quod aliquam eum iste magnam sed, aliquid illo explicabo est praesentium modi facilis tempore recusandae maiores ipsum ipsam? Fuga dolorem cupiditate beatae alias perferendis officiis facere velit id unde odit, voluptas eveniet neque animi minima ex molestiae quod provident. Cumque voluptatum facere labore quod quam quidem numquam ea in officia reiciendis neque quasi possimus ab tempora obcaecati nihil nostrum atque molestias, modi consequuntur porro quia architecto dolore repellendus. Amet, animi?</p>
      </div>
    </>
  )
}

export default Home;